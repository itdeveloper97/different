import * as React from "react";

const SvgOrder = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 7.75h11.5l-1.637 6.958a2 2 0 0 1-1.947 1.542h-4.127a2 2 0 0 1-1.933-1.488L7.75 7.75Zm0 0-.75-3H4.75"
    />
    <circle cx={10} cy={19} r={1} fill="currentColor" />
    <circle cx={17} cy={19} r={1} fill="currentColor" />
  </svg>
);

export default SvgOrder;
