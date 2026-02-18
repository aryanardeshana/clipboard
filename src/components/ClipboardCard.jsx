import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faPlay, faShareNodes, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ClipboardCard() {
  const [activeTab, setActiveTab] = useState("share");

  return (
    <div className="w-full max-w-2xl">
      {/* TOP TEXT */}
      <div className="text-center mb-6">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Share Text in Seconds
        </h1>

        {/* Sub Text */}
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
          No login required. Just paste, generate a code, and share.
          Fast, secure, and simple.
        </p>

        {/* TABS CONTAINER */}
        <div className="flex justify-center mt-8">
          <div className="flex bg-gray-200 dark:bg-gray-800 p-2 rounded-2xl shadow-sm gap-2">

            {/* Share Button */}
            <button
              onClick={() => setActiveTab("share")}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2
          ${activeTab === "share"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              <FontAwesomeIcon icon={faShareNodes} />
              Share Text
            </button>

            {/* Retrieve Button */}
            <button
              onClick={() => setActiveTab("retrieve")}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2
          ${activeTab === "retrieve"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              <FontAwesomeIcon icon={faDownload} />
              Retrieve Text
            </button>

          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-[#f5f6f8] dark:bg-gray-900 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]
         p-10 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">

        <h2 className="text-[28px] font-semibold text-gray-900 dark:text-white mb-8">
          Clipboard super notes
        </h2>

        {/* TEXTAREA */}
        <textarea
          placeholder="Paste or type your text here..."
          className="w-full h-56 resize-none rounded-2xl border-2 border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-800 
          p-6 text-[15px] text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* OPTIONS ROW */}
        <div className="flex flex-col md:flex-row gap-6 mt-8 items-end">
          {/* EXPIRY */}
          <div className="flex-1">
            <label className="block text-[15px] text-gray-800 dark:text-gray-300 mb-3">
              Expiry Time
            </label>

            <div className="relative">
              <select defaultValue="1 Hour" className="w-full h-14 appearance-none rounded-2xl bg-gray-200 dark:bg-gray-800 px-6 pr-12 
              text-[16px] text-gray-800 dark:text-gray-200 focus:outline-none">

                <option>10 Minutes</option>
                <option>30 Minutes</option>
                <option>1 Hour</option>
                <option>24 Hours</option>
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
              </div>
            </div>
          </div>

          {/* ONE TIME VIEW */}
          <div className="flex items-center gap-3 bg-gray-200 dark:bg-gray-800 px-6 h-14 rounded-2xl min-w-[250px]">

            <input
              type="checkbox"
              id="oneTime"
              className="h-5 w-5 accent-blue-600"
            />
            <label
              htmlFor="oneTime"
              className="text-[15px] text-gray-800 dark:text-gray-200"
            >
              One-time view
            </label>
          </div>

          {/* COPY BUTTON */}
          <button type="button"
            className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition shadow-lg"
            title="Copy">

            <FontAwesomeIcon icon={faClipboard} size="lg" />
          </button>

        </div>

        {/* GENERATE BUTTON */}
        <button type="button"
          className="w-full mt-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-full font-semibold text-[16px] 
          hover:opacity-95 transition flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(37,99,235,0.35)]">

          <FontAwesomeIcon icon={faPlay} />
          Generate Code
        </button>

      </div>


    </div>
  );
}
