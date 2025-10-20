import ContentLayout from '@/components/layout/content-layout';
import Hero from '@/components/hero';
import EventList from '@/components/event-list';
import GroupList from '@/components/group-list';
import CtaDuo from '@/components/cta-duo';

export default function HomePage() {
  return (
    <ContentLayout>
      <Hero />
      <EventList />
      <GroupList />
      <CtaDuo />
    </ContentLayout>
  );
}
