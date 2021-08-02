import React from "react";
import PropTypes from "prop-types";
import ArrowForward from "../Icons/ArrowForward";
import { button, center } from "./RadioButtons.styles";

const Buttons = (props) => {
  const { isSelected, setIsSelected, radio } = props;

  const handleSelect = () => {
    setIsSelected({
      radio1: false,
      radio2: false,
      radio3: false,
      [radio]: true,
    });
  };

  return (
    <button className={button} onClick={handleSelect}>
      <div className={center(isSelected[radio])} />
    </button>
  );
};

Buttons.propTypes = {
  type: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default Buttons;
