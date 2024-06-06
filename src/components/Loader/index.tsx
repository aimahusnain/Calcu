import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./Loader.json";

const Loader = () => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const container = lottieContainerRef.current;

    if (container) {
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <div ref={lottieContainerRef} style={{ width: "25%", height: "25%" }} />
  <h1 className="text-xl font-bold">Loading...</h1>
</div>

  );
};

export default Loader;