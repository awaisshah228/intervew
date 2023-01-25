import React from "react";
import { Link } from "react-router-dom";

const Basic = ({ children }) => {
  return (
    <div>
      

      <div className="py-12 md:px-8 px-4 ">
        {/* Basic */}
        {children}
      </div>
    </div>
  );
};

export default Basic;
