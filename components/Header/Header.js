import { useRouter } from "next/dist/client/router";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-evenly border-black h-16 w-full bg-neutrals-base500">
      <h1 classame="text-6xl font-bold">
        <Link href="/">Home</Link>
      </h1>
      <h1 classame="text-6xl font-bold">
        <Link href="/buttons">Buttons</Link>
      </h1>
      <h1 classame="text-6xl font-bold">
        <Link href="/cards">Cards</Link>
      </h1>
      <h1 classame="text-6xl font-bold">
        <Link href="/radio-buttons">Radio Buttons</Link>
      </h1>
    </header>
  );
};

const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      className="text-secondary-base font-bold"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};

export default Header;
