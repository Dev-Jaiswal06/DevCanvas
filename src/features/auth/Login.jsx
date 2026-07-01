import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "./AuthLayout";
import AuthForm from "./AuthForm";
import SocialLogin from "./SocialLogin";

function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fields = [
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
    { name: "password", label: "Password", type: "password", placeholder: "Enter your password" }
  ];

  const handleSubmit = async (form) => {
    setLoading(true);
    const res = await login(form.email, form.password, form.remember);
    setLoading(false);
    if (res.success) navigate("/dashboard");
  };

  const extra = (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 text-sm text-gray-400">
        <input type="checkbox" name="remember" /> Remember me
      </label>
      <Link to="/forgot-password" className="text-sm text-cyan-400">Forgot password?</Link>
    </div>
  );

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to continue learning"
      altLink="/register"
      altText="Don't have an account?"
    >
      <AuthForm fields={fields} onSubmit={handleSubmit} buttonText="Login" loading={loading} extra={extra} />
      <SocialLogin />
    </AuthLayout>
  );
}

export default Login;
