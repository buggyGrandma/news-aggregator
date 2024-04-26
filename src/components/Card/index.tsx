import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoMdPaper } from "react-icons/io";
const index = () => {
  const [isExpanded, setExpand] = useState(false);
  return (
    <div className="flex flex-col w-full h-fit max-w-72 rounded-lg bg-gray-200">
      <img
        className="w-full h-auto rounded-t-lg"
        src="https://media.wired.com/photos/6603759fd3a75d0aa76d16ab/191:100/w_1280,c_limit/business_crypto_tracing_forensics_trial.jpg"
        alt="picture"
      />
      <div className="flex flex-col p-2 gap-2">
        <a
          target="/blank"
          href="https://readwrite.com/gbtc-bitcoin-etf-holdings-drop-before-halving/"
          className="text-lg font-black text-indigo-700 hover:underline"
        >
          The Science of Crypto Forensics Survives a Court Battle—for Now
        </a>
        <p className="text-sm font-bold">
          A jury convicted Roman Sterlingov of money laundering this month. His
          defense team says it will appeal, saying the crypto-tracing technique
          at the heart of the case is “pseudoscience.”
        </p>
        {isExpanded && (
          <p className="text-xs text-gray-500 bg-gray-100 rounded-lg p-2">
            On March 12, Russian-Swedish national Roman Sterlingov was found
            guilty of money laundering conspiracy and other violations by a
            federal jury in Washington, DC, for having operated Bitcoin Fog, a
            ser…
          </p>
        )}

        <button
          className="text-xs hover:underline"
          onClick={() => setExpand(!isExpanded)}
        >
          {isExpanded ? "hide " : "show "}details...
        </button>
        <div className="flex gap-2 items-center w-full">
          <div className="rounded-full bg-gray-400 p-1">
            <CiUser className="text-gray-200 text-xl" />
          </div>
          <p className="text-sm">Radek Zielinski</p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="rounded-full bg-gray-400 p-1">
            <IoMdPaper className="text-gray-200 text-xl" />
          </div>
          <p className="text-sm">ReadWrite</p>
        </div>
      </div>
    </div>
  );
};

export default index;
