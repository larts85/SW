import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center gap-5">
        <h1>Provisional components for Sancrisoft Web Site</h1>
      </main>
      <Footer />
    </div>
  );
}
