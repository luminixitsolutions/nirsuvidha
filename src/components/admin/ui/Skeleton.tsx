import { cx } from '@/lib/cn'

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        'animate-pulse rounded-lg bg-slate-200/50',
        className,
      )}
      aria-hidden
    />
  )
}

export function StatGridSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="space-y-3 rounded-2xl border border-slate-200/60 p-5"
        >
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-10 rounded-xl" />
          </div>
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-3 w-32" />
        </div>
      ))}
    </div>
  )
}
