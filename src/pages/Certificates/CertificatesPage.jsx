import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProgress } from "../../context/ProgressContext";
import { getCourse } from "../../utils/getCourse";
import CertificateCard from "../../features/certificate/components/CertificateCard";
import SlideUp from "../../features/animations/SlideUp";

const COURSE_NAMES = { html: "HTML Masterclass", css: "CSS Masterclass", javascript: "JavaScript Masterclass", react: "React Masterclass" };
const COURSE_PREFIXES = { html: "DC-HTML", css: "DC-CSS", javascript: "DC-JS", react: "DC-REACT" };

function generateCertificate(courseId, completedLessons, course) {
  const count = (course?.lessons || []).filter((l) => completedLessons.includes(l.id)).length;
  const total = course?.lessons?.length || 0;
  if (count < total || total === 0) return null;
  const existing = JSON.parse(localStorage.getItem("devcanvas_certificates") || "{}");
  if (existing[courseId]) return null;
  const certId = `${COURSE_PREFIXES[courseId]}-2026-${String(Object.keys(existing).length + 1).padStart(3, "0")}`;
  const cert = { _id: courseId, certificateId: certId, courseId, courseName: COURSE_NAMES[courseId], issuedAt: new Date().toISOString(), createdAt: new Date().toISOString() };
  existing[courseId] = cert;
  localStorage.setItem("devcanvas_certificates", JSON.stringify(existing));
  return cert;
}

function CertificatesPage() {
  const { progress } = useProgress();
  const certificates = useMemo(() => {
    const saved = JSON.parse(localStorage.getItem("devcanvas_certificates") || "{}");
    const certs = Object.values(saved);
    ["html", "css", "javascript", "react"].forEach((id) => {
      const course = getCourse(id);
      const cert = generateCertificate(id, progress.completedLessons, course);
      if (cert && !certs.find((c) => c.courseId === id)) certs.push(cert);
    });
    return certs;
  }, [progress.completedLessons]);

  return (
    <div className="px-4 md:px-6 py-8 max-w-4xl mx-auto space-y-8">
      <SlideUp>
        <div className="text-center">
          <h1 className="text-3xl font-black gradient-text">My Certificates</h1>
          <p className="text-gray-500 mt-1">Your earned certificates from completed courses</p>
        </div>
      </SlideUp>

      {certificates.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <p className="text-6xl">📜</p>
          <h2 className="text-xl font-bold">No Certificates Yet</h2>
          <p className="text-gray-500">Complete all lessons in a course to earn your certificate</p>
          <Link to="/html" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-sm hover:opacity-90 transition">
            Start Learning
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {certificates.map((cert, i) => (
            <motion.div key={cert._id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
              <CertificateCard certificate={cert} userName="Arjun Singh" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CertificatesPage;
