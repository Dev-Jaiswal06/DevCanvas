import { motion } from "framer-motion";

const roadmap = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Projects",
  "Interview",
  "Job Ready",
];

function RoadmapSection() {
  return (
    <section className="py-24 bg-[#090E1C]">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-center text-5xl font-black">

          Frontend

          <span className="text-cyan-400">

            {" "}Roadmap

          </span>

        </h2>

        <div className="mt-20 flex flex-col gap-10">

          {roadmap.map((item, index) => (

            <motion.div

              key={item}

              initial={{opacity:0,x:-80}}

              whileInView={{opacity:1,x:0}}

              transition={{delay:index*.15}}

              className="flex items-center gap-8"

            >

              <div className="w-14 h-14 rounded-full bg-cyan-400 text-black flex justify-center items-center font-black">

                {index+1}

              </div>

              <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-6">

                <h3 className="text-2xl font-bold">

                  {item}

                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default RoadmapSection;
