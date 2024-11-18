"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/nebula.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-12">
      {/* Logo */}
      <div className="flex items-center flex-grow md:flex-none">
        <Image src={logo} alt="Nebula Logo" width={200} height={100} />
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold flex-grow justify-evenly">
      <Link href="/about" className="hover:underline text-black">
          HOME
        </Link>
        <Link href="/about" className="hover:underline text-black">
          ABOUT
        </Link>
        <Link href="/team" className="hover:underline text-black">
          SERVICES
        </Link>
        <Link href="/news" className="hover:underline text-black">
          WORK
        </Link>
        <Link href="/social" className="hover:underline text-white bg-[#2baee2] ">
         <span className="p-4 ">MEMBERSHIP</span> 
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
        <div className="absolute h-screen top-16 left-0 w-full bg-white mt-2 shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-lg font-semibold">
            <li>
              <Link href="/about" className="block hover:underline  text-black">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/team" className="block hover:underline text-black">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/news" className="block hover:underline text-black">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="block hover:underline text-black">
                WORK
              </Link>
            </li>
            <li>
              <Link href="/social" className="block hover:underline text-black">
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