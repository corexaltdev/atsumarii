import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './routes/home';
import LoginPage from './routes/login';
import SignupPage from './routes/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
