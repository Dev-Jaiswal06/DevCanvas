import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "./AuthLayout";
import AuthForm from "./AuthForm";
import toast from "react-hot-toast";

function ResetPassword() {
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const fields = [
    { name: "password", label: "New Password", type: "password", placeholder: "Min 6 characters" },
    { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Re-enter password" }
  ];

  const handleSubmit = async (form) => {
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const token = searchParams.get("token");
    setLoading(true);
    const res = await resetPassword({ token, password: form.password });
    setLoading(false);
    if (res.success) navigate("/login");
  };

  return (
    <AuthLayout title="Reset password" subtitle="Enter your new password">
      <AuthForm fields={fields} onSubmit={handleSubmit} buttonText="Update Password" loading={loading} />
    </AuthLayout>
  );
}

export default ResetPassword;
