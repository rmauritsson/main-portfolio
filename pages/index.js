import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[100vh] flex flex-col justify-center items-center">
        <h1>Welcome to my Portfolio - LRK</h1>

        <p className="font-outfit font-bold">outfit</p>
        <p className="font-aboreto font-bold">outfit</p>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Career Updates</li>
          <li>Community (Broken Vessel Updates)</li>
          <li>Let's Talk (Modal form)</li>
        </ul>
      </main>
    </div>
  );
}
