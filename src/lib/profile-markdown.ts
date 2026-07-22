/**
 * Pure Markdown renderer for the resume data, served at /api/profile.md.
 * Output is optimized for LLM consumption (ChatGPT, Claude, Perplexity, etc.):
 * stable heading hierarchy for chunking, every URL as an absolute Markdown
 * link, and token-efficient lists. Intentionally excluded fields: initials,
 * avatarUrl (visual-only, no value in text context).
 */

interface NamedLink {
  name?: string;
  url?: string;
}

interface EducationEntry {
  school?: string;
  degree?: string;
  start?: string;
  end?: string;
}

interface AchievementEntry {
  title?: string;
  reference?: NamedLink[];
}

interface WorkBullet {
  text?: string;
  links?: NamedLink[];
}

interface WorkEntry {
  company?: string;
  link?: string;
  badges?: string[];
  title?: string;
  start?: string;
  end?: string;
  description?: string;
  bulletPoints?: WorkBullet[];
}

interface ProjectEntry {
  title?: string;
  techStack?: string[];
  description?: string;
  link?: {
    label?: string;
    href?: string;
  };
}

interface KeyHighlight {
  title?: string;
  description?: string;
  icon?: string;
}

export interface ProfileData {
  name?: string;
  location?: string;
  locationLink?: string;
  about?: string;
  summary?: string;
  personalWebsiteUrl?: string;
  contact?: {
    email?: string;
    social?: NamedLink[];
  };
  education?: EducationEntry[];
  achievements?: AchievementEntry[];
  work?: WorkEntry[];
  skills?: string[];
  projects?: ProjectEntry[];
  keyHighlights?: KeyHighlight[];
}

/** Collapse whitespace so multi-line strings cannot break Markdown structure. */
function text(value: string | undefined): string {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

const AGE_WITH_DOB = /^(\d+)(\s+years?\s+old\s*\((\d{1,2})-([A-Za-z]{3})-(\d{4})\).*)$/;
const MONTH_INDEX: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

/**
 * The data stores age as prose ("21 years old (04-Sep-2004)"), which would
 * silently go stale. Recompute the number from the embedded DOB at render
 * time; leave any non-matching text untouched.
 */
function withComputedAge(description: string, now: Date): string {
  const match = AGE_WITH_DOB.exec(description);
  if (!match) return description;
  const [, , rest, day, monthName, year] = match;
  const month = MONTH_INDEX[monthName.toLowerCase()];
  if (month === undefined) return description;
  let age = now.getUTCFullYear() - Number(year);
  const beforeBirthday =
    now.getUTCMonth() < month ||
    (now.getUTCMonth() === month && now.getUTCDate() < Number(day));
  if (beforeBirthday) age -= 1;
  return age >= 0 && age < 150 ? `${age}${rest}` : description;
}

/** URLs in the data occasionally carry stray whitespace. */
function url(value: string | undefined): string {
  return (value ?? "").trim();
}

function link(label: string, href: string | undefined): string {
  const target = url(href);
  return target ? `[${text(label)}](${target})` : text(label);
}

function period(start: string | undefined, end: string | undefined): string {
  return [start, end].map(text).filter(Boolean).join(" – ");
}

function section(title: string, body: string[]): string[] {
  return body.length ? [`## ${title}`, "", ...body, ""] : [];
}

function headerSection(data: ProfileData): string[] {
  const lines: string[] = [`# ${text(data.name) || "Profile"}`, ""];

  if (data.about) lines.push(`> ${text(data.about)}`, "");
  if (data.summary) lines.push(text(data.summary), "");

  const facts: string[] = [];
  if (data.location) {
    facts.push(`- **Location**: ${link(data.location, data.locationLink)}`);
  }
  if (data.personalWebsiteUrl) {
    facts.push(`- **Website**: ${url(data.personalWebsiteUrl)}`);
  }
  const email = text(data.contact?.email);
  if (email) facts.push(`- **Email**: ${email}`);
  if (facts.length) lines.push(...facts, "");

  return lines;
}

function highlightsSection(data: ProfileData, now: Date): string[] {
  const items = (data.keyHighlights ?? [])
    .filter((h) => h.title || h.description)
    .map((h) => {
      const label = text(h.title);
      const value = withComputedAge(text(h.description), now);
      return `- ${label && value ? `**${label}**: ${value}` : label || value}`;
    });
  return section("At a Glance", items);
}

function workSection(data: ProfileData): string[] {
  const body = (data.work ?? []).flatMap((job) => {
    const company = link(job.company ?? "", job.link);
    const heading = [text(job.title), company].filter(Boolean).join(" — ");
    const meta = [period(job.start, job.end), ...(job.badges ?? []).map(text)]
      .filter(Boolean)
      .join(" · ");

    const lines: string[] = [`### ${heading}`, ""];
    if (meta) lines.push(`*${meta}*`, "");
    if (job.description) lines.push(text(job.description), "");

    const bullets = (job.bulletPoints ?? [])
      .filter((b) => b.text)
      .map((b) => {
        const links = (b.links ?? [])
          .filter((l) => l.url)
          .map((l) => link(l.name ?? "link", l.url))
          .join(", ");
        return `- ${text(b.text)}${links ? ` (${links})` : ""}`;
      });
    if (bullets.length) lines.push(...bullets, "");

    return lines;
  });
  return body.length ? [`## Work Experience`, "", ...body] : [];
}

function educationSection(data: ProfileData): string[] {
  const items = (data.education ?? [])
    .filter((e) => e.degree || e.school)
    .map((e) => {
      const dates = period(e.start, e.end);
      const parts = [text(e.degree) && `**${text(e.degree)}**`, text(e.school)]
        .filter(Boolean)
        .join(" — ");
      return `- ${parts}${dates ? ` (${dates})` : ""}`;
    });
  return section("Education", items);
}

function skillsSection(data: ProfileData): string[] {
  const skills = (data.skills ?? []).map(text).filter(Boolean);
  return section("Skills", skills.length ? [skills.join(", ")] : []);
}

function projectsSection(data: ProfileData): string[] {
  const items = (data.projects ?? [])
    .filter((p) => p.title)
    .map((p) => {
      const title = link(p.title ?? "", p.link?.href);
      const stack = (p.techStack ?? []).map(text).filter(Boolean).join(", ");
      const description = text(p.description);
      return `- **${title}**${stack ? ` (${stack})` : ""}${description ? `: ${description}` : ""}`;
    });
  return section("Projects", items);
}

function achievementsSection(data: ProfileData): string[] {
  const items = (data.achievements ?? [])
    .filter((a) => a.title)
    .map((a) => {
      const refs = (a.reference ?? []).filter((r) => r.url);
      const refLinks = refs
        .map((r, i) => link(refs.length > 1 ? `ref ${i + 1}` : "reference", r.url))
        .join(", ");
      return `- ${text(a.title)}${refLinks ? ` (${refLinks})` : ""}`;
    });
  return section("Achievements & Recognition", items);
}

function socialSection(data: ProfileData): string[] {
  const items = (data.contact?.social ?? [])
    .filter((s) => s.name && s.url)
    .map((s) => `- **${text(s.name)}**: ${url(s.url)}`);
  return section("Social Profiles", items);
}

function footerSection(data: ProfileData): string[] {
  const base = url(data.personalWebsiteUrl) || "https://asharib.xyz";
  return [
    "---",
    "",
    "*This profile is generated from the live data source on every request.*",
    "",
    `- **Markdown version**: ${base}/api/profile.md`,
    `- **JSON version**: ${base}/api/profile`,
    `- **Website**: ${base}`,
  ];
}

export function generateProfileMarkdown(data: ProfileData, now = new Date()): string {
  const lines = [
    ...headerSection(data),
    ...highlightsSection(data, now),
    ...workSection(data),
    ...educationSection(data),
    ...skillsSection(data),
    ...projectsSection(data),
    ...achievementsSection(data),
    ...socialSection(data),
    ...footerSection(data),
  ];

  // Collapse any accidental multiple blank lines into one.
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}
