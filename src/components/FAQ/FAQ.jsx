import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const data = [
  { question: "Is DevCanvas free?", answer: "Yes. Complete course will be free." },
  { question: "Is this beginner friendly?", answer: "Yes. We start from absolute zero." },
  { question: "Will projects be included?", answer: "Yes. Beginner to Advanced Projects." },
  { question: "Will interview questions be included?", answer: "Yes. 100+ Questions with Answers." }
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-28" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-black text-center">Frequently Asked Questions</h1>
        <div className="mt-16">
          {data.map((item, index) => (
            <div key={index} className="mb-5 rounded-2xl bg-white/5 border border-white/10">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6"
              >
                <span className="font-bold">{item.question}</span>
                <FaChevronDown className={`transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              {open === index && <div className="px-6 pb-6 text-gray-400">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
