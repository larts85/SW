import React from "react";
import HiringProcessCards from "../components/Cards/HiringProcessCards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center gap-5">
        <HiringProcessCards />
      </section>
      <Footer />
    </div>
  );
};

export default Cards;
