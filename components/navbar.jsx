"use client";

import { links } from "@/constants";
import { searchRecipe } from "@/lib/recipes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  RiCloseFill,
  RiMenuFill,
  RiMoonFill,
  RiSearchLine,
  RiSunFill,
} from "react-icons/ri";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // Search
  const [searchOpen, setsearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  async function _searchRecipe(query) {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);

    const res = await searchRecipe(query);
    const data = res?.data || [];
    setResults(data);
    setLoading(false);
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      _searchRecipe(search);
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "night" ? "light" : "night"));
  };

  return (
    <>
      <nav className="lg:my-5 relative">
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
            <div
              onClick={() => setsearchOpen(true)}
              className="hover:bg-base-300 hover:text-accent rounded-full p-2 cursor-pointer text-xl"
            >
              <RiSearchLine />
            </div>

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

        <div
          className={`${searchOpen ? "absolute" : "hidden"} bg-base-200 px-10 py-10 pb-10 z-50 w-full mx-auto top-0`}
        >
          <span
            onClick={() => setsearchOpen(false)}
            className="right-10 top-5 absolute cursor-pointer w-fit"
          >
            <RiCloseFill className="text-4xl" />
          </span>
          <input
            className="w-full border-b outline-none"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="mt-5 max-h-80 overflow-y-auto">
            {loading && <p className="text-center">Searching...</p>}

            {!loading && results.length === 0 && search && (
              <p className="text-center">No recipes found</p>
            )}

            {results?.slice(0, 4).map((item) => (
              <Link href={`/${item.id}`} key={item.name}>
                <div className="py-2 border-b border-gray-200 cursor-pointer hover:text-accent">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.image}
                      width={50}
                      height={50}
                      alt={item.image}
                    />
                    <p>{item.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {results.length > 1 && (
              <Link
                href={`/search?q=${search}`}
                className="btn btn-outline hover:btn-neutral"
              >
                See all {results.length} results
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
