import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import ResponsiveLogo from './ui/responsive-logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-background border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-sm bg-background/95' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="items-center">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity p-2 -m-2"
            >
              <ResponsiveLogo size="lg" maxWidth="120px" />
            </Link>
          </div>

          {/* <nav className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        >
                            Find Events
                        </Link>
                        <Link 
                            to="/groups" 
                            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        >
                            Find Groups
                        </Link>
                        <Link 
                            to="/start" 
                            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        >
                            Start a Group
                        </Link>
                    </nav> */}

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-white px-4 py-2 rounded-full font-medium transition-colors cursor-pointer hover:shadow-xl"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
