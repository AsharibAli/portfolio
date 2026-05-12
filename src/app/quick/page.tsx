import { getResumeData } from "@/lib/data";
import { SimpleView } from "@/components/simplified-view";
import { ViewRouteShell } from "@/components/view-route-shell";

export default async function QuickPage() {
  const data = await getResumeData();

  return (
    <ViewRouteShell>
      <SimpleView data={data} />
    </ViewRouteShell>
  );
}
