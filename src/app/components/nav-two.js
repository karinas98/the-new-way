"use client";
import { useState, useEffect } from "react";
import scrollLogo from "@/app/assets/logo-orange.png";

import Image from "next/image";
import Link from "next/link";

export default function NavTwo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.height = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={
        "h-[130px] fixed w-screen top-0 z-50 transition-all duration-300"
      }
    >
      <section className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={scrollLogo}
            alt="The New Way Logo"
            className="w-[330px] p-[15px] pl-[50px]"
          />
        </Link>

        {/* Desktop navigation links */}
        <div
          className={
            "hidden lg:flex md:gap-[45px] relative md:mr-[150px] md:z-10 md:font-light md:text-[18px] "
          }
        >
          <Link className=" font-medium hover:text-orange" href="/who-we-are">
            WHO WE ARE
          </Link>

          <Link className="hover:text-orange font-medium" href="/contact">
            CONTACT
          </Link>
        </div>

        {/* Hamburger menu button for mobile & tablets */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="lg:hidden flex items-center pr-20 cursor-pointer"
          onClick={toggleMenu}
        >
          <button type="button" className="text-orange">
            <span className="block w-7 h-1 bg-orange mb-1 rounded-full" />
            <span className="block w-7 h-1 bg-orange mb-1 rounded-full" />
            <span className="block w-7 h-[4px] bg-orange rounded-full" />
          </button>
        </div>
      </section>

      {/* Mobile & Tablet Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 h-screen w-screen bg-white flex flex-col items-center justify-center lg:hidden`}
      >
        <button
          type="button"
          className="absolute top-5 right-5 text-orange text-3xl"
          onClick={toggleMenu}
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-[30px] py-[60px]">
          <Link
            className="text-orange text-md"
            href="/who-we-are"
            onClick={toggleMenu}
          >
            WHO WE ARE
          </Link>

          <Link
            className="text-orange text-md"
            href="/contact"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
