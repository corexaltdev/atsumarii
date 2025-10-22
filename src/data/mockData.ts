// Centralized mock data for the application
// This file contains all mock data structures and data for development/testing

export interface EventData {
  id: string;
  title: string;
  hostName: string;
  startDate: string;
  time: string;
  location: string;
  attendees: number;
  imgUrl: string;
  tag: string;
  description?: string; // Optional field for event details
  maxAttendees?: number; // Optional field for capacity
  price?: number; // Optional field for paid events
  isOnline?: boolean; // Optional field for virtual events
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: number;
  imgUrl: string; // Changed back to imgUrl for consistency
  tag: string; // Changed back to tag for consistency
  location: string;
  events: number;
  organizer?: string; // Optional for backward compatibility
  createdAt?: string; // Optional for backward compatibility
}

// Mock Events Data
export const mockEvents: EventData[] = [
  {
    id: '1',
    title: 'Coffee & Networking in Downtown',
    hostName: 'Tech Professionals NYC',
    startDate: 'Dec 15',
    time: '9:00 AM',
    location: 'Blue Bottle Coffee, Manhattan',
    attendees: 23,
    imgUrl:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=200&fit=crop',
    tag: 'Networking',
    description:
      'Join us for a morning coffee and networking session with fellow tech professionals. Great opportunity to meet new people and discuss industry trends.',
    maxAttendees: 50,
    price: 0,
    isOnline: false,
  },
  {
    id: '2',
    title: 'Morning Yoga in Central Park',
    hostName: 'NYC Wellness Warriors',
    startDate: 'Dec 16',
    time: '8:00 AM',
    location: 'Central Park, Sheep Meadow',
    attendees: 45,
    imgUrl:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop',
    tag: 'Health & Wellness',
    description:
      'Start your day with a peaceful yoga session in the heart of Central Park. All levels welcome, mats provided.',
    maxAttendees: 60,
    price: 15,
    isOnline: false,
  },
  {
    id: '3',
    title: 'JavaScript Study Group',
    hostName: 'NYC Developers',
    startDate: 'Dec 17',
    time: '7:00 PM',
    location: 'WeWork, Brooklyn',
    attendees: 18,
    imgUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    tag: 'Technology',
    description:
      'Deep dive into modern JavaScript concepts including ES6+, async/await, and React patterns. Bring your laptop!',
    maxAttendees: 25,
    price: 0,
    isOnline: false,
  },
  {
    id: '4',
    title: 'Photography Walk in SoHo',
    hostName: 'NYC Photography Club',
    startDate: 'Dec 18',
    time: '2:00 PM',
    location: 'SoHo, Manhattan',
    attendees: 32,
    imgUrl:
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=200&fit=crop',
    tag: 'Photography',
    description:
      'Explore the artistic streets of SoHo while capturing beautiful moments. Perfect for both beginners and experienced photographers.',
    maxAttendees: 40,
    price: 20,
    isOnline: false,
  },
  {
    id: '5',
    title: 'Virtual Cooking Class: Italian Cuisine',
    hostName: 'Chef Maria',
    startDate: 'Dec 19',
    time: '6:00 PM',
    location: 'Online Event',
    attendees: 15,
    imgUrl:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop',
    tag: 'Food & Drink',
    description:
      'Learn to make authentic Italian pasta from scratch in this interactive online cooking class.',
    maxAttendees: 20,
    price: 35,
    isOnline: true,
  },
  {
    id: '6',
    title: 'Art Gallery Opening',
    hostName: 'Modern Art Collective',
    startDate: 'Dec 20',
    time: '7:00 PM',
    location: 'Chelsea Gallery District',
    attendees: 67,
    imgUrl:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop',
    tag: 'Art & Culture',
    description:
      'Join us for the opening of our latest contemporary art exhibition featuring local and international artists.',
    maxAttendees: 100,
    price: 0,
    isOnline: false,
  },
  {
    id: '7',
    title: 'Financial Literacy Workshop',
    hostName: 'NYC Financial Education',
    startDate: 'Dec 21',
    time: '10:00 AM',
    location: 'Public Library, Midtown',
    attendees: 28,
    imgUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
    tag: 'Education',
    description:
      'Learn essential financial skills including budgeting, investing, and retirement planning.',
    maxAttendees: 50,
    price: 0,
    isOnline: false,
  },
  {
    id: '8',
    title: 'Hiking Adventure: Bear Mountain',
    hostName: 'NYC Outdoor Adventures',
    startDate: 'Dec 22',
    time: '7:00 AM',
    location: 'Bear Mountain State Park',
    attendees: 12,
    imgUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop',
    tag: 'Sports & Fitness',
    description:
      'Challenging hike to the summit of Bear Mountain with stunning views of the Hudson Valley.',
    maxAttendees: 20,
    price: 25,
    isOnline: false,
  },
  // Additional events for pagination testing
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 9}`,
    title: `Sample Event ${i + 9}`,
    hostName: 'Sample Host',
    startDate: `Dec ${23 + i}`,
    time: '2:00 PM',
    location: 'New York, NY',
    attendees: Math.floor(Math.random() * 100) + 10,
    imgUrl:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=200&fit=crop',
    tag: [
      'Networking',
      'Technology',
      'Health & Wellness',
      'Photography',
      'Food & Drink',
      'Art & Culture',
      'Education',
      'Sports & Fitness',
    ][i % 8],
    description: `This is a sample event description for event ${i + 9}.`,
    maxAttendees: Math.floor(Math.random() * 50) + 20,
    price: Math.random() > 0.5 ? Math.floor(Math.random() * 50) : 0,
    isOnline: Math.random() > 0.8,
  })),
];

// Mock Groups Data
export const mockGroups: Group[] = [
  {
    id: '1',
    name: 'NYC Tech Professionals',
    description:
      'A community of tech professionals in New York City sharing knowledge and networking opportunities.',
    members: 2847,
    imgUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop',
    tag: 'Technology',
    location: 'New York, NY',
    events: 23,
    organizer: 'Sarah Johnson',
    createdAt: '2023-01-15',
  },
  {
    id: '2',
    name: 'Central Park Runners',
    description:
      'Join our running group for weekly runs through Central Park and other NYC locations.',
    members: 890,
    imgUrl:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
    tag: 'Sports & Fitness',
    location: 'Central Park, NYC',
    events: 15,
    organizer: 'Mike Chen',
    createdAt: '2023-02-20',
  },
  {
    id: '3',
    name: 'Brooklyn Foodies',
    description:
      'Discover the best restaurants and food experiences in Brooklyn with fellow food enthusiasts.',
    members: 1256,
    imgUrl:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=200&fit=crop',
    tag: 'Food & Drink',
    location: 'Brooklyn, NY',
    events: 18,
    organizer: 'Emma Rodriguez',
    createdAt: '2023-03-10',
  },
  {
    id: '4',
    name: 'NYC Photography Enthusiasts',
    description:
      'Share your passion for photography and explore NYC through the lens with other photographers.',
    members: 743,
    imgUrl:
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=200&fit=crop',
    tag: 'Photography',
    location: 'Manhattan, NYC',
    events: 12,
    organizer: 'David Kim',
    createdAt: '2023-01-25',
  },
  {
    id: '5',
    name: 'Manhattan Book Club',
    description:
      'Join us for monthly book discussions, author talks, and literary events in the heart of Manhattan.',
    members: 892,
    imgUrl:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop',
    tag: 'Education',
    location: 'Manhattan, NY',
    events: 8,
    organizer: 'Lisa Wang',
    createdAt: '2023-02-15',
  },
  {
    id: '6',
    name: 'Queens Art Collective',
    description:
      'A vibrant community of artists, creators, and art lovers exploring contemporary art in Queens.',
    members: 456,
    imgUrl:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop',
    tag: 'Art & Culture',
    location: 'Queens, NY',
    events: 14,
    organizer: 'Maria Garcia',
    createdAt: '2023-03-05',
  },
  {
    id: '7',
    name: 'NYC Wellness Warriors',
    description:
      'Promoting health and wellness through yoga, meditation, and fitness activities across NYC.',
    members: 1123,
    imgUrl:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop',
    tag: 'Health & Wellness',
    location: 'New York, NY',
    events: 22,
    organizer: 'Alex Thompson',
    createdAt: '2023-01-10',
  },
  {
    id: '8',
    name: 'Bronx Entrepreneurs Network',
    description:
      'Connecting entrepreneurs, startups, and business leaders in the Bronx for networking and collaboration.',
    members: 567,
    imgUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
    tag: 'Technology',
    location: 'Bronx, NY',
    events: 9,
    organizer: 'James Wilson',
    createdAt: '2023-02-28',
  },
  // Additional groups for pagination testing
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 9}`,
    name: `Sample Group ${i + 9}`,
    description:
      'A community of like-minded people who share common interests and activities.',
    members: Math.floor(Math.random() * 5000) + 100,
    imgUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    tag: [
      'Technology',
      'Food & Drink',
      'Education',
      'Photography',
      'Health & Wellness',
      'Art & Culture',
      'Sports & Fitness',
    ][i % 7],
    location: 'New York, NY',
    events: Math.floor(Math.random() * 30) + 5,
    organizer: 'Sample Organizer',
    createdAt: '2023-01-01',
  })),
];

// Utility functions for mock data
export const getEventById = (id: string): EventData | undefined => {
  return mockEvents.find((event) => event.id === id);
};

export const getGroupById = (id: string): Group | undefined => {
  return mockGroups.find((group) => group.id === id);
};

export const getEventsByTag = (tag: string): EventData[] => {
  return mockEvents.filter((event) => event.tag === tag);
};

export const getGroupsByTag = (tag: string): Group[] => {
  return mockGroups.filter((group) => group.tag === tag);
};

// Event tags for filtering
export const EVENT_TAGS = [
  'All',
  'Networking',
  'Technology',
  'Health & Wellness',
  'Photography',
  'Food & Drink',
  'Education',
  'Art & Culture',
  'Sports & Fitness',
];

// Group tags for filtering
export const GROUP_TAGS = [
  'All',
  'Technology',
  'Food & Drink',
  'Education',
  'Photography',
  'Health & Wellness',
  'Art & Culture',
  'Sports & Fitness',
];
