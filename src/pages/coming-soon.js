import Head from "next/head";
import { RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/ParticlesComponent";

const ComingSoon = () => {
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
          <div className="w-full px-4 mx-auto flex items-center justify-center flex-col md:flex-row h-screen">
            <div className="w-full md:w-[50%] pt-[40px] flex flex-col items-left text-center justify-center">
              <h1 className="text-[68px] md:text-[52px] font-bold leading-[4rem] mb-[28px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Under Construction
              </h1>
              <p className="text-[20px] mb-4">
                This page is currently undergoing a facelift. We shall be back
                shortly. Thank you for your patience
              </p>

              <p className="text-[20px] mb-4">Stay in touch</p>

              <div className="w-full py-[60px] space-x-4">
                <button
                  onClick={() =>
                    window.location.assign("https://twitter.com/leonardrwai")
                  }
                  className="text-white  bg-gradient-to-r from-blue-400 to-blue-600 py-4 px-6 rounded-lg uppercase"
                >
                  <RiTwitterFill />
                </button>
                <button
                  onClick={() =>
                    window.location.assign(
                      "https://www.linkedin.com/in/leonard-rwai-kanyesigye/"
                    )
                  }
                  className="text-white  bg-gradient-to-r from-blue-500 to-blue-700 py-4 px-6 rounded-lg uppercase"
                >
                  <RiLinkedinFill />
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="container mx-auto px-4 border-t-2 border-gray-600 opacity-50 text-[14px] font-aboreto flex items-center justify-center h-[60px] uppercase">
          © 2022 Leonard Rwai Kanyesigye
        </footer>
      </main>
    </div>
  );
};

export default ComingSoon;
