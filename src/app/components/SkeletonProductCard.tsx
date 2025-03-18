export function SkeletonProductCard() {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-sm animate-pulse">
      <div className="w-24 h-24 bg-slate-200 rounded-md mr-4" />
      <div className="flex-1 flex flex-col">
        <div className="h-4 bg-slate-200 rounded w-1/2" />
        <div className="mt-2 h-3 bg-slate-200 rounded w-3/4" />
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="h-4 bg-slate-200 rounded w-16" />
          <div className="h-9 w-9 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}
