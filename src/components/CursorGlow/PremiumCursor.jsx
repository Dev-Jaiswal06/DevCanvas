import { useEffect, useRef } from "react";

function PremiumCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;
      trail.style.transform = `translate(${trailX - 4}px, ${trailY - 4}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-cyan-400/30 pointer-events-none z-[9998] mix-blend-screen"
        style={{ transform: "translate(0, 0)", transition: "width 0.2s, height 0.2s" }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-400/40 pointer-events-none z-[9997] mix-blend-screen"
        style={{ transform: "translate(0, 0)" }}
      />
    </>
  );
}

export default PremiumCursor;
