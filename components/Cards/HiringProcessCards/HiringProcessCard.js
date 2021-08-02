import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { cardWrapper, h3, p, textWrapper } from "./HiringProcessCard.styles.js";

const HiringProcessCard = (props) => {
  const { label, description, image } = props;

  return (
    <div className={cardWrapper}>
      <Image src={image} />
      <div className={textWrapper}>
        <p className={h3}>{label}</p>
        <p className={p}>{description}</p>
      </div>
    </div>
  );
};

HiringProcessCard.propTypes = {
  step: PropTypes.object,
};

export default HiringProcessCard;
