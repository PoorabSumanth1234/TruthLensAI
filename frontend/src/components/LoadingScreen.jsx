import { TypeAnimation } from 'react-type-animation';

function LoadingScreen() {

  return (

    <div className="
      fixed
      inset-0
      bg-black/95
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
    ">

      <div className="text-center">

        <div className="
          w-20
          h-20
          border-4
          border-red-500
          border-t-transparent
          rounded-full
          animate-spin
          mx-auto
        " />

        <h1 className="
          text-white
          text-3xl
          font-bold
          mt-10
        ">
          TruthLens AI
        </h1>

        <div className="
          text-red-400
                    mt-6
          text-lg
        ">

          <TypeAnimation
            sequence={[
              'Analyzing credibility...',
              1500,
              'Checking trusted sources...',
              1500,
              'Detecting manipulation...',
              1500,
              'Generating AI report...',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;