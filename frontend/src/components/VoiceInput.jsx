function VoiceInput({ setText }) {

  const startListening = () => {

    const recognition =
      new window.webkitSpeechRecognition();

    recognition.continuous = false;

    recognition.lang = 'en-US';

    recognition.onresult = (event) => {

      const transcript =
        event.results[0][0].transcript;

      setText((prev) => prev + ' ' + transcript);
    };

    recognition.start();
  };

  return (

    <button
      onClick={startListening}
      className="
      bg-blue-500
      hover:bg-blue-600
      px-5
      py-3
      rounded-2xl
      text-white
      transition
      "
    >

      🎤 Voice Input

    </button>
  );
}

export default VoiceInput;