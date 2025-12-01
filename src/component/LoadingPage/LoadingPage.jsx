import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/reactlottie.json"

const LoadingPage = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0"
    }}>
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default LoadingPage;
