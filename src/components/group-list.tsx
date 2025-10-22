import { Link } from 'react-router';
import Group from '@/components/group';
import { useState, useEffect } from 'react';
import GroupSkeletonAdvanced from '@/components/group-skeleton-advanced';
import { mockGroups, type Group as GroupType } from '@/data/mockData';

export default function GroupList() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<GroupType[]>([]);

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
