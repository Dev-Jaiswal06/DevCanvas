import { motion } from "framer-motion";
import FloatingIcons from "../FloatingIcons/FloatingIcons";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#070B1A] via-[#0E1630] to-[#090E1C]">

      <div className="absolute inset-0">

        <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px] left-[-150px] top-[-150px]" />

        <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[180px] right-[-120px] bottom-[-120px]" />

      </div>

      <FloatingIcons />

      <div className="relative z-10 text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-8 px-6 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300"
        >
          🚀 India's Interactive Frontend Learning Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl lg:text-8xl font-black leading-tight"
        >
          Master
          <span className="text-cyan-400"> HTML</span>,
          <span className="text-blue-400"> CSS</span>,
          <span className="text-yellow-400"> JavaScript</span>
          & <span className="text-cyan-300"> React</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-8"
        >
          Interactive HTML, CSS, JavaScript & React Course
          built for beginners to professionals with animations,
          playground, quizzes and interview preparation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <button className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 duration-300">
            Start Learning
          </button>
          <button className="px-8 py-4 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black duration-300">
            View Roadmap
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
