import { Link } from "react-router-dom";

function ServerError() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-red-400">500</h1>
        <p className="text-2xl mt-4">Server error</p>
        <p className="text-gray-400 mt-2">Something went wrong. Please try again later.</p>
        <Link to="/" className="inline-block mt-8 px-6 py-3 rounded-xl bg-cyan-500 font-semibold">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default ServerError;
