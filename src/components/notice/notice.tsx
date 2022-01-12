import React from "react";

const Notice = ({ children, type }: { children: any; type?: string }) => {
  return (
    <div style={{ border: "2px solid dodgerblue" }}>
      <p>{type}</p>
      <p>{children}</p>
    </div>
  );
};

export default Notice;
