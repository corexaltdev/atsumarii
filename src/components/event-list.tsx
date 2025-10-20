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
    title: 'JavaScript Study hostName',
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
  {
    id: '5',
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
    id: '6',
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
    id: '7',
    title: 'JavaScript Study hostName',
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
    id: '8',
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
];

export default function EventList() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Simulate API call
    const loadEvents = async () => {
      setIsLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setEvents(mockEvents);
      setIsLoading(false);
    };

    loadEvents();
  }, []);

  return (
    <section className="py-7 my-7 bg-secondary rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Events</h2>
          <Link
            to="/events"
            className="text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            See all events
          </Link>
        </div>

        <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
          {isLoading
            ? // Show skeleton loading state
              Array.from({ length: 8 }).map((_, index) => (
                <EventSkeletonAdvanced key={`skeleton-${index}`} />
              ))
            : // Show actual events
              events.map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="block"
                >
                  <Event {...event} />
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
