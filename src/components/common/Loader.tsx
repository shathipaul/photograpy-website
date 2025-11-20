import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DotLottieReact
        className="w-[300px] lg:w-[400px] z-30"
        src="/loaderAnimation.json"
        loop
        autoplay
      />
    </div>
  );
};

export default Loader;
