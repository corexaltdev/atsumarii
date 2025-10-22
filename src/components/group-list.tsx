import { Link } from 'react-router';
import Group from '@/components/group';
import { useState, useEffect } from 'react';
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
];

export default function GroupList() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const loadGroups = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setGroups(mockGroups);
      setIsLoading(false);
    };
    loadGroups();
  }, []);

  return (
    <section className="py-7 my-7 bg-secondary rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Groups you might like
          </h2>
          <Link
            to="/discover?tab=groups"
            className="text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            See all groups
          </Link>
        </div>

        <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-6 p-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <GroupSkeletonAdvanced key={`group-skeleton-${index}`} />
              ))
            : groups.map((group) => (
                <Link
                  key={group.id}
                  to={`/groups/${group.id}`}
                  className="block"
                >
                  <Group {...group} />
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
