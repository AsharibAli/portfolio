import { ViewRouteShell } from "@/components/view-route-shell";
import { SimpleViewSkeleton } from "@/components/view-skeletons";

export default function Loading() {
  return (
    <ViewRouteShell>
      <SimpleViewSkeleton />
    </ViewRouteShell>
  );
}
