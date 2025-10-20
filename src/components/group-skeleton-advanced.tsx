import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GroupSkeletonAdvanced = () => {
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shimmerRef.current) {
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
    <div className="bg-white rounded-3xl border-0 overflow-hidden">
      {/* Image skeleton with shimmer */}
      <div className="relative h-48 p-2">
        <div className="relative w-full h-full rounded-3xl bg-gray-200 overflow-hidden">
          <div
            ref={shimmerRef}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ transform: 'translateX(-100%)' }}
          />
        </div>
        <div className="absolute top-5 left-5">
          <div className="bg-gray-300 rounded-full w-20 h-6 relative overflow-hidden" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-4 px-0">
        <div className="bg-gray-200 rounded h-5 w-3/4 mb-2 relative overflow-hidden" />
        <div className="bg-gray-200 rounded h-4 w-full mb-3 relative overflow-hidden" />

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="bg-gray-200 rounded w-4 h-4 mr-2" />
          <div className="bg-gray-200 rounded h-4 w-32" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded w-4 h-4 mr-2" />
            <div className="bg-gray-200 rounded h-4 w-24" />
          </div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded w-4 h-4 mr-2" />
            <div className="bg-gray-200 rounded h-4 w-20" />
          </div>
        </div>

        <div className="w-full bg-gray-200 h-9 rounded-lg" />
      </div>
    </div>
  );
};

export default GroupSkeletonAdvanced;
