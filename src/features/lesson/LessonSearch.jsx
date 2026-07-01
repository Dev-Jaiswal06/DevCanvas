import { useState } from "react";

function LessonSearch({ lessons }) {

    const [search, setSearch] = useState("");

    return (

        <>

            <input

                placeholder="Search Lesson..."

                value={search}

                onChange={(e) => setSearch(e.target.value)}

                className="w-full p-4 rounded-xl bg-white/10 mb-6 outline-none"

            />

            {

                lessons

                    .filter(item =>

                        item.title

                            .toLowerCase()

                            .includes(search.toLowerCase())

                    )

                    .map(item => (

                        <div

                            key={item.id}

                            className="p-3 rounded-xl hover:bg-white/10"

                        >

                            {item.title}

                        </div>

                    ))

            }

        </>

    );

}

export default LessonSearch;
