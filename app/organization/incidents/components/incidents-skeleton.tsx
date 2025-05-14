import { Skeleton } from "@/components/ui/skeleton";

export function IncidentsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-40" />
      </div>

      <div className="space-y-4">
        <div className="flex space-x-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-3 border-b">
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>

          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="px-6 py-4 border-b">
              <div className="grid grid-cols-5 gap-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
                <div className="flex justify-end space-x-2">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
