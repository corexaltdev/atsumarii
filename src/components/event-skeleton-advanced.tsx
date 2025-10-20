import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const EventSkeletonAdvanced = () => {
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shimmerRef.current) {
      // Create infinite shimmer animation
      gsap.to(shimmerRef.current, {
        x: '100%',
        duration: 1.5,
        ease: 'none',
        repeat: -1,
        yoyo: false,
      });
    }
  }, []);

  return (
    <div className="overflow-hidden border-0">
      {/* Image skeleton with shimmer */}
      <div className="relative h-48 p-2">
        <div className="relative w-full h-full rounded-3xl bg-gray-200 overflow-hidden">
          {/* Shimmer effect */}
          <div
            ref={shimmerRef}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ transform: 'translateX(-100%)' }}
          ></div>
        </div>

        {/* Tag skeleton */}
        <div className="absolute top-5 left-5">
          <div className="bg-gray-300 rounded-full w-16 h-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-2">
        {/* Date skeleton */}
        <div className="flex items-center mb-2">
          <div className="bg-gray-200 rounded w-12 h-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
          <div className="mx-2 w-1 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Title skeleton */}
        <div className="mb-2">
          <div className="bg-gray-200 rounded h-5 w-3/4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Host name skeleton */}
        <div className="mb-2">
          <div className="bg-gray-200 rounded h-4 w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Attendees skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded w-4 h-4 mr-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
            <div className="bg-gray-200 rounded h-4 w-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSkeletonAdvanced;
