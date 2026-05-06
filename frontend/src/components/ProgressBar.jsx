function ProgressBar({ label, value, color }) {

  return (

    <div className="mb-6">

      <div
        className="
        flex
        justify-between
        mb-2
        "
      >

        <span className="text-gray-300">
          {label}
        </span>

        <span className="font-bold">
          {value}%
        </span>

      </div>

      <div
        className="
        w-full
        bg-gray-800
        rounded-full
        h-4
        "
      >

        <div

          className={`
            h-4
            rounded-full
            transition-all
            duration-700
            ${color}
          `}

          style={{
            width: `${value}%`
          }}

        />

      </div>

    </div>
  );
}

export default ProgressBar;