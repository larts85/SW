import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-neutrals-base500">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
  );
};

export default Footer;
