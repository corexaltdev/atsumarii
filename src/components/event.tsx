import { useRef } from 'react';
import { gsap } from 'gsap';

type EventProps = {
  title: string;
  imgUrl: string;
  tag: string;
  startDate: string;
  hostName: string;
  attendees: number;
};

const Event = ({
  title,
  imgUrl,
  tag,
  startDate,
  hostName,
  attendees,
}: EventProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.1,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.1,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="overflow-hidden border-0 hover:ring-1 hover:ring-primary rounded-3xl focus:ring-2 focus: ring-offset-2 focus:outline-none transition-all duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-48 p-2">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full rounded-3xl object-cover hover:opacity-80"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            {tag}
          </span>
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="font-medium text-red-500">{startDate}</span>
          <span className="mx-2">•</span>
          {/* <span>{startDate}</span> */}
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 hover:text-red-500 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-2">{hostName}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            <span>{attendees} attendees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
