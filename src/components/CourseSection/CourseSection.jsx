import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

const courses = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    lessons: "40+ Lessons",
    path: "/html",
    description: "Learn HTML from scratch with projects."
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    lessons: "35+ Lessons",
    path: "/css",
    description: "Master Flexbox, Grid, Animation & Responsive Design."
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
    lessons: "70+ Lessons",
    path: "/javascript",
    description: "Complete JavaScript from Beginner to Advanced."
  },
  {
    title: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    lessons: "60+ Lessons",
    path: "/react",
    description: "React, Hooks, Routing & Projects."
  }
];

function CourseSection() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-black text-center">

          Explore Our

          <span className="text-cyan-400">

            {" "}Courses

          </span>

        </h2>

        <p className="text-center text-gray-400 mt-5">

          Start learning from beginner to advanced.

        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {courses.map((course) => (

            <Tilt
              key={course.title}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
            >

              <motion.div

                whileHover={{
                  y: -12,
                  scale: 1.04,
                  rotateX: 8,
                }}

                transition={{
                  duration: .3
                }}

                className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-8 backdrop-blur-xl"

              >

                <div className={`text-6xl ${course.color}`}>

                  {course.icon}

                </div>

                <h3 className="text-3xl font-bold mt-6">

                  {course.title}

                </h3>

                <p className="text-cyan-400 mt-3">

                  {course.lessons}

                </p>

                <p className="text-[var(--text-secondary)] mt-4 leading-7">

                  {course.description}

                </p>

                <Link
                  to={course.path}
                  className="inline-block mt-8 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 duration-300"
                >

                  Start Learning →

                </Link>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CourseSection;
