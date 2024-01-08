import React from "react";
import "./ScrollToTop.css";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button className="top" onClick={top}>
      <span>
        <MdKeyboardArrowUp />
      </span>
    </button>
  );
};

export default ScrollToTop;
