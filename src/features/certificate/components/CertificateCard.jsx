import { useRef } from "react";
import QRCode from "react-qr-code";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function CertificateCard({ certificate, userName }) {
  const certRef = useRef(null);

  const handleDownload = async (format) => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, { scale: 2, backgroundColor: "#0f172a" });
    const imgData = canvas.toDataURL("image/png");

    if (format === "png") {
      const link = document.createElement("a");
      link.download = `DevCanvas-Certificate-${certificate.certificateId}.png`;
      link.href = imgData;
      link.click();
    } else if (format === "pdf") {
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [canvas.width / 2, canvas.height / 2] });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`DevCanvas-Certificate-${certificate.certificateId}.pdf`);
    }
  };

  const issuedDate = new Date(certificate.issuedAt || certificate.createdAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="space-y-4">
      <div
        ref={certRef}
        className="relative w-full aspect-[1.414/1] rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-white/10 p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 75% 75%, #a855f7 0%, transparent 50%)" }} />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <p className="text-2xl md:text-4xl font-black gradient-text mb-2">DevCanvas</p>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-6">Certificate of Completion</p>

          <p className="text-xs text-gray-500 mb-2">This certifies that</p>
          <p className="text-xl md:text-3xl font-bold text-white mb-2">{userName}</p>
          <p className="text-xs text-gray-500 mb-6">
            has successfully completed the {certificate.courseName} course
          </p>

          <div className="flex items-center gap-6 text-[10px] text-gray-500">
            <div className="text-center">
              <p className="text-white/60 font-semibold">{issuedDate}</p>
              <p>Date Issued</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-white/60 font-semibold">{certificate.certificateId}</p>
              <p>Certificate ID</p>
            </div>
          </div>

          <div className="mt-4">
            <QRCode value={`${window.location.origin}/verify/${certificate.certificateId}`} size={60} bgColor="transparent" fgColor="#06b6d4" />
          </div>
        </div>

        <div className="absolute bottom-3 left-0 right-0 text-center">
          <p className="text-[8px] text-gray-600">Verify at {window.location.origin}/verify/{certificate.certificateId}</p>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <button onClick={() => handleDownload("png")} className="px-5 py-2.5 rounded-xl bg-white/10 text-sm hover:bg-white/20 transition">📥 Download PNG</button>
        <button onClick={() => handleDownload("pdf")} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-sm font-medium hover:opacity-90 transition">📄 Download PDF</button>
      </div>
    </div>
  );
}

export default CertificateCard;
