import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "./AuthLayout";
import AuthForm from "./AuthForm";

function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const fields = [
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email" }
  ];

  const handleSubmit = async (form) => {
    setLoading(true);
    const res = await forgotPassword(form.email);
    setLoading(false);
    if (res.success) setSent(true);
  };

  if (sent) {
    return (
      <AuthLayout title="Check your email" subtitle="Reset link sent successfully">
        <div className="text-center py-8 text-gray-400">
          <p className="text-6xl mb-4">✉️</p>
          <p>Password reset link has been sent to your email.</p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Forgot password" subtitle="We'll send you a reset link" altLink="/login" altText="Back to">
      <AuthForm fields={fields} onSubmit={handleSubmit} buttonText="Send Reset Link" loading={loading} />
    </AuthLayout>
  );
}

export default ForgotPassword;
