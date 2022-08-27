import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="px-4 py-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="font-aboreto text-[28px] font-normal text-white">LRK</h1>
        <div className="block md:hidden text-[28px]">
          <BiMenuAltRight />
        </div>

        <div className="hidden md:block space-x-4 text-[17px]">
          <Link href="/">Home</Link>
          <Link href="/about">About Leo</Link>
          <Link href="/about">Work</Link>
          <Link href="/about">Career</Link>
          <Link href="/about">Community</Link>
          <button className="bg-white text-black py-2 px-4 rounded-lg">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
