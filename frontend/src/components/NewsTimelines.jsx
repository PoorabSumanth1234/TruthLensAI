function NewsTimeline({ articles }) {

  return (

    <div className="
      bg-[#111]
      border
      border-gray-800
      rounded-3xl
      p-6
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-8
      ">
        News Timeline
      </h2>

      <div className="space-y-6">

        {
          articles.map((article, index) => (

            <div
              key={index}
              className="flex gap-5"
            >

              <div className="
                w-4
                h-4
                rounded-full
                bg-red-500
                mt-2
              " />

              <div>

                <h3 className="
                  text-lg
                  font-bold
                ">
                  {article.source}
                </h3>

                <p className="
                  text-gray-400
                  mt-1
                ">
                  {article.title}
                </p>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default NewsTimeline;