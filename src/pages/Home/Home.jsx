import { useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideUp from "../../features/animations/SlideUp";

const Scene3D = lazy(() => import("../../features/three/Scene"));

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: "📖", title: "200+ Lessons", desc: "HTML → CSS → JS → React" },
  { icon: "⚡", title: "Live Playground", desc: "Code, preview, debug in real-time" },
  { icon: "🧠", title: "Smart Quizzes", desc: "Test & reinforce your knowledge" },
  { icon: "🎯", title: "Learning Paths", desc: "Structured roadmaps with milestones" },
  { icon: "🏆", title: "XP & Achievements", desc: "Earn rewards as you learn" },
  { icon: "📊", title: "Track Progress", desc: "Dashboards, streaks, analytics" },
];

const stats = [
  { label: "Lessons", value: "200+" },
  { label: "Courses", value: "4" },
  { label: "Quiz Questions", value: "100+" },
  { label: "Students", value: "10K+" },
];

function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    try {
      const ctx = gsap.context(() => {
        gsap.from(".hero-title span", {
          y: 80,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        });
        gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 0.8, delay: 0.8 });
        gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, delay: 1.1, stagger: 0.15 });
      }, heroRef);
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        ctx.revert();
      };
    } catch (e) {
      console.warn("GSAP hero animation failed:", e);
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    try {
      const ctx = gsap.context(() => {
        if (statsRef.current) {
          gsap.from(".stat-card", {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
          });
        }
      }, statsRef);
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        ctx.revert();
      };
    } catch (e) {
      console.warn("GSAP stats animation failed:", e);
    }
  }, []);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <Suspense fallback={null}><Scene3D /></Suspense>
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
            {"DevCanvas".split("").map((char, i) => (
              <span key={i} className="inline-block gradient-text">{char}</span>
            ))}
            <br />
            <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl">Learn to Code</span>
          </h1>
          <p className="hero-sub text-lg md:text-xl text-gray-400 mt-6 max-w-xl mx-auto">
            Master HTML, CSS, JavaScript & React with interactive lessons, live playground, quizzes, and project-based learning.
          </p>
          <div className="hero-cta flex flex-wrap gap-4 justify-center mt-10">
            <Link to="/html" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-bold text-lg hover:opacity-90 transition shadow-lg shadow-cyan-500/20">
              Start Learning
            </Link>
            <Link to="/playground" className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 font-bold text-lg hover:bg-white/20 transition">
              Try Playground
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="stat-card text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl font-black gradient-text">{s.value}</p>
              <p className="text-sm text-gray-500 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <SlideUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black gradient-text">Everything You Need</h2>
            <p className="text-gray-500 mt-3">Built for modern web development learners</p>
          </div>
        </SlideUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <SlideUp key={f.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition group">
                <span className="text-4xl">{f.icon}</span>
                <h3 className="font-bold mt-4 group-hover:text-cyan-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{f.desc}</p>
              </div>
            </SlideUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <SlideUp>
          <h2 className="text-3xl md:text-4xl font-black gradient-text">Ready to Start?</h2>
          <p className="text-gray-500 mt-3 mb-8">Join thousands of learners building their future</p>
          <Link to="/register" className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-bold text-lg hover:opacity-90 transition shadow-lg shadow-cyan-500/20 inline-block">
            Create Free Account
          </Link>
        </SlideUp>
      </section>
    </div>
  );
}

export default Home;
