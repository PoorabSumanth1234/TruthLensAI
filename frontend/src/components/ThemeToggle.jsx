function ThemeToggle({ darkMode, setDarkMode }) {

  return (

    <button

      onClick={() =>
        setDarkMode(!darkMode)
      }

      className="
      border
      border-gray-700
      px-4
      py-2
      rounded-xl
      text-white
      "
    >

      {
        darkMode
        ? '☀️ Light'
        : '🌙 Dark'
      }

    </button>
  );
}

export default ThemeToggle;