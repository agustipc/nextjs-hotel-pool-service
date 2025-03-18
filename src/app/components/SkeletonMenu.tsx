import { SkeletonProductCard } from './SkeletonProductCard'

export function SkeletonMenu() {
  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {[...Array(5)].map((_, index) => (
          <section key={index} className="space-y-4">
            <div className="h-6 w-1/3 bg-slate-200 rounded animate-pulse" />

            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <SkeletonProductCard key={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
