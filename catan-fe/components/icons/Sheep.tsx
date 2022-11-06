import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const Sheep = ({ width = 30, height = 30 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 0L51.9808 15V45L26 60L0.0192375 45V15L26 0Z"
        fill="#E3E7DC"
      />
    </svg>
  );
};

export default Sheep;
