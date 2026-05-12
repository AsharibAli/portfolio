import { getResumeData } from "@/lib/data";
import { DetailedView } from "@/components/detailed-view";
import { ViewRouteShell } from "@/components/view-route-shell";

/**
 * Main Page Component - Server Component
 * Renders the detailed (full) view. Quick and API views live at /quick and /api.
 */
export default async function Page() {
  const data = await getResumeData();

  return (
    <ViewRouteShell wrapChatbot={false}>
      <DetailedView data={data} />
    </ViewRouteShell>
  );
}
