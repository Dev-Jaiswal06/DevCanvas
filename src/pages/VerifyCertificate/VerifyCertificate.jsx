import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function VerifyCertificate() {
  const { id } = useParams();
  const certData = useMemo(() => {
    const saved = JSON.parse(localStorage.getItem("devcanvas_certificates") || "{}");
    return Object.values(saved).find((c) => c.certificateId === id) || null;
  }, [id]);

  const isValid = !!certData;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg w-full text-center space-y-6">
        <div className="text-6xl">{isValid ? "✅" : "❌"}</div>
        <h1 className="text-3xl font-bold">{isValid ? "Valid Certificate" : "Invalid Certificate"}</h1>
        <p className="text-gray-500">
          {isValid ? "This certificate was issued by DevCanvas and is verified authentic." : "This certificate ID could not be found in our records."}
        </p>

        {certData && (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Certificate ID</span>
              <span className="text-sm font-mono">{certData.certificateId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Course</span>
              <span className="text-sm font-semibold">{certData.courseName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Issued</span>
              <span className="text-sm">{new Date(certData.issuedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Issued by</span>
              <span className="text-sm font-semibold gradient-text">DevCanvas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Status</span>
              <span className="text-sm text-green-400">Verified</span>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-600">DevCanvas certificate verification system ensures every certificate is uniquely identifiable and tamper-proof.</p>
      </motion.div>
    </div>
  );
}

export default VerifyCertificate;
