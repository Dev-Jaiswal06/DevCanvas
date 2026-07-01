function LessonHero({ heroImage, title }) {
  if (!heroImage) return null;
  return (
    <div className="rounded-3xl overflow-hidden mb-10">
      <img src={heroImage} alt={title} className="w-full h-64 object-cover" />
    </div>
  );
}

export default LessonHero;
