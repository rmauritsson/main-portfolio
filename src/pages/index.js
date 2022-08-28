import Head from "next/head";
import LandingComponent from "../components/LandingComponent";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/ParticlesComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Leonard Rwai Kanyesigye - Portfolio</title>
        <meta
          name="description"
          content="Welcome to my fortress, this is my personal online space, I talk about career, work and community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[100vh] bg-black text-white ">
        <Navbar />
        {/** Show acrtive link in navbar */}
        <div className="container mx-auto px-4">
          <ParticlesComponent />
          <LandingComponent />
        </div>
        <footer className="container mx-auto px-4 border-t-2 border-gray-600 opacity-50 text-[14px] font-aboreto flex items-center justify-center h-[60px] uppercase">
          ALL RIGHTS RESEREVED 2022 | Leonard Rwai Kanyesigye
        </footer>
      </main>
    </div>
  );
}
