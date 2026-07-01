function LessonSummary({ summary }) {

    return (

        <section className="mt-20 rounded-3xl bg-blue-500/10 border border-blue-500/30 p-10">

            <h2 className="text-3xl font-bold">

                📚 Summary

            </h2>

            <p className="mt-6 leading-9">

                {summary}

            </p>

        </section>

    );

}

export default LessonSummary;
