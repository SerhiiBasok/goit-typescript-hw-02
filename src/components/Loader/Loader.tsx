import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="loaderStyle">
      <RotatingLines
        visible={true}
        // height={`${50}`}
        width={"50"}
        // color="black"
        strokeWidth={"5"}
        animationDuration={"0.75"}
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
