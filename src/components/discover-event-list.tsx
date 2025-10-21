import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import Event from '@/components/event';
import EventSkeletonAdvanced from '@/components/event-skeleton-advanced';

interface Event {
  id: string;
  title: string;
  hostName: string;
  startDate: string;
  time: string;
  location: string;
  attendees: number;
  imgUrl: string;
  tag: string;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Coffee & Networking in Downtown',
    hostName: 'Tech Professionals NYC',
    startDate: 'Dec 15',
    time: '9:00 AM',
    location: 'Blue Bottle Coffee, Manhattan',
    attendees: 23,
    imgUrl:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=200&fit=crop',
    tag: 'Networking',
  },
  {
    id: '2',
    title: 'Morning Yoga in Central Park',
    hostName: 'NYC Wellness Warriors',
    startDate: 'Dec 16',
    time: '8:00 AM',
    location: 'Central Park, Sheep Meadow',
    attendees: 45,
    imgUrl:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop',
    tag: 'Health & Wellness',
  },
  {
    id: '3',
    title: 'JavaScript Study Group',
    hostName: 'NYC Developers',
    startDate: 'Dec 17',
    time: '7:00 PM',
    location: 'WeWork, Brooklyn',
    attendees: 18,
    imgUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    tag: 'Technology',
  },
  {
    id: '4',
    title: 'Photography Walk in SoHo',
    hostName: 'NYC Photography Club',
    startDate: 'Dec 18',
    time: '2:00 PM',
    location: 'SoHo, Manhattan',
    attendees: 32,
    imgUrl:
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=200&fit=crop',
    tag: 'Photography',
  },
  // Add more events for pagination
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `${i + 5}`,
    title: `Event ${i + 5}`,
    hostName: 'Host Name',
    startDate: `Dec ${19 + i}`,
    time: '2:00 PM',
    location: 'New York, NY',
    attendees: Math.floor(Math.random() * 100) + 10,
    imgUrl:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=200&fit=crop',
    tag: ['Networking', 'Technology', 'Health & Wellness', 'Photography'][
      i % 4
    ],
  })),
];

interface DiscoverEventListProps {
  selectedTag?: string | null;
  currentPage?: number;
}

export default function DiscoverEventList({
  selectedTag,
  currentPage = 1,
}: DiscoverEventListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filteredEvents = mockEvents;

      // Filter by tag if selected
      if (selectedTag) {
        filteredEvents = mockEvents.filter(
          (event) => event.tag === selectedTag,
        );
      }

      // Simulate pagination (12 items per page)
      const itemsPerPage = 12;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      filteredEvents = filteredEvents.slice(startIndex, endIndex);

      setEvents(filteredEvents);
      setIsLoading(false);
    };

    loadEvents();
  }, [selectedTag, currentPage]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <EventSkeletonAdvanced key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center">
        <p className="text-gray-500 text-lg">
          No events found for the selected criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
      {events.map((event) => (
        <Link key={event.id} to={`/events/${event.id}`} className="block">
          <Event {...event} />
        </Link>
      ))}
    </div>
  );
}
