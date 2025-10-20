import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage, { homeLoader } from './routes/home';
import AboutPage, { aboutLoader } from './routes/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: homeLoader,
  },
  {
    path: '/about',
    element: <AboutPage />,
    loader: aboutLoader,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
