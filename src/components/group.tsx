import { useRef } from 'react';
import { gsap } from 'gsap';

type GroupProps = {
  name: string;
  description: string;
  members: number;
  location: string;
  imgUrl: string;
  tag: string;
  events: number;
};

const Group = ({
  name,
  description,
  members,
  location,
  imgUrl,
  tag,
  events,
}: GroupProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3,
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
      {/* Group Image */}
      <div className="relative h-48 p-2">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full rounded-3xl object-cover hover:opacity-80"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            {tag}
          </span>
        </div>
      </div>

      {/* Group Content */}
      <div className="p-2">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-red-500 transition-colors">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            <span>{members.toLocaleString()} members</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{events} events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
