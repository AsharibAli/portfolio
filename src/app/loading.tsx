import { ViewRouteShell } from "@/components/view-route-shell";
import { DetailedViewSkeleton } from "@/components/view-skeletons";

export default function Loading() {
  return (
    <ViewRouteShell wrapChatbot={false}>
      <DetailedViewSkeleton />
    </ViewRouteShell>
  );
}
