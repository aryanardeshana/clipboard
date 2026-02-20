import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDark(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const navLinkStyle = ({ isActive }) =>
    `relative transition duration-300 
    ${isActive
      ? "text-blue-600 dark:text-yellow-400"
      : "text-slate-700 dark:text-slate-300"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-gray-400
    after:transition-all after:duration-300
    hover:after:w-full`;

  return (
    <header className="sticky top-0 z-50 bg-slate-100 border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faScissors} className="text-white text-lg" />
          </div>

          <div>
            <h1 className="font-semibold text-slate-900 dark:text-white leading-none">
              QuickClip1
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Share text instantly
            </p>
          </div>
        </NavLink>

        {/* NAV + TOGGLE */}
        <div className="flex items-center gap-6">

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/faq" className={navLinkStyle}>
              FAQ
            </NavLink>

            <NavLink to="/Blog" className={navLinkStyle}>
              Blog
            </NavLink>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="h-10 w-10 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300
            dark:bg-[#0f1b2d] dark:text-yellow-400 dark:hover:bg-[#13233a]
            transition-all duration-200 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </header>
  );
}