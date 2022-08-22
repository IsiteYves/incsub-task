import React from "react";

const RightSidebar = ({ title, description }) => {
  return (
    <div className="sidebar flex flex-col">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default RightSidebar;
