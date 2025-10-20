import { Link } from 'react-router';

interface CtaDuoProps {
  title?: string;
  description?: string;
}

const CtaDuo = ({
  title = "Can't find what you're looking for?",
  description = 'Start your own group or host an event to bring people together around your interests, passions, or goals.',
}: CtaDuoProps) => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{description}</p>
      <div className="flex items-center justify-center gap-4">
        <Link
          to="/start"
          className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Join a Group
        </Link>
        <Link
          to="/host"
          className="inline-flex items-center bg-white text-red-600 hover:text-red-700 border border-red-500 hover:border-red-600 px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-sm hover:shadow"
        >
          Join an Event
        </Link>
      </div>
    </div>
  );
};

export default CtaDuo;
