import type { Metadata } from "next";

import { getResumeData } from "@/lib/data";
import { JsonDisplay } from "@/components/json-display";
import { ViewRouteShell } from "@/components/view-route-shell";

export const metadata: Metadata = {
  title: "API View",
  description:
    "Asharib Ali's portfolio data as structured JSON — the same profile that powers the site, browsable as a developer-friendly API view.",
  alternates: {
    canonical: "/api",
  },
};

export default async function ApiPage() {
  const data = await getResumeData();

  return (
    <ViewRouteShell>
      <main className="container relative mx-auto min-h-[100dvh] scroll-my-12 bg-background px-2 pb-[calc(8.5rem+env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-4 sm:pb-24 md:p-6 lg:p-8 print:p-12">
        <div className="mx-auto w-full max-w-6xl space-y-3 pt-2 text-foreground sm:space-y-4 sm:pt-4">
          <JsonDisplay data={data} title="Portfolio API Data" />
        </div>
      </main>
    </ViewRouteShell>
  );
}
