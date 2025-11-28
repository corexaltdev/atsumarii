import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import Event from '@/components/event';
import EventSkeletonAdvanced from '@/components/event-skeleton-advanced';
import { mockEvents, type EventData } from '@/data/mockData';

interface DiscoverEventListProps {
  selectedTag?: string | null;
  currentPage?: number;
}

export default function DiscoverEventList({
  selectedTag,
  currentPage = 1,
}: DiscoverEventListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventData[]>([]);

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

      // Simulate pagination (12 items per page - 3 rows of 4)
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
      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {Array.from({ length: 12 }).map((_, index) => (
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
    <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {events.map((event) => (
        <Link key={event.id} to={`/events/${event.id}`} className="block">
          <Event {...event} />
        </Link>
      ))}
    </div>
  );
}
