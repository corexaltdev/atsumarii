import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import Group from '@/components/group';
import GroupSkeletonAdvanced from '@/components/group-skeleton-advanced';
import { mockGroups, type Group as GroupType } from '@/data/mockData';

interface DiscoverGroupListProps {
  selectedTag?: string | null;
  currentPage?: number;
}

export default function DiscoverGroupList({
  selectedTag,
  currentPage = 1,
}: DiscoverGroupListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<GroupType[]>([]);

  useEffect(() => {
    const loadGroups = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filteredGroups = mockGroups;

      // Filter by tag if selected
      if (selectedTag) {
        filteredGroups = mockGroups.filter(
          (group) => group.tag === selectedTag,
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
