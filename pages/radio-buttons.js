import React, { useState } from "react";
import RadioButton from "../components/RadioButtons/RadioButtons";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const RadioButtons = () => {
  const [isSelected, setIsSelected] = useState({
    radio1: false,
    radio2: false,
    radio3: false,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center gap-5">
        {Object.keys(isSelected).map((key, index) => (
          <React.Fragment key={index}>
            <RadioButton
              radio={key}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          </React.Fragment>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default RadioButtons;
