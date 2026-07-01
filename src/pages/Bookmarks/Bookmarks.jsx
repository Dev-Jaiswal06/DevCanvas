import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SlideUp from "../../features/animations/SlideUp";

const mockBookmarks = [
  { id: "html-1", title: "HTML Introduction", slug: "introduction", course: "html", savedAt: "2026-06-28" },
  { id: "css-1", title: "CSS Flexbox", slug: "flexbox", course: "css", savedAt: "2026-06-27" },
  { id: "js-1", title: "JavaScript Functions", slug: "introduction", course: "javascript", savedAt: "2026-06-26" },
];

const courseLabels = { html: "HTML Masterclass", css: "CSS Masterclass", javascript: "JavaScript Masterclass", react: "React Masterclass" };

function BookmarksPage() {
  const [bookmarks] = useState(mockBookmarks);

  return (
    <div className="px-4 md:px-6 py-8 max-w-4xl mx-auto space-y-8">
      <SlideUp>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black gradient-text">🔖 Bookmarks</h1>
            <p className="text-gray-500 mt-1">{bookmarks.length} saved lessons</p>
          </div>
        </div>
      </SlideUp>

      {bookmarks.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-6xl mb-4">🔖</p>
          <h2 className="text-xl font-bold">No Bookmarks Yet</h2>
          <p className="text-gray-500 mt-2">Bookmark lessons while learning to find them later</p>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarks.map((bm, i) => (
            <motion.div
              key={bm.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/${bm.course}/${bm.slug}`}
                className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition group"
              >
                <div>
                  <p className="font-semibold group-hover:text-cyan-400 transition">{bm.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{courseLabels[bm.course] || bm.course}</p>
                </div>
                <span className="text-xs text-gray-600">Saved {new Date(bm.savedAt).toLocaleDateString()}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarksPage;
