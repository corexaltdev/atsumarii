import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Calendar, Users } from 'lucide-react';
import ContentLayout from '@/components/layout/content-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TagTabs from '@/components/tag-tabs';
import { Pagination } from '@/components/ui/pagination';
import DiscoverEventList from '@/components/discover-event-list';
import DiscoverGroupList from '@/components/discover-group-list';
import { EVENT_TAGS, GROUP_TAGS } from '@/data/mockData';

export default function DiscoverPage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'events' | 'groups'>('events');
  const [selectedEventTag, setSelectedEventTag] = useState<string | null>(null);
  const [selectedGroupTag, setSelectedGroupTag] = useState<string | null>(null);
  const [eventPage, setEventPage] = useState(1);
  const [groupPage, setGroupPage] = useState(1);

  // Handle URL parameters to set initial tab
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'events' || tabParam === 'groups') {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleEventPageChange = (page: number) => {
    setEventPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGroupPageChange = (page: number) => {
    setGroupPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEventTagSelect = (tag: string | null) => {
    setSelectedEventTag(tag);
    setEventPage(1);
  };

  const handleGroupTagSelect = (tag: string | null) => {
    setSelectedGroupTag(tag);
    setGroupPage(1);
  };

  return (
    <ContentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'events' | 'groups')}
          className="w-full"
        >
          <div className="flex flex-col gap-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger className="cursor-pointer" value="events">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="groups">
                <Users className="w-4 h-4 mr-2" />
                Groups
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <TabsContent value="events" className="mt-0">
              <div className="space-y-6">
                {/* Tab Title */}
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Discover Events
                  </h1>

                  {/* Tags */}
                  <TagTabs
                    tags={EVENT_TAGS.slice(1)}
                    selectedTag={selectedEventTag}
                    onTagSelect={handleEventTagSelect}
                  />
                </div>

                {/* Events List */}
                <div className="space-y-4">
                  <DiscoverEventList
                    selectedTag={selectedEventTag}
                    currentPage={eventPage}
                  />
                </div>

                {/* Pagination */}
                <div className="flex justify-center pt-8">
                  <Pagination
                    currentPage={eventPage}
                    totalPages={10}
                    onPageChange={handleEventPageChange}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="groups" className="mt-0">
              <div className="space-y-6">
                {/* Tab Title */}
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Discover Groups
                  </h1>

                  {/* Tags */}
                  <TagTabs
                    tags={GROUP_TAGS.slice(1)}
                    selectedTag={selectedGroupTag}
                    onTagSelect={handleGroupTagSelect}
                  />
                </div>

                {/* Groups List */}
                <div className="space-y-4">
                  <DiscoverGroupList
                    selectedTag={selectedGroupTag}
                    currentPage={groupPage}
                  />
                </div>

                {/* Pagination */}
                <div className="flex justify-center pt-8">
                  <Pagination
                    currentPage={groupPage}
                    totalPages={8}
                    onPageChange={handleGroupPageChange}
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </ContentLayout>
  );
}
