function LessonTips({ tips }) {

    return (

        <section className="mt-16">

            <h2 className="text-3xl font-bold">

                💡 Pro Tips

            </h2>

            <ul className="mt-6 space-y-4">

                {

                    tips.map((tip,index)=>(

                        <li

                        key={index}

                        className="bg-green-500/10 border border-green-500/30 rounded-xl p-5"

                        >

                            {tip}

                        </li>

                    ))

                }

            </ul>

        </section>

    );

}

export default LessonTips;
