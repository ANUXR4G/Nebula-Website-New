"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/nebula.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between lg:px-6 py-4 bg-white shadow-md md:px-12 p-2">
      {/* Logo */}
      <div className="flex items-center flex-grow md:flex-none">
        <Image src={logo} alt="Nebula Logo" width={200} height={100} />
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold flex-grow justify-evenly">
      <Link href="/about" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          HOME
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          ABOUT
        </Link>
        <Link href="/team" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          SERVICES
        </Link>
        <Link href="/news" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          WORK
        </Link>
        <Link href="/social" className="hover:text-black transition-colors duration-1000 text-xl text-white bg-[#2baee2]">
         <span className="p-4">MEMBERSHIP</span> 
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center space-y-1"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute h-full top-16 left-0 w-full bg-white mt-10 shadow-lg md:hidden z-50">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-lg font-semibold text-left">
            <li>
              <Link href="/about" className="block hover:underline  text-black py-10 text-2xl">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/team" className="block hover:underline text-black py-10 text-2xl">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/news" className="block hover:underline text-black py-10 text-2xl">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="block hover:underline text-black py-10 text-2xl">
                WORK
              </Link>
            </li>
            <li>
              <Link href="/social" className="block hover:underline text-black py-10 text-2xl">
                MEMBERSHIP
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;