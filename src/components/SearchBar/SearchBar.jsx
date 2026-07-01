import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const courses = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Flexbox",
  "Grid",
  "Variables",
  "Functions",
  "Hooks",
  "Promises",
  "Async Await",
];

function SearchBar() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handle = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        document.querySelector("input")?.focus();
      }
    };

    window.addEventListener("keydown", handle);

    return () => window.removeEventListener("keydown", handle);
  }, []);

  const filtered = courses.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">

      <div className="flex items-center bg-white/10 rounded-xl px-3 py-2 w-48 xl:w-56">

        <FaSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-3 bg-transparent outline-none flex-1 text-white placeholder-gray-400"
        />

      </div>

      {query && (

        <div className="absolute mt-2 w-full rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden">

          {filtered.length ? (

            filtered.map((item) => (

              <div
                key={item}
                className="px-4 py-3 hover:bg-cyan-500 hover:text-black cursor-pointer transition"
              >
                {item}
              </div>

            ))

          ) : (

            <div className="px-4 py-3 text-gray-400">

              No Result

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default SearchBar;
