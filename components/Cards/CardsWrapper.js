// The idea of this is just a white box with shadow,
// paddings and border radius.
// The height should be given by its content and
// the width will be 100% of its container
// The cards should have an inactive mode that will be used on Jobs section.

import React from "react";

const CardsWrapper = ({ children }) => {
  return <div className="shadow-md w-full">{children}</div>;
};

export default CardsWrapper;
