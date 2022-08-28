import Image from "next/image";
import profilepic from "../../public/images/leo.jpg";

const LandingComponent = () => {
  return (
    <div className="w-full px-4 mx-auto flex items-center justify-center flex-col md:flex-row h-screen">
      <div className="w-full md:w-[50%] pt-[40px] flex flex-col items-left text-center md:text-left justify-center">
        <h1 className="md:w-[90%] text-[68px] md:text-[52px] font-bold leading-[4rem] mb-[28px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Frontend & No Code Developer
        </h1>
        <p className="text-[20px] md:w-[80%]">
          Hi, My name is Leo. I am a remote frontend software developer who
          loves creating beautiful user experiences.
        </p>

        <div className="w-full md:w-[60%] py-[60px]">
          <button className="text-white  bg-gradient-to-r from-purple-400 to-pink-600 py-4 px-6 rounded-lg uppercase">
            Check out my work
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <Image
          src={profilepic}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default LandingComponent;
