function SectionCard({ title, children }) {

  return (

    <div
      className="
      bg-[#111]
      border
      border-gray-800
      rounded-3xl
      p-6
      shadow-lg
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        {title}
      </h2>

      {children}

    </div>
  );
}

export default SectionCard;