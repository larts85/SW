import * as React from "react";

const ArrowForward = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:fill-primary-dark"
    stroke="currentColor"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 8.5h11M9 4l4.5 4.5L9 13"
    />
  </svg>
);

const MemoSvgComponent = React.memo(ArrowForward);
export default MemoSvgComponent;
