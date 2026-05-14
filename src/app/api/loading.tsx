import { ViewRouteShell } from "@/components/view-route-shell";
import { ApiViewSkeleton } from "@/components/view-skeletons";

export default function Loading() {
  return (
    <ViewRouteShell>
      <ApiViewSkeleton />
    </ViewRouteShell>
  );
}
