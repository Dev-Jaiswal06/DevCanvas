import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "./AuthLayout";
import AuthForm from "./AuthForm";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";

function Register() {
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fields = [
    { name: "name", label: "Full Name", placeholder: "John Doe" },
    { name: "username", label: "Username", placeholder: "johndoe" },
    { name: "email", label: "Email", type: "email", placeholder: "john@example.com" },
    { name: "password", label: "Password", type: "password", placeholder: "Min 6 characters" },
    { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Re-enter password" }
  ];

  const handleSubmit = async (form) => {
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    const res = await register(form);
    setLoading(false);
    if (res.success) navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Create account"
      subtitle="Start your learning journey"
      altLink="/login"
      altText="Already have an account?"
    >
      <AuthForm fields={fields} onSubmit={handleSubmit} buttonText="Create Account" loading={loading} />
      <SocialLogin />
    </AuthLayout>
  );
}

export default Register;
