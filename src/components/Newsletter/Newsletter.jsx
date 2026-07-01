function Newsletter() {
  return (
    <section className="py-28" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 bg-white/5 rounded-[40px] p-16 text-center">
        <h1 className="text-5xl font-black">Stay Updated</h1>
        <p className="mt-6 text-gray-400">Get updates about new lessons and features.</p>
        <div className="flex gap-5 mt-10 max-w-md mx-auto">
          <input placeholder="Enter Email" className="flex-1 bg-black/20 rounded-xl p-5 outline-none" />
          <button className="bg-cyan-400 text-black px-8 rounded-xl font-bold">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
