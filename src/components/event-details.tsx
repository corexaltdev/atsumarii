import { Link, useParams } from 'react-router';
import ContentLayout from './layout/content-layout';
import { getEventById } from '@/data/mockData';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Separator } from './ui/separator';
import { Calendar, MapPin, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

export const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventId ? getEventById(eventId) : null;

  const formatEventDate = (dateStr: string) => {
    const currentYear = new Date().getFullYear();
    const date = new Date(`${dateStr}, ${currentYear}`);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  };

  if (!event) {
    return (
      <ContentLayout>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Event Not Found</h1>
          <p className="text-gray-600">
            The event you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout>
      {/* <div className="lg:hidden">

      </div> */}
      <div className="space-y-8">
        <div id="event-title" className="flex flex-col gap-8">
          <div className="flex flex-col gap-12">
            <h1 className="text-3xl font-bold">{event.title}</h1>
          </div>
          <div className="flex flex-row justify-between align-bottom gap-4">
            <div className="flex flex-1">
              <Link to="/discover" className="hover:no-underline group">
                <div className="flex flex-row items-center gap-3">
                  <div className="relative flex items-center justify-center rounded-full bg-primary w-[40px] h-[40px]">
                    <Avatar>
                      <AvatarFallback className="text-white bg-primary w-full h-full text-lg font-semibold">
                        {event.hostName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-medium text-[#BAB1B1] group-hover:text-meetup-red transition-colors">
                      Hosted by{' '}
                      <span className="font-semibold text-black">
                        {event.hostName}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link
                to="/events"
                className="bg-primary hover:bg-primary text-white px-9 py-2 rounded-full font-semibold text-xl transition-colors shadow-lg hover:shadow-xl"
              >
                JOIN
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-8 h-[2px] bg-[#D3CCC3]" />
        <div className="flex w-full flex-col lg:flex-row-reverse lg:justify-between lg:items-stretch gap-8">
          <aside className="flex w-full flex-1 flex-col lg:w-auto lg:min-w-0 lg:max-w-[520px] gap-8">
            <div className="flex flex-col gap-4 lg:sticky top-24">
              <div className="flex flex-col items-start justify-center rounded-3xl border border-[#E5DED4] bg-white p-6 gap-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                <div className="flex w-full items-start border-b border-[#E5DED4] pb-4 gap-4">
                  <Calendar className="w-5 h-5 text-pink-500 shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-black">
                        {formatEventDate(event.startDate)}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                      <span className="text-black">{event.time}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {event.time} to 9:30 PM
                    </div>
                    <div className="text-sm text-gray-600 mt-1">JST</div>
                  </div>
                </div>

                <div className="flex w-full items-start gap-4">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold text-black">
                      {event.location}
                    </div>
                    <div className="text-sm text-black mt-1">
                      東京都渋谷区渋谷1-14-14, B1F・東京
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-black">How to find us</span>
                      <HelpCircle className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start">
                <Link
                  to="/discover"
                  className="block w-full hover:no-underline"
                >
                  <div className="group relative cursor-pointer rounded-3xl border border-[#E5DED4] bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-[88px] h-[88px] rounded-2xl border-[3px] border-black bg-white p-1">
                        <img
                          src="/smiley.png"
                          alt="Group"
                          className="w-full h-full object-cover rounded-[14px]"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-800 leading-none">
                          Meet the group
                        </p>
                        <p className="mt-3 text-[26px] font-extrabold tracking-[0.35em] text-black uppercase truncate">
                          {event.hostName}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-auto w-full">
              <Button
                type="submit"
                className="w-full cursor-pointer rounded-full"
                size="lg"
              >
                JOIN
              </Button>
            </div>
          </aside>
          <div className="flex w-full flex-1 flex-col gap-8 lg:min-w-[560px] lg:max-w-[620px]">
            <div className="space-y-8">
              <div className="w-full overflow-hidden rounded-3xl border border-[#E5DED4] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                <img
                  src={event.imgUrl}
                  alt={event.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Details
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Host:</strong> {event.hostName}
                  </p>
                  <p>
                    <strong>Date:</strong> {event.startDate}
                  </p>
                  <p>
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p>
                    <strong>Attendees:</strong> {event.attendees}{' '}
                    {event.maxAttendees ? `of ${event.maxAttendees}` : ''}
                  </p>
                  <p>
                    <strong>Category:</strong> {event.tag}
                  </p>
                  {event.price !== undefined && (
                    <p>
                      <strong>Price:</strong>{' '}
                      {event.price === 0 ? 'Free' : `$${event.price}`}
                    </p>
                  )}
                  {event.isOnline && (
                    <p>
                      <strong>Type:</strong> Online Event
                    </p>
                  )}
                </div>
              </div>
              {event.description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What to Expect
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us for an amazing experience filled with networking
                  opportunities, engaging activities, and meaningful
                  connections. This event is designed to bring together
                  like-minded individuals who share common interests and
                  passions.
                </p>
                <p className="text-gray-600 mb-4">
                  Throughout the event, you'll have the chance to participate in
                  interactive sessions, listen to inspiring speakers, and engage
                  in collaborative activities. Whether you're looking to expand
                  your professional network, learn something new, or simply meet
                  interesting people, this event offers something for everyone.
                </p>
                <p className="text-gray-600">
                  We've carefully curated the schedule to ensure maximum
                  engagement and value for all attendees. From ice-breaking
                  activities to deep-dive discussions, every moment is designed
                  to foster connection and learning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What You'll Learn
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    Effective networking strategies and building meaningful
                    professional relationships
                  </li>
                  <li>
                    Industry insights and trends that are shaping the future of
                    our community
                  </li>
                  <li>
                    Practical skills and techniques you can apply in your daily
                    work
                  </li>
                  <li>
                    How to leverage your unique strengths in collaborative
                    settings
                  </li>
                  <li>
                    Best practices for maintaining work-life balance in a
                    fast-paced environment
                  </li>
                  <li>
                    Innovative approaches to problem-solving and creative
                    thinking
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About the Organizer
                </h3>
                <p className="text-gray-600 mb-4">
                  This event is hosted by a passionate team dedicated to
                  creating meaningful experiences and fostering community
                  connections. With years of experience in organizing successful
                  events, our team understands what it takes to create an
                  engaging and memorable experience for attendees.
                </p>
                <p className="text-gray-600">
                  We believe in the power of bringing people together, sharing
                  knowledge, and building lasting relationships. Our events are
                  designed to be inclusive, welcoming, and focused on providing
                  value to every participant. Whether you're a first-time
                  attendee or a regular participant, you'll find a warm and
                  supportive community here.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Additional Information
                </h3>
                <p className="text-gray-600 mb-4">
                  Please arrive on time to ensure you don't miss any important
                  introductions or activities. We recommend wearing comfortable
                  attire and bringing any materials you might need for
                  note-taking or participation in interactive sessions.
                </p>
                <p className="text-gray-600 mb-4">
                  Refreshments will be provided throughout the event, including
                  coffee, tea, light snacks, and water. If you have any dietary
                  restrictions or special needs, please let us know in advance
                  so we can make appropriate accommodations.
                </p>
                <p className="text-gray-600">
                  For any questions or concerns, feel free to reach out to our
                  event coordinators. We're here to ensure you have the best
                  possible experience and are happy to address any inquiries you
                  might have before, during, or after the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
