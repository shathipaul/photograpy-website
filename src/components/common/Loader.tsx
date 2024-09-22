import Lottie from "lottie-react";
import loaderAnimation from "../../../public/loaderAnimation.json";

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
      <Lottie
        animationData={loaderAnimation}
        loop
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default Loader;
