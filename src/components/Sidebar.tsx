import React, { useState } from "react";
import "../App.css";

import {
  FaHome,
  FaExchangeAlt,
  FaTractor,
  FaInfoCircle,
  FaEllipsisH,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { BsFlower2 } from "react-icons/bs";
import pic2 from "../photos/pic2.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle for sidebar visibility
  const [tradeOpen, setTradeOpen] = useState(false);
  const [farmOpen, setFarmOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <div className="flex ">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-500 text-white rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
      
      className={`fixed top-0 left-0 w-64 h-screen bg-purple-900 text-white flex flex-col py-4 px-4 border-r-4 border-green-500 z-40 
        transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static overflow-y-auto overscroll-contain`}
      
      
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-10">
          <img
            src="https://atropine.io/static/media/logo.33181fc782c8863920c5.png"
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <a
            href="/"
            className="flex items-center space-x-3 px-4 py-2 text-lg bg-purple-800 rounded hover:bg-purple-700 transition duration-300"
          >
            <FaHome />
            <span>Home</span>
          </a>

          {/* Trade Section with Dropdown */}
          <div>
            <button
              onClick={() => setTradeOpen(!tradeOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-lg bg-purple-800 rounded hover:bg-purple-700 transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <FaExchangeAlt />
                <span>Trade</span>
              </div>
              <span>{tradeOpen ? "▲" : "▼"}</span>
            </button>
            {tradeOpen && (
              <ul className="mt-1 space-y-1 bg-purple-700 rounded px-4 py-2">
                <li>
                  <a
                    href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0xE846884430D527168B4EAaC80Af9268515D2f0CC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400"
                  >
                    Exchange
                  </a>
                </li>
                <li>
                  <a
                    href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/add/V1/0xE846884430D527168B4EAaC80Af9268515D2f0CC/0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400"
                  >
                    Liquidity
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Farms Section */}
          <div>
            <button
              onClick={() => setFarmOpen(!farmOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-lg bg-purple-800 rounded hover:bg-purple-700 transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <FaTractor />
                <span>Farms</span>
              </div>
              <span>{farmOpen ? "▲" : "▼"}</span>
            </button>
            {farmOpen && (
              <ul className="mt-1 space-y-1 bg-purple-700 rounded px-4 py-2">
                <li>
                  <a href="#" className="block hover:text-green-400">
                    Farms
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Info Section */}
          <div>
            <button
              onClick={() => setInfoOpen(!infoOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-lg bg-purple-800 rounded hover:bg-purple-700 transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <FaInfoCircle />
                <span>Info</span>
              </div>
              <span>{infoOpen ? "▲" : "▼"}</span>
            </button>
            {infoOpen && (
              <ul className="mt-1 space-y-1 bg-purple-700 rounded px-4 py-2">
                <li>
                  <a
                    href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/info/token/0xe846884430d527168b4eaac80af9268515d2f0cc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400"
                  >
                    Pulsex
                  </a>
                </li>
                <li>
                  <a
                    href="https://dexscreener.com/pulsechain/0x0e4b3d3141608ebc730ee225666fd97c833d553e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400"
                  >
                    DexScreener
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* More Section */}
          <div>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-lg bg-purple-800 rounded hover:bg-purple-700 transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <FaEllipsisH />
                <span>More</span>
              </div>
              <span>{moreOpen ? "▲" : "▼"}</span>
            </button>
            {moreOpen && (
              <ul className="mt-1 space-y-1 bg-purple-700 rounded px-4 py-2">
                <li>
                  <a
                    href="https://atropine.gitbook.io/atropine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400"
                  >
                    Gitbook
                  </a>
                </li>
                <li>
                  <a
                    href="https://atropine.gitbook.io/atropine/specs/security/audits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Footer Section */}
        <div className="mt-auto">
          <p className="text-sm text-gray-400 mt-8">Audited by:</p>
          <div className="flex items-center justify-center">
            <img src={pic2} alt="Auditor Logo" className="h-full w-full" />
          </div>
          <img
            src="https://atropine.io/static/media/tech-rate.5f5b2d0902dbdef96856.png"
            alt="Tech Rate Logo"
            className="mt-4"
          />

          {/* Price and Social Icons */}
          <div className="mt-8 border-t border-green-500 pt-4">
            <div className="flex items-center justify-around">
              <a
                href="https://dexscreener.com/pulsechain/0x0e4b3d3141608ebc730ee225666fd97c833d553e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition duration-300"
              >
                <BsFlower2 className="text-2xl" />
                <p className="text-white text-sm font-bold">$0.000018</p>
              </a>
              <a
                href="https://telegram.org"
                className="text-green-500 text-2xl hover:text-green-400 transition duration-300"
              >
                <FaTelegram />
              </a>
              <a
                href="https://twitter.com"
                className="text-green-500 text-2xl hover:text-green-400 transition duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
