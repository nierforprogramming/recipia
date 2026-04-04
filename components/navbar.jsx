"use client";

import { links } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenuFill, RiMoonFill, RiSunFill } from "react-icons/ri";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "night" ? "light" : "night"));
  };

  return (
    <nav className="lg:my-5">
      {/* NAVBAR */}
      <div className="navbar p-0 bg-base-100">
        <div className="navbar-start">
          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="btn btn-ghost lg:hidden text-xl"
          >
            <RiMenuFill />
          </button>

          <Link
            href="/"
            className="text-xl lg:text-4xl px-2 font-bold font-display"
          >
            Recipia
          </Link>
        </div>

        {/* DESKTOP */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="font-semibold hover:text-accent text-lg hover:bg-transparent"
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* THEME */}
        <div className="navbar-end">
          <label className="swap swap-rotate hover:bg-base-300 hover:text-accent rounded-full p-2">
            <input
              type="checkbox"
              checked={theme === "night"}
              onChange={toggleTheme}
            />
            <div className="swap-off text-xl">
              <RiSunFill />
            </div>
            <div className="swap-on text-xl">
              <RiMoonFill />
            </div>
          </label>
        </div>
      </div>

      {/*  SLIDE DOWN MENU */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 bg-base-100
          ${menuOpen ? "max-h-96" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-2 px-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className="block py-1 font-semibold hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
