import { Link } from 'react-router';

export default function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Welcome to <span className="text-[#51BAFF]">Atsumarii</span>!
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The people plaform. Where interests become friendships and where
              belonging starts
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/groups"
                className="bg-primary hover:bg-primary text-white px-9 py-2 rounded-full font-semibold text-2xl transition-colors shadow-lg hover:shadow-xl"
              >
                JOIN
              </Link>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-full shadow-lg p-2 flex items-center">
                <input
                  type="text"
                  placeholder="Search for events, groups, or topics"
                  className="flex-1 px-6 py-3 rounded-full border-0 outline-none text-gray-700 placeholder-gray-500"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
