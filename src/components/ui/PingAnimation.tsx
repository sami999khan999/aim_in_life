import React from "react";

const PingAnimation = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute z-10 w-2 h-2 rounded-full bg-primary"></div>
      <div className="absolute z-10 w-2 h-2 rounded-full bg-primary animation-ping flex items-center justify-center"></div>

      <div className="absolute z-10 w-2 h-2 rounded-full bg-primary flex items-center justify-center animation-ping animation-delay-500"></div>
    </div>
  );
};

export default PingAnimation;
