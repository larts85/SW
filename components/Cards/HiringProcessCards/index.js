import React from "react";
import HiringProcessCard from "./HiringProcessCard";
import { hiringProcessses } from "../../../Data/hiringProcesses";
import CardsWrapper from "../CardsWrapper";

const HiringProcessCards = () => {
  return (
    <>
      {Object.entries(hiringProcessses).map(
        ([key, { label, description, image }]) => (
          <CardsWrapper>
            <HiringProcessCard
              key={key}
              label={label}
              description={description}
              image={image}
            />
          </CardsWrapper>
        )
      )}
    </>
  );
};

export default HiringProcessCards;
