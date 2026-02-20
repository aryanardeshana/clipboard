import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faPlay, faShareNodes, faDownload, faChevronDown, faDatabase, faCopy } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, serverTimestamp, Timestamp } from "firebase/firestore";

export default function ClipboardCard() {
  const [activeTab, setActiveTab] = useState("share");

  const [text, setText] = useState("");
  const [expiry, setExpiry] = useState("1 Hour");
  const [oneTime, setOneTime] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(null);

  const [retrieveCode, setRetrieveCode] = useState(["", "", "", "", "", ""]);
  const [retrievedText, setRetrievedText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ===== GENERATE CODE + SAVE TO FIREBASE =====
  const generateCode = async (autoCopy = false) => {
    if (!text.trim()) return;

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);

    let duration = 60 * 60 * 1000;
    if (expiry === "1 Minutes") duration = 60 * 1000;
    if (expiry === "30 Minutes") duration = 30 * 60 * 1000;
    if (expiry === "24 Hours") duration = 24 * 60 * 60 * 1000;

    try {
      await addDoc(collection(db, "notes"), {
        code: code,
        message: text,
        oneTime: oneTime,
        createdAt: serverTimestamp(),
        expireAt: Timestamp.fromDate(
          new Date(Date.now() + duration)
        )
      });

      if (autoCopy) {
        navigator.clipboard.writeText(code);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // ===== COPY CODE =====
  const copyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
    }
  };

  // ===== COPY RETRIEVED TEXT =====
  const handleCopy = () => {
    if (retrievedText) {
      navigator.clipboard.writeText(retrievedText);
    } else {
      setErrorMessage("No text available to copy.");
    }
  };

  // ===== HANDLE 6-DIGIT PASTE =====
  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("text").trim();

    // Only allow exactly 6 digits
    if (!/^\d{6}$/.test(pastedData)) return;

    const newCode = pastedData.split("");
    setRetrieveCode(newCode);

    // focus last box
    document.getElementById("code-5")?.focus();
  };

  // ===== RETRIEVE FROM FIREBASE =====
  const handleRetrieve = async () => {
    const code = retrieveCode.join("");

    setErrorMessage("");
    setRetrievedText("");

    try {
      const q = query(
        collection(db, "notes"),
        where("code", "==", code)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setErrorMessage("Invalid code. Please check and try again.");
        return;
      }

      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data();

      if (Date.now() > data.expireAt.toDate().getTime()) {
        await deleteDoc(doc(db, "clipboardData", docSnap.id));
        setErrorMessage("This code has expired and is no longer available.");
        return;
      }

      setRetrievedText(data.message);

      if (data.oneTime) {
        await deleteDoc(doc(db, "clipboardData", docSnap.id));
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
      setErrorMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="w-full max-w-auto">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Share Text in Seconds
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
          No login required. Just paste, generate a code, and share.
          Fast, secure, and simple.
        </p>

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

      <div className="bg-[#f5f6f8] dark:bg-gray-900 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${activeTab === "retrieve"
            ? "-translate-x-1/2"
            : "translate-x-0"
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
              className="w-full h-56 resize-none rounded-2xl border-2 border-gray-500 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 p-6 text-[15px] text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-700"
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
                  className="appearance-none h-6 w-6 rounded-lg border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-700 checked:bg-blue-600 checked:border-blue-600 relative cursor-pointer transition-all duration-200 before:content-['✓'] before:absolute before:text-white before:text-sm before:font-bold before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 checked:before:opacity-100"
                />
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
              <div
                className="mt-8 bg-green-200 border border-green-400 rounded-2xl p-6 shadow-lg text-left
              dark:bg-gradient-to-br dark:from-green-900 dark:via-green-800 dark:to-green-900 dark:border-green-600 dark:shadow-[0_0_40px_rgba(34,197,94,0.35)]">
                <h3 className="text-green-800 dark:text-green-400 font-semibold mb-4">
                  Your code is ready!
                </h3>

                <div className="flex items-center justify-between bg-white dark:bg-[#0f172a] rounded-xl px-6 py-4">
                  <span className="text-3xl font-bold tracking-widest text-gray-900 dark:text-white">
                    {generatedCode}
                  </span>

                  <button
                    onClick={copyCode}
                    className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white h-12 w-12 rounded-xl flex items-center justify-center transition shadow-md"
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>

                <p className="text-green-700 dark:text-green-300 mt-4 text-sm">
                  Share this code with anyone to let them access your text.
                </p>
              </div>
            )}
          </div>

          {/* RETRIEVE SECTION */}
          <div className="w-1/2 p-10 flex flex-col items-center justify-start">
            <h2 className="text-[28px] font-semibold text-gray-900 dark:text-white mb-8">
              Enter 6-digit Code
            </h2>

            <div className="flex gap-6 mb-8">
              {retrieveCode.map((digit, i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}

                  onPaste={(e) => {
                    e.preventDefault();
                    const pastedData = e.clipboardData.getData("text").trim();

                    if (!/^\d{6}$/.test(pastedData)) return;

                    const newCode = pastedData.split("");
                    setRetrieveCode(newCode);
                    document.getElementById("code-5")?.focus();
                  }}

                  onChange={(e) => {
                    const value = e.target.value;
                    if (!/^[0-9]?$/.test(value)) return;

                    const newCode = [...retrieveCode];
                    newCode[i] = value;
                    setRetrieveCode(newCode);

                    if (value && i < 5) {
                      document.getElementById(`code-${i + 1}`).focus();
                    }
                  }}

                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !retrieveCode[i] && i > 0) {
                      document.getElementById(`code-${i - 1}`).focus();
                    }
                  }}

                  className="w-16 h-16 text-center text-xl font-semibold rounded-2xl transition-all duration-200
            bg-gray-200 text-gray-800 dark:bg-[#1e293b] dark:text-white dark:border dark:border-[#334155] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]
            focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <div className="flex items-center gap-4">

              {/* GET DATA BUTTON */}
              <button
                onClick={handleRetrieve}
                className="px-10 py-3 rounded-full font-semibold flex items-center gap-2 transition
            bg-gray-400 text-gray-100 hover:bg-gray-500 dark:bg-gray-400/40 dark:text-gray-200 dark:hover:bg-gray-400/60">
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-white dark:text-gray-100"
                />
                Get Data
              </button>

              {/* COPY BUTTON */}
              <button
                onClick={handleCopy}
                className="h-11 w-11 flex items-center justify-center transition
            text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white">
                <FontAwesomeIcon icon={faCopy} size="lg" />
              </button>

            </div>

            {errorMessage && (
              <div className="w-full p-4 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center font-medium animate-pulse">
                {errorMessage}
              </div>
            )}

            {retrievedText && (
              <div className="w-full mt-10">
                {/* Horizontal Line */}
                <div className="border-t border-gray-400 dark:border-gray-600 mb-6"></div>

                {/* Content */}
                <div className="text-gray-800 dark:text-gray-200 text-lg whitespace-pre-wrap break-words">
                  {retrievedText}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  );
}
