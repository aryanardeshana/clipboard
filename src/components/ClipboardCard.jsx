import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faPlay, faShareNodes, faDownload, faChevronDown, faDatabase, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function ClipboardCard() {
  const [activeTab, setActiveTab] = useState("share");

  const [text, setText] = useState("");
  const [expiry, setExpiry] = useState("1 Hour");
  const [oneTime, setOneTime] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(null);

  const [retrieveCode, setRetrieveCode] = useState(["", "", "", ""]);
  const [retrievedText, setRetrievedText] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // new state erray

  // ===== GENERATE CODE =====
  const generateCode = (autoCopy = false) => {
    if (!text.trim()) return;

    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);

    let duration = 60 * 60 * 1000;
    if (expiry === "1 Minutes") duration = 60 * 1000;
    if (expiry === "30 Minutes") duration = 30 * 60 * 1000;
    if (expiry === "24 Hours") duration = 24 * 60 * 60 * 1000;

    localStorage.setItem(
      code,
      JSON.stringify({
        message: text,
        expireAt: Date.now() + duration,
        oneTime: oneTime,
      })
    );

    if (autoCopy) {
      navigator.clipboard.writeText(code);
    }
  };

  // ===== COPY GENERATED CODE =====
  const copyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
    }
  };

  // ===== RETRIEVE DATA =====
  const handleRetrieve = () => {
    const code = retrieveCode.join("");
    const stored = localStorage.getItem(code);

    // juni value saff kari search kr ta pela
    setErrorMessage("");
    setRetrievedText("");

    if (!stored) {
      setErrorMessage("Invalid code. Please check and try again.");
      return;
    }

    const parsed = JSON.parse(stored);

    // time puro thay gayo ke nai ee check kare
    if (Date.now() > parsed.expireAt) {
      localStorage.removeItem(code);
      setErrorMessage("This code has expired and is no longer available.");
      return;
    }

    setRetrievedText(parsed.message);

    if (parsed.oneTime) {
      localStorage.removeItem(code);
    }
  };

  return (
    <div className="w-full max-w-auto">
      {/* TOP TEXT */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Share Text in Seconds
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
          No login required. Just paste, generate a code, and share.
          Fast, secure, and simple.
        </p>

        {/* TABS */}
        <div className="flex justify-center mt-8">
          <div className="flex bg-gray-200 dark:bg-gray-800 p-2 rounded-2xl shadow-sm gap-2">
            <button
              onClick={() => setActiveTab("share")}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${activeTab === "share"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              <FontAwesomeIcon icon={faShareNodes} />
              Share Text
            </button>

            <button
              onClick={() => setActiveTab("retrieve")}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${activeTab === "retrieve"
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
      <div className="bg-[#f5f6f8] dark:bg-gray-900 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${activeTab === "retrieve" ? "-translate-x-1/2" : "translate-x-0"
            }`}
          style={{ width: "200%" }}
        >
          {/* SHARE SECTION */}
          <div className="w-1/2 p-10">
            <h2 className="text-[28px] font-semibold text-gray-900 dark:text-white mb-8">
              Clipboard super notes
            </h2>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your text here..."
              className="w-full h-56 resize-none rounded-2xl border-2 border-gray-500 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 text-[15px] text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-col md:flex-row gap-6 mt-8 items-end">
              <div className="w-full md:w-1/2">
                <label className="block text-[15px] text-gray-800 dark:text-gray-300 mb-3">
                  Expiry Time
                </label>
                <div className="relative">
                  <select
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full h-14 appearance-none rounded-2xl bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-6 pr-12 text-[16px] focus:outline-none"
                  >
                    <option>1 Minutes</option>
                    <option>30 Minutes</option>
                    <option>1 Hour</option>
                    <option>24 Hours</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-gray-700 dark:text-gray-200">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex items-center gap-3 bg-gray-200 dark:bg-gray-800 px-6 h-14 rounded-2xl">
                <input
                  type="checkbox"
                  checked={oneTime}
                  onChange={() => setOneTime(!oneTime)}
                  className="
appearance-none h-6 w-6 rounded-lg border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-700 checked:bg-blue-600 checked:border-blue-600
dark:checked:bg-blue-600 dark:checked:border-blue-600 relative cursor-pointer transition-all duration-200 before:content-['✓'] before:absolute
before:text-white before:text-sm before:font-bold
before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 checked:before:opacity-100"/>
                <label className="text-[15px] text-gray-800 dark:text-white">
                  One-time view
                </label>
              </div>

              <button
                onClick={() => generateCode(true)}
                type="button"
                className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition shadow-lg"
              >
                <FontAwesomeIcon icon={faClipboard} size="lg" />
              </button>
            </div>

            <button
              onClick={generateCode}
              type="button"
              className="w-full mt-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-full font-semibold text-[16px] hover:opacity-95 transition flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
            >
              <FontAwesomeIcon icon={faPlay} />
              Generate Code
            </button>

            {generatedCode && (
              <div className="mt-8 bg-green-200 border border-green-400 rounded-2xl p-6 shadow-lg text-center">
                <h3 className="text-green-800 font-semibold mb-4">Your code is ready!</h3>
                <div className="flex items-center justify-between bg-white rounded-xl px-6 py-4">
                  <span className="text-3xl font-bold tracking-widest">{generatedCode}</span>
                  <button onClick={copyCode} className="bg-green-600 text-white h-12 w-12 rounded-xl flex items-center justify-center hover:bg-green-700 transition">
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RETRIEVE SECTION */}
          <div className="w-1/2 p-10 flex flex-col items-center justify-start">
            <h2 className="text-[28px] font-semibold text-gray-900 dark:text-white mb-8">
              Enter 4-digit Code
            </h2>

            {/* 4 digit textare */}
            <div className="flex gap-6 mb-8">
              {retrieveCode.map((digit, i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const value = e.target.value;

                    // Only numbers allow
                    if (!/^[0-9]?$/.test(value)) return;

                    const newCode = [...retrieveCode];
                    newCode[i] = value;
                    setRetrieveCode(newCode);

                    // Move to next box
                    if (value && i < retrieveCode.length - 1) {
                      document.getElementById(`code-${i + 1}`).focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !retrieveCode[i] && i > 0) {
                      document.getElementById(`code-${i - 1}`).focus();
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");

                    if (!pasteData) return;

                    const newCode = [...retrieveCode];

                    for (let j = 0; j < pasteData.length && j < 4; j++) {
                      newCode[j] = pasteData[j];
                    }

                    setRetrieveCode(newCode);

                    // Focus last filled box
                    const lastIndex = Math.min(pasteData.length - 1, 3);
                    document.getElementById(`code-${lastIndex}`).focus();
                  }}
                  className="w-16 h-16 text-center text-xl font-semibold rounded-2xl 
                 bg-gray-200 dark:bg-gray-800 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all"
                />
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleRetrieve}
                className="px-8 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition shadow-md font-semibold"
              >
                <FontAwesomeIcon icon={faDatabase} />
                Get Data
              </button>
            </div>

            {/* ERROR MESSAGE DISPLAY */}
            {errorMessage && (
              <div className="w-full p-4 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center font-medium animate-pulse">
                {errorMessage}
              </div>
            )}

            {/* RETRIEVED TEXT DISPLAY */}
            {retrievedText && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full border-2 border-blue-500">
                <h4 className="text-blue-600 font-bold mb-2 text-sm uppercase">Retrieved Content:</h4>
                <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words">
                  {retrievedText}
                </div>
              </div>
            )}

            <div className="w-full border-t mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
