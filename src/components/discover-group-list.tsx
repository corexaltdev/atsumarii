import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import Group from '@/components/group';
import GroupSkeletonAdvanced from '@/components/group-skeleton-advanced';

interface Group {
  id: string;
  name: string;
  description: string;
  members: number;
  location: string;
  image: string;
  category: string;
  events: number;
}

const mockGroups: Group[] = [
  {
    id: '1',
    name: 'NYC Tech Professionals',
    description:
      'A community of tech professionals in New York City who love networking, learning, and building connections.',
    members: 2847,
    location: 'New York, NY',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    category: 'Technology',
    events: 23,
  },
  {
    id: '2',
    name: 'Brooklyn Foodies',
    description:
      'Discover the best restaurants, food trucks, and hidden culinary gems across Brooklyn with fellow food lovers.',
    members: 1256,
    location: 'Brooklyn, NY',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=200&fit=crop',
    category: 'Food & Drink',
    events: 18,
  },
  {
    id: '3',
    name: 'Manhattan Book Club',
    description:
      'Join us for monthly book discussions, author talks, and literary events in the heart of Manhattan.',
    members: 892,
    location: 'Manhattan, NY',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop',
    category: 'Education',
    events: 12,
  },
  {
    id: '4',
    name: 'Queens Photography Walkers',
    description:
      'Explore Queens through photography. We organize regular photo walks, workshops, and gallery visits.',
    members: 634,
    location: 'Queens, NY',
    image:
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=200&fit=crop',
    category: 'Photography',
    events: 15,
  },
  // Add more groups for pagination
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `${i + 5}`,
    name: `Group ${i + 5}`,
    description:
      'A community of like-minded people who share common interests and activities.',
    members: Math.floor(Math.random() * 5000) + 100,
    location: 'New York, NY',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    category: ['Technology', 'Food & Drink', 'Education', 'Photography'][i % 4],
    events: Math.floor(Math.random() * 30) + 5,
  })),
];

interface DiscoverGroupListProps {
  selectedTag?: string | null;
  currentPage?: number;
}

export default function DiscoverGroupList({
  selectedTag,
  currentPage = 1,
}: DiscoverGroupListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const loadGroups = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filteredGroups = mockGroups;

      // Filter by tag if selected
      if (selectedTag) {
        filteredGroups = mockGroups.filter(
          (group) => group.category === selectedTag,
        );
      }

      // Simulate pagination (8 items per page)
      const itemsPerPage = 8;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      filteredGroups = filteredGroups.slice(startIndex, endIndex);

      setGroups(filteredGroups);
      setIsLoading(false);
    };
    loadGroups();
  }, [selectedTag, currentPage]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 p-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <GroupSkeletonAdvanced key={`group-skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (groups.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center">
        <p className="text-gray-500 text-lg">
          No groups found for the selected criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 p-8">
      {groups.map((group) => (
        <Link key={group.id} to={`/groups/${group.id}`} className="block">
          <Group {...group} />
        </Link>
      ))}
    </div>
  );
}
