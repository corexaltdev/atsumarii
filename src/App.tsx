import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './routes/home';
import LoginPage from './routes/login';
import SignupPage from './routes/signup';
import DiscoverPage from './routes/discover';
import { EventDetails } from './components/event-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/discover',
    element: <DiscoverPage />,
  },
  {
    path: '/events/:eventId',
    element: <EventDetails />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
