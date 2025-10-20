import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './routes/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
