"use client";
import React from "react";
import { FaBars, FaCaravan } from "react-icons/fa";
import { PiVanDuotone } from "react-icons/pi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#242423] p-4 text-[#E8EDDF] w-full flex justify-between items-center">
      <div className=" w-full md:w-auto flex flex-col">
        {/* logo name */}
        <div className="flex items-center gap-2 cursor-pointer md:ml-4">
          <FaBars
            size={24}
            className={`md:hidden cursor-pointer ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            } transition-transform`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <h1 className="text-xl text-[#E8EDDF] font-bold">
            Transpo<span className="text-2xl text-[#F5CB5C]">Guide</span>
            <FaCaravan className="inline-block ml-2 " size={24} />
          </h1>
        </div>
        {/* mobile dropdown menu */}
        {isMenuOpen && (
          <div className="w-full mt-2 transition-all duration-300 ease-in-out">
            <ul className="mt-4 gap-6 md:hidden flex flex-col">
              <li
                className={`${
                  pathname === "/" ? "bg-[#F5CB5C]" : ""
                } hover:text-gray-300 w-full cursor-pointer p-2 rounded-md`}
              >
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li
                className={`${
                  pathname === "/services" ? `bg-[#F5CB5C] ` : ""
                } hover:text-gray-300 w-full cursor-pointer p-2 rounded-md`}
              >
                <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/feedback" ? "bg-[#F5CB5C]" : ""
                } hover:text-gray-300 w-full cursor-pointer p-2 rounded-md`}
              >
                <Link href="/feedback" onClick={() => setIsMenuOpen(false)}>
                  Feedback
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/contact" ? "bg-[#F5CB5C]" : ""
                } hover:text-gray-300 w-full cursor-pointer p-2 rounded-md`}
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <div>
                <button className="border border-[#F5CB5C] px-8 py-2 rounded-md">
                  <Link href="/login">Login / Register</Link>
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
      <div className="mr-4">
        <ul className="hidden md:flex gap-6 justify-center items-center">
          <li
            className={`relative px-1 cursor-pointer 
          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#F5CB5C] after:w-full 
          after:transition-transform after:duration-300 
          ${pathname === "/" ? "after:scale-x-100" : "after:scale-x-0"}
        `}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`relative px-1 cursor-pointer 
          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#F5CB5C] after:w-full 
          after:transition-transform after:duration-300 
          ${pathname === "/services" ? "after:scale-x-100" : "after:scale-x-0"}
        `}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`relative px-1 cursor-pointer 
          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#F5CB5C] after:w-full 
          after:transition-transform after:duration-300 
          ${pathname === "/feedback" ? "after:scale-x-100" : "after:scale-x-0"}
        `}
          >
            <Link href="/feedback">Feedback</Link>
          </li>
          <li
            className={`relative px-1 cursor-pointer 
          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#F5CB5C] after:w-full 
          after:transition-transform after:duration-300 
          ${pathname === "/contact" ? "after:scale-x-100" : "after:scale-x-0"}
        `}
          >
            <Link href="/contact">Contact</Link>
          </li>

          <div>
            <button className="border border-[#F5CB5C] px-8 py-2 rounded-md">
              <Link href="/login">Login / Register</Link>
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
