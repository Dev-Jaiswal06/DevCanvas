import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "./AuthLayout";

function VerifyEmail() {
  const { verifyEmail } = useAuth();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("invalid");
      return;
    }
    verifyEmail(token).then((res) => {
      setStatus(res.success ? "success" : "error");
    });
  }, [searchParams, verifyEmail]);

  const content = {
    verifying: { icon: "⏳", title: "Verifying...", text: "Please wait while we verify your email." },
    success: { icon: "✅", title: "Email verified!", text: "Your email has been successfully verified." },
    error: { icon: "❌", title: "Verification failed", text: "Invalid or expired verification link." },
    invalid: { icon: "⚠️", title: "Invalid link", text: "No verification token provided." }
  };

  const c = content[status] || content.error;

  return (
    <AuthLayout title={c.title}>
      <div className="text-center py-8">
        <p className="text-6xl mb-4">{c.icon}</p>
        <p className="text-gray-400">{c.text}</p>
        {status === "success" && (
          <Link to="/login" className="inline-block mt-6 px-6 py-3 rounded-xl bg-cyan-500">
            Go to Login
          </Link>
        )}
      </div>
    </AuthLayout>
  );
}

export default VerifyEmail;
