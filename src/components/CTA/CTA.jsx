import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-32" data-aos="zoom-in">
      <div className="max-w-6xl mx-auto px-4 rounded-[40px] bg-gradient-to-r from-cyan-500 to-blue-500 p-16 text-center">
        <h1 className="text-6xl font-black">Ready to Master Frontend?</h1>
        <p className="mt-8 text-xl">Start your learning journey today.</p>
        <Link to="/html" className="inline-block mt-12 bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 duration-300">
          Start Learning
        </Link>
      </div>
    </section>
  );
}

export default CTA;
