import React from "react";
import PropTypes from "prop-types";
import ArrowForward from "../Icons/ArrowForward";
import { styles } from "./Buttons.styles";

const Buttons = (props) => {
  const { type = "primary", left, right } = props;

  return (
    <>
      <button className={styles[type]()}>
        {left && <ArrowForward type={type} />}
        {props.children}
        {right && <ArrowForward type={type} />}
      </button>
    </>
  );
};

Buttons.propTypes = {
  type: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default Buttons;
