import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-cyan-400">404</h1>
        <p className="text-2xl mt-4">Page not found</p>
        <p className="text-gray-400 mt-2">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-8 px-6 py-3 rounded-xl bg-cyan-500 font-semibold">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
