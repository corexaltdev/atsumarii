import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import Event from '@/components/event';
import EventSkeletonAdvanced from '@/components/event-skeleton-advanced';
import { mockEvents, type EventData } from '@/data/mockData';

export default function EventList() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    // Simulate API call
    const loadEvents = async () => {
      setIsLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Limit to 8 events (2 rows on homepage)
      setEvents(mockEvents.slice(0, 8));
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
            to="/discover?tab=events"
            className="text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            See all events
          </Link>
        </div>

        <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          {isLoading
            ? // Show skeleton loading state (8 items for 2 rows)
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
