import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-[var(--footer-bg)] border-t border-[var(--border-color)]">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h1 className="text-4xl font-black text-cyan-400">

              DevCanvas

            </h1>

            <p className="mt-6 text-[var(--text-secondary)] leading-8">

              Interactive Frontend Learning Platform.

              Learn HTML, CSS, JavaScript & React in Hinglish.

            </p>

          </div>

          {/* Courses */}

          <div>

            <h2 className="font-bold text-xl mb-6">

              Courses

            </h2>

            <ul className="space-y-4 text-[var(--text-secondary)]">

              <li>HTML</li>

              <li>CSS</li>

              <li>JavaScript</li>

              <li>React</li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h2 className="font-bold text-xl mb-6">

              Resources

            </h2>

            <ul className="space-y-4 text-[var(--text-secondary)]">

              <li>Projects</li>

              <li>Quiz</li>

              <li>Interview</li>

              <li>Roadmap</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h2 className="font-bold text-xl mb-6">

              Connect

            </h2>

            <div className="flex gap-4">

              <button className="w-12 h-12 rounded-xl bg-[var(--card-bg)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition flex justify-center items-center text-[var(--text-secondary)]">

                <FaGithub/>

              </button>

              <button className="w-12 h-12 rounded-xl bg-[var(--card-bg)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition flex justify-center items-center text-[var(--text-secondary)]">

                <FaLinkedin/>

              </button>

              <button className="w-12 h-12 rounded-xl bg-[var(--card-bg)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition flex justify-center items-center text-[var(--text-secondary)]">

                <FaInstagram/>

              </button>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex justify-center items-center">

          <p className="text-[var(--text-muted)]">

            © 2026 DevCanvas. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>

  );

}

export default Footer;
