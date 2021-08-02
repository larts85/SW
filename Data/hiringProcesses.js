import Aplication from "../public/hiring-processes/Aplication.png";
import Assignment from "../public/hiring-processes/Assignment.png";
import Interview from "../public/hiring-processes/Interview.png";
import Offer from "../public/hiring-processes/Offer.png";

export const hiringProcessses = {
  application: {
    label: "Application",
    description:
      "Fill the form below of write us an email saying why do you want to work with us.",
    image: Aplication,
  },
  assignment: {
    label: "Assignment",
    description:
      "We'll send you a little task so we can review your skills and match with our needs.",
    image: Assignment,
  },
  interview: {
    label: "Interview",
    description:
      "Once assignment is passed we'll set a time for a interview to know you better.",
    image: Interview,
  },
  offer: {
    label: "Offer",
    description:
      "If all looks good we'll make a formal offer to you to join our team.",
    image: Offer,
  },
};
