function LessonMistakes({ mistakes }) {

    return (

        <section className="mt-16">

            <h2 className="text-3xl font-bold">

                ❌ Common Mistakes

            </h2>

            <ul className="mt-6 space-y-4">

                {

                    mistakes.map((item,index)=>(

                        <li

                        key={index}

                        className="bg-red-500/10 border border-red-500/30 rounded-xl p-5"

                        >

                            {item}

                        </li>

                    ))

                }

            </ul>

        </section>

    );

}

export default LessonMistakes;
