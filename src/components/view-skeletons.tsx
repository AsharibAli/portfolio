import { cn } from "@/lib/utils";

function Bar({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-3 rounded-full bg-muted/70 animate-pulse", className)}
    />
  );
}

function Block({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-2xl bg-muted/50 animate-pulse", className)}
    />
  );
}

export function DetailedViewSkeleton() {
  return (
    <main className="container relative mx-auto min-h-[100dvh] scroll-my-12 bg-background px-2 pb-[calc(8.5rem+env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-4 sm:pb-24 md:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-3xl space-y-6 pt-2 sm:space-y-8 sm:pt-4">
        <div className="card surface-panel flex flex-col-reverse gap-6 p-5 sm:p-7 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-3">
            <Bar className="h-6 w-1/2" />
            <Bar className="h-4 w-3/4" />
            <Bar className="h-4 w-2/3" />
            <div className="flex gap-2 pt-2">
              <Block className="h-9 w-24" />
              <Block className="h-9 w-24" />
              <Block className="h-9 w-9" />
            </div>
          </div>
          <Block className="h-24 w-24 shrink-0 rounded-full md:h-28 md:w-28" />
        </div>

        <div className="card surface-panel space-y-3 p-5 sm:p-6">
          <Bar className="h-4 w-24" />
          <Bar className="w-full" />
          <Bar className="w-11/12" />
          <Bar className="w-10/12" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="card surface-panel space-y-3 p-5 sm:p-6">
              <Bar className="h-4 w-1/3" />
              <Bar className="w-full" />
              <Bar className="w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export function SimpleViewSkeleton() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6 sm:pb-16 sm:pt-8">
      <div className="card surface-panel w-full max-w-lg space-y-5 p-5 text-center sm:space-y-6 sm:p-10">
        <Bar className="mx-auto h-8 w-2/3 sm:h-10" />
        <div className="space-y-2">
          <Bar className="mx-auto w-11/12" />
          <Bar className="mx-auto w-9/12" />
        </div>
        <Bar className="mx-auto h-4 w-1/3" />
        <div className="flex justify-center gap-2 pt-2">
          <Block className="h-10 w-10 rounded-full" />
          <Block className="h-10 w-10 rounded-full" />
          <Block className="h-10 w-10 rounded-full" />
          <Block className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ApiViewSkeleton() {
  return (
    <main className="container relative mx-auto min-h-[100dvh] scroll-my-12 bg-background px-2 pb-[calc(8.5rem+env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-4 sm:pb-24 md:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-6xl space-y-3 pt-2 sm:space-y-4 sm:pt-4">
        <div className="card surface-panel space-y-4 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <Bar className="h-5 w-44" />
            <div className="flex gap-2">
              <Block className="h-9 w-9 rounded-full" />
              <Block className="h-9 w-9 rounded-full" />
              <Block className="h-9 w-9 rounded-full" />
            </div>
          </div>
          <div className="space-y-2 rounded-xl bg-muted/40 p-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <Bar
                key={i}
                className={cn(
                  "h-3",
                  i % 5 === 0 && "w-2/3",
                  i % 5 === 1 && "w-5/6",
                  i % 5 === 2 && "w-3/4",
                  i % 5 === 3 && "w-1/2",
                  i % 5 === 4 && "w-11/12",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
