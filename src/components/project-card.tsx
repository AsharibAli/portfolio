import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden p-4">
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
              >
                {title}
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-sm leading-relaxed print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              className="px-2 py-1 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
