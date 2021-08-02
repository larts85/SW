import Head from "next/head";
import Link from "next/link";
import Button from "../components/Buttons/Buttons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-center border-black h-16 w-full bg-gray-200">
        <h1 classame="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="#" target="_blank">
            Next.js{" "}
          </a>
          with{" "}
          <a className="text-blue-600" href="#">
            Tailwinds!
          </a>
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center gap-5">
        <Button left>
          <Link href="#">
            <a>Button</a>
          </Link>
        </Button>
        <Button type="secondary" right left>
          <Link href="#">
            <a>Button</a>
          </Link>
        </Button>
        <Button type="text" right>
          <Link href="#">
            <a>
              <span>Button</span>
            </a>
          </Link>
        </Button>
      </main>

      <footer className="flex items-center justify-center w-full h-16 border-t bg-gray-200">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
