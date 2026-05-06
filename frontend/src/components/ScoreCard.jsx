function ScoreCard({

  title,
  value,
  color

}) {

  return (

    <div
      className="
      bg-[#111]
      border
      border-gray-800
      rounded-3xl
      p-6
      "
    >

      <h3
        className="
        text-gray-400
        text-lg
        "
      >
        {title}
      </h3>

      <h1
        className={`
        text-5xl
        font-bold
        mt-4
        ${color}
        `}
      >

        {value}

      </h1>

    </div>
  );
}

export default ScoreCard;