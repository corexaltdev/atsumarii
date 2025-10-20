const EventSkeleton = () => {
  return (
    <div className="overflow-hidden border-0">
      {/* Image skeleton */}
      <div className="relative h-48 p-2">
        <div className="w-full h-full rounded-3xl bg-gray-200 animate-pulse"></div>

        {/* Tag skeleton */}
        <div className="absolute top-5 left-5">
          <div className="bg-gray-300 rounded-full w-16 h-6 animate-pulse"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-4 px-0">
        {/* Date skeleton */}
        <div className="flex items-center mb-2">
          <div className="bg-gray-200 rounded w-12 h-4 animate-pulse"></div>
          <div className="mx-2 w-1 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Title skeleton */}
        <div className="mb-2">
          <div className="bg-gray-200 rounded h-5 w-3/4 animate-pulse"></div>
        </div>

        {/* Host name skeleton */}
        <div className="mb-2">
          <div className="bg-gray-200 rounded h-4 w-1/2 animate-pulse"></div>
        </div>

        {/* Attendees skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded w-4 h-4 mr-1 animate-pulse"></div>
            <div className="bg-gray-200 rounded h-4 w-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSkeleton;
