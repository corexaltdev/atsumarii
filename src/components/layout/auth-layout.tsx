import { Link } from 'react-router';
import ResponsiveLogo from '../ui/responsive-logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Hero Content */}
      <div className="hidden relative bg-background lg:flex lg:flex-1 overflow-hidden">
        <div className="relative z-10 flex items-center justify-center w-full px-8">
          <div className="text-center text-gray-900 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
              Welcome to <ResponsiveLogo responsive={false} />!
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 leading-relaxed">
              The people platform. Where interests become friendships and where
              belonging starts
            </h2>
          </div>
        </div>
      </div>

      {/* Vertical Divider - Only visible on large screens */}
      <div className="hidden lg:block w-px bg-gray-200 shadow-2xl"></div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 lg:flex-1 lg:max-w-lg flex flex-col bg-white">
        {/* Auth Header */}
        <div className="flex justify-end p-6 flex-shrink-0">
          <Link to="/" className="hover:opacity-80 transition-opacity p-2 -m-2">
            <div className="w-14 h-14">
              <img
                src="/smiley.png"
                alt="Atsumarii Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Auth Content */}
        <div className="flex flex-col py-12 px-6 lg:px-12 flex-1 overflow-y-auto">
          <div className="w-full max-w-sm mx-auto py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            </div>

            <div className="space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
