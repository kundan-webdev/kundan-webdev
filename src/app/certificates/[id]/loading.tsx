import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      <div className="mx-auto max-w-[1136px] px-4 pb-4 pt-24 sm:px-6 lg:px-0">
        <Skeleton className="h-5 w-36 rounded-full" />
      </div>

      <div className="mx-auto mb-10 max-w-[1136px] px-4 sm:px-6 lg:px-0">
        <Skeleton className="h-[320px] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)]" />
      </div>

      <div className="mx-auto grid max-w-[1136px] grid-cols-1 gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-0">
        <div className="space-y-5">
          <Skeleton className="h-4 w-24 rounded-full" />
          <Skeleton className="h-10 w-3/4 rounded-full" />
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-11/12 rounded-full" />
          <Skeleton className="h-4 w-10/12 rounded-full" />
          <Skeleton className="h-4 w-2/3 rounded-full" />
        </div>

        <aside className="space-y-4">
          <Skeleton className="h-4 w-24 rounded-full" />
          <Skeleton className="h-24 rounded-[var(--radius-lg)] bg-[var(--bg-surface)]" />
          <Skeleton className="h-4 w-28 rounded-full" />
          <Skeleton className="h-10 rounded-[var(--radius-lg)] bg-[var(--bg-surface)]" />
          <Skeleton className="h-10 rounded-[var(--radius-lg)] bg-[var(--bg-surface)]" />
        </aside>
      </div>
    </main>
  );
}
