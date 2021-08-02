import Link from "next/link";
import React from "react";
import Button from "../components/Buttons/Buttons";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center gap-5">
        <Button left>
          <Link href="/">
            <a>Go back Home</a>
          </Link>
        </Button>
        <Button type="secondary" right left>
          <Link href="/cards">
            <a>Go to Cards</a>
          </Link>
        </Button>
        <Button type="text" right>
          <Link href="/radio-buttons">
            <a>Go to Radio Buttons</a>
          </Link>
        </Button>
      </section>
      <Footer />
    </div>
  );
};

export default Buttons;
