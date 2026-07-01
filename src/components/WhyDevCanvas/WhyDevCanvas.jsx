import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaBookOpen,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCode size={35} />,
    title: "Interactive Learning",
    desc: "Theory ke saath Live Coding aur Visual Animations."
  },
  {
    icon: <FaLaptopCode size={35} />,
    title: "Practice Playground",
    desc: "Har topic ke baad browser ke andar hi code run karo."
  },
  {
    icon: <FaRocket size={35} />,
    title: "Projects",
    desc: "Beginner se Advanced tak real world projects."
  },
  {
    icon: <FaBookOpen size={35} />,
    title: "Interview Ready",
    desc: "100+ Interview Questions with Explanation."
  }
];

function WhyDevCanvas() {
  return (
    <section className="py-28 bg-[#090E1C]">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2

          initial={{opacity:0,y:30}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:.8}}

          className="text-5xl font-black text-center">

          Why

          <span className="text-cyan-400">

            {" "}DevCanvas?

          </span>

        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">

          Ek complete Frontend Learning Platform jahan
          tum sirf padhoge nahi,
          balki har concept ko visualize aur practice bhi karoge.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item,index)=>(

            <motion.div

            key={index}

            whileHover={{y:-12}}

            className="bg-white/5 rounded-3xl p-8 border border-white/10">

              <div className="text-cyan-400">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-400">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyDevCanvas;
