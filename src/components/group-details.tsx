import { useSearchParams } from 'react-router';
import ContentLayout from './layout/content-layout';
import { getGroupById } from '@/data/mockData';

export const GroupDetails = () => {
  const [searchParams] = useSearchParams();
  const groupId = searchParams.get('groupId');
  const group = groupId ? getGroupById(groupId) : null;

  if (!group) {
    return (
      <ContentLayout>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Group Not Found</h1>
          <p className="text-gray-600">
            The group you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{group.name}</h1>
        <div className="bg-white rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={group.imgUrl}
                alt={group.name}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Group Details
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Category:</strong> {group.tag}
                  </p>
                  <p>
                    <strong>Location:</strong> {group.location}
                  </p>
                  <p>
                    <strong>Members:</strong> {group.members.toLocaleString()}
                  </p>
                  <p>
                    <strong>Events:</strong> {group.events}
                  </p>
                  {group.organizer && (
                    <p>
                      <strong>Organizer:</strong> {group.organizer}
                    </p>
                  )}
                  {group.createdAt && (
                    <p>
                      <strong>Created:</strong>{' '}
                      {new Date(group.createdAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About This Group
                </h3>
                <p className="text-gray-600">{group.description}</p>
              </div>
              <div className="flex gap-4 pt-4">
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Join Group
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
