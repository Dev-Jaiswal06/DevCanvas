import CountUp from "react-countup";

function Stats() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <Card number={200} suffix="+" title="Lessons" />
        <Card number={100} suffix="+" title="Interview Questions" />
        <Card number={50} suffix="+" title="Projects" />
        <Card number={100} suffix="K+" title="Students" />
      </div>
    </section>
  );
}

function Card({ number, suffix, title }) {
  return (
    <div className="bg-[var(--card-bg)] rounded-2xl p-10 text-center">
      <h1 className="text-5xl font-black text-cyan-400">
        <CountUp end={number} duration={3} />
        {suffix}
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">{title}</p>
    </div>
  );
}

export default Stats;
