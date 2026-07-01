function LessonVideo({ video }) {
  if (!video) return null;
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold mb-6">Video Tutorial</h2>
      <div className="aspect-video rounded-2xl overflow-hidden">
        <iframe
          src={video}
          title="Video tutorial"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default LessonVideo;
