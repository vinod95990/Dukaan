import React from "react";

export default function ChevronLeft(props) {
  const { fill, width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.62102 5.29289C9.01154 4.90237 9.64471 4.90237 10.0352 5.29289L16.0352 11.2929C16.2228 11.4804 16.3281 11.7348 16.3281 12C16.3281 12.2652 16.2228 12.5196 16.0352 12.7071L10.0352 18.7071C9.64471 19.0976 9.01154 19.0976 8.62102 18.7071C8.23049 18.3166 8.23049 17.6834 8.62102 17.2929L13.9139 12L8.62102 6.70711C8.23049 6.31658 8.23049 5.68342 8.62102 5.29289Z"
        fill={fill}
      />
    </svg>
  );
}
