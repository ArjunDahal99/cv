import LoadingSpinner from "@/components/ui/loading";
import React from "react";

const LoadingComponent = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
};

export default LoadingComponent;
