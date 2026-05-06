function FloatingAssistant({ setOpen }) {

  return (

    <button

      onClick={() => setOpen(true)}

      className="
      fixed
      bottom-6
      right-6
      bg-red-500
      hover:bg-red-600
      text-white
      px-6
      py-4
      rounded-full
      shadow-2xl
      z-40
      transition
      "
    >

      💬 AI Assistant

    </button>
  );
}

export default FloatingAssistant;