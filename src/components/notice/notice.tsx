import React from "react";

export default function ({ children, type }: { children: any; type?: string }) {
  return (
    <div style={{ border: "2px solid dodgerblue" }}>
      <p>{type}</p>
      {children}
    </div>
  );
}
