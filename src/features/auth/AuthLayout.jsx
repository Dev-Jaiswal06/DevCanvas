import { Link } from "react-router-dom";

function AuthLayout({ children, title, subtitle, altLink, altText }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <Link to="/" className="text-3xl font-black text-cyan-400">DevCanvas</Link>
          <h1 className="text-4xl font-bold mt-6">{title}</h1>
          {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </div>

        <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
          {children}
        </div>

        {altLink && (
          <p className="text-center mt-6 text-gray-400">
            {altText}{" "}
            <Link to={altLink} className="text-cyan-400 hover:underline">
              {altLink === "/login" ? "Login" : "Sign up"}
            </Link>
          </p>
        )}

      </div>
    </div>
  );
}

export default AuthLayout;
