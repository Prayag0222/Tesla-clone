import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

  const NAV_LINKS = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
  "Solar Roof",
  "Solar Panels",
  "Cybertruck",
  "Powerwall",
];

const RIGHT_LINKS = ["Shop", "Account", "Menu"];

const Support = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navRef = useRef(null);
  const [blurStyle, setBlurStyle] = useState({});

  const [rightHoveredIdx, setRightHoveredIdx] = useState(null);
  const rightNavRef = useRef(null);
  const [rightBlurStyle, setRightBlurStyle] = useState({});

  const [activeTab, setActiveTab] = useState("vehicle");

  // Center links blur handlers
  const handleMouseEnter = (idx, e) => {
    const nav = navRef.current;
    if (!nav) return;
    const link = nav.children[idx];
    if (!link) return;
    const { offsetLeft, offsetWidth } = link;
    setBlurStyle({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
    setHoveredIdx(idx);
  };
  const handleMouseLeave = () => {
    setBlurStyle((prev) => ({ ...prev, opacity: 0 }));
    setHoveredIdx(null);
  };

  // Right links blur handlers
  const handleRightMouseEnter = (idx, e) => {
    const nav = rightNavRef.current;
    if (!nav) return;
    const link = nav.children[idx];
    if (!link) return;
    const { offsetLeft, offsetWidth } = link;
    setRightBlurStyle({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
    setRightHoveredIdx(idx);
  };
  const handleRightMouseLeave = () => {
    setRightBlurStyle((prev) => ({ ...prev, opacity: 0 }));
    setRightHoveredIdx(null);
  };

  return (
    <div>
      <div>
        <div className="absolute top-0">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Support-Main-Hero-01-Desktop.jpg"
            alt="Tesla Support Main Hero"
          />
        </div>
        <nav className="relative -top-12">
          <div className="flex items-center justify-between w-full px-8 text-white bg-opacity-80 ">
            {/* Left: Tesla Logo */}
            <div className="flex items-center">
              <svg
                className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon h-3"
                viewBox="0 0 342 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
                ></path>
              </svg>
            </div>
            {/* Center: Model/Energy Links with sliding blur */}
            <div
              className="flex gap-6 text-[15px] font-medium text-white relative"
              style={{ minWidth: 0 }}
            >
              {/* Blur background */}
              <div
                className="absolute top-0 h-full bg-white/20 backdrop-blur-md rounded transition-all duration-300 pointer-events-none z-0"
                style={{
                  ...blurStyle,
                  height: "2.5rem",
                  transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
              <div className="flex  relative z-10" ref={navRef}>
                {NAV_LINKS.map((text, idx) => (
                  <span
                    key={text}
                    className=" cursor-pointer px-3 py-2 rounded"
                    onMouseEnter={(e) => handleMouseEnter(idx, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
            {/* Right: Shop, Account, Menu with sliding blur */}
            <div
              className="flex text-[15px] font-medium text-white relative"
              style={{ minWidth: 0 }}
            >
              {/* Blur background for right links */}
              <div
                className="absolute top-0 h-full bg-white/20 backdrop-blur-md rounded transition-all duration-300 pointer-events-none z-0"
                style={{
                  ...rightBlurStyle,
                  height: "2.5rem",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
              <div className="flex  relative z-10" ref={rightNavRef}>
                {RIGHT_LINKS.map((text, idx) => (
                  <span
                    key={text}
                    className="hover:underline cursor-pointer px-3 py-2 rounded"
                    onMouseEnter={(e) => handleRightMouseEnter(idx, e)}
                    onMouseLeave={handleRightMouseLeave}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400">
                {/* Search Icon SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </span>
              <input
                className="bg-gray-100 w-80 p-2 pl-10 rounded outline-none focus:outline-none"
                type="text"
                placeholder="Search support "
                style={{ boxShadow: "none", border: "none" }}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* 1st part of trending topics  */}

      <div className="flex justify-center">
        <div className="w-[1000px] p-10 mt-20">
          <div>
            <div className="flex flex-col justify-start">
              <h1 className="text-4xl font-medium">Trending Topics</h1>
            </div>
            <div className="mt-6">
              <ul className="flex font-medium gap-8">
                <li className="hover:underline hover:text-sky-500 cursor-pointer transition-colors">
                  Add a Vehicle
                </li>
                <li className="hover:underline hover:text-sky-500 cursor-pointer transition-colors">
                  Supercharging Credits
                </li>
                <li className="hover:underline hover:text-sky-500 cursor-pointer transition-colors">
                  Leasing
                </li>
                <li className="hover:underline hover:text-sky-500 cursor-pointer transition-colors">
                  IRA Clean Vehicle Report
                </li>
                <li className="hover:underline hover:text-sky-500 cursor-pointer transition-colors">
                  Cost of Solar
                </li>
                <li className="hover:underline hover:text-sky-500 cursor-pointer transition-colors">
                  Troubleshoot Solar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Button part (Vehicle and Energy) */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("vehicle")}
            className={`px-8 py-3 text-3xl w-[600px] font-semibold transition-all duration-200 border-b-2 focus:outline-none
              ${
                activeTab === "vehicle"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-500"
              }
            `}
          >
            Vehicles
          </button>
          <button
            onClick={() => setActiveTab("energy")}
            className={`px-8 py-3 text-3xl w-[600px] font-semibold transition-all duration-200 border-b-2 focus:outline-none
              ${
                activeTab === "energy"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-500"
              }
            `}
          >
            Energy
          </button>
        </div>
      </div>
      {/* Details Section with Framer Motion */}
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-6xl  bg-white  rounded-lg p-6 relative overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === "vehicle" && (
              <motion.div
                key="vehicle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="w-full text-center"
              >
                <div className="flex justify-center items-start gap-20">
                  <div>
                    <h1 className="text-3xl mb-10 font-medium">Features and Charging</h1>
                    <ul className="flex flex-col font-medium text-gray-500 gap-4 items-start">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Autopilot
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Software Updates
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Upgrades
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Supercharging
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Home Charging
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Security Features
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                  <h1 className="text-3xl mb-10 font-medium" >Service and Collision Repair</h1>
                    <ul className="flex flex-col font-medium text-gray-500 gap-4 items-start" >
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Do It Yourself Guides
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Schedule a Service Visit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Find a Collision Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Roadside Assistance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Vehicle Warranty
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Tire Care and Repair
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Service Portal
                        </a>
                      </li>
                      </ul>
                  </div>
                  <div>
                  <h1  className="text-3xl mb-10 font-medium">Tesla Account</h1>
                    <ul className="flex flex-col font-medium text-gray-500 gap-4 items-start">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Add a Vehicle
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Account Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Tesla App
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Refer and Earn
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Financing & Leasing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "energy" && (
              <motion.div
                key="energy"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="w-full text-center"
              >
               <div className="flex justify-center items-start gap-20">
                  <div className="flex flex-col justify-center items-start ">
                    <h1 className="text-3xl mb-10 font-medium">Powerwall</h1>
                    <ul className="flex flex-col font-medium text-gray-700 gap-4 items-start">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          How Powerwall Works
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          System Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Prepare for Installation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Tesla App for Energy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Get Help and Schedule Service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Documents
                        </a>
                      </li>
                      <li className="font-medium underline underline-offset-2 text-gray-950 decoration-gray-500 mt-5">Learn More</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center items-start ">
                  <h1 className="text-3xl mb-10 font-medium" >Solar Roof</h1>
                    <ul className="flex flex-col font-medium text-gray-700 gap-4 items-start" >
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Why Solar Roof
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Installation Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Installation Process
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Troubleshooting Your System
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Frequently Asked Questions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Monitoring
                        </a>
                      </li>
                      <li className="font-medium underline underline-offset-2 text-gray-950 decoration-gray-500 mt-5">Learn More</li>
                      </ul>
                  </div>
                  <div className="flex flex-col justify-center items-start ">
                  <h1  className="text-3xl mb-10 font-medium">Solar Panels </h1>
                    <ul className="flex flex-col font-medium text-gray-700 gap-4   items-start">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Why Tesla Solar
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Solar Panel Sizing and Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Turn On Your System
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Troubleshooting Your System
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-sky-500 hover:underline hover:decoration-sky-500"
                        >
                          Transferring Ownership of Your Solar System
                        </a>
                      </li>
                      <li className="font-medium underline underline-offset-2 text-gray-950 decoration-gray-500 mt-5">Learn More</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full  py-5 px-10 flex justify-center items-center">
        <div className=" flex items-center">
          <img className="h-[450px] w-[500px] object-cover" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/main-support-landing-tesla-app" alt="" />
          <div  className="flex flex-col gap-8 ml-10 ">
            <h1 className="text-3xl font-medium mb-8 ">
              Video Guides
            </h1>
            <span className="font-medium text-sm text-gray-500">Explore interactive videos designed to give you a more in-depth look at your vehicle and its features.</span>
            <span className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer">Explore Interactive Videos</span>
            <span className="font-medium text-sm text-gray-500">Watch the Meet Your Tesla video series to learn the fundamentals of your Tesla vehicle.</span>
            <a className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer" href="Watch Series">Watch Series</a>
          </div>
        </div>
      </div>
      <div className="w-full py-5 px-10 flex justify-center items-center">
        <div className="flex items-center flex-row-reverse">
          <img
            className="h-[450px] w-[500px] object-cover"
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/support-getting-started.jpg"
            alt=""
          />
          <div className="flex flex-col items-end gap-8 mr-10">
            <h1 className="text-3xl font-medium mb-8">
              Getting Started
            </h1>
            <span className="font-medium text-sm text-gray-500">
            Learn about your Tesla ownership experience – including designing and taking delivery of your vehicle.
            </span>
            <ul className="flex flex-col gap-2 items-end">
              <li>
                <a
                  href="#"
                  className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer"
                >
                  Ordering a New Vehicle
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer"
                >
                  Ordering a Used Vehicle
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer"
                >
                  Prepare for Delivery Day
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer"
                >
                  Taking Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer"
                >
                  After Taking Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm hover:text-sky-500 underline underline-offset-2 cursor-pointer"
                >
                  Find Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-80 w-full bg-gray-200 flex flex-col px-100 justify-center items-center  gap-5">
            <h1 className="text-3xl font-medium">Can’t find what you are looking for?</h1>
            <span>You can now get answers to questions about your vehicle, account and more in the Tesla app.
            Select ‘Need More Help’ which can be found within the 'Help' menu under your profile.</span>
            <span>If you still can't find what you're looking for, contact customer support directly.</span>
            <button className="border text-sm font-medium bg-gray-300 py-2 px-5 rounded ">Contact us </button>
      </div>
    </div>
  );
};

export default Support;
