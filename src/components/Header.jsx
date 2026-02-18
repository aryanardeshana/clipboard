import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-slate-100 border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-auto mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faScissors}
              className="text-white text-lg"
            />
          </div>

          <div>
            <h1 className="font-semibold text-slate-900 dark:text-white leading-none">
              QuickClip1
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Share text instantly
            </p>
          </div>
        </div>

        {/* DARK / LIGHT TOGGLE */}
        <button onClick={() => setDark(!dark)}
          className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 
          transition flex items-center justify-center"
          title="Toggle theme">

          <FontAwesomeIcon icon={dark ? faSun : faMoon} />
        </button>

      </div>

    </header>
  );
}
