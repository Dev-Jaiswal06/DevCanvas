import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-red-400">401</h1>
        <p className="text-2xl mt-4">Unauthorized</p>
        <p className="text-gray-400 mt-2">Please login to access this page.</p>
        <Link to="/login" className="inline-block mt-8 px-6 py-3 rounded-xl bg-cyan-500 font-semibold">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;
