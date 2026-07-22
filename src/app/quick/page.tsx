import type { Metadata } from "next";

import { getResumeData } from "@/lib/data";
import { SimpleView } from "@/components/simplified-view";
import { ViewRouteShell } from "@/components/view-route-shell";

export const metadata: Metadata = {
  title: "Quick View",
  description:
    "A quick, scannable overview of Asharib Ali — AI & cloud-native developer, tech educator, Founder & CTO at EduHub and Co-Founder & CTO at Safock.",
  alternates: {
    canonical: "/quick",
  },
};

export default async function QuickPage() {
  const data = await getResumeData();

  return (
    <ViewRouteShell>
      <SimpleView data={data} />
    </ViewRouteShell>
  );
}
