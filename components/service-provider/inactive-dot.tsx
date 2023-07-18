import React from "react";

export const InactiveDot = ({ color }: { color?: string }) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4.00001" cy="4" r="3" fill={color || "#ED5556"} />
    </svg>
  );
};
