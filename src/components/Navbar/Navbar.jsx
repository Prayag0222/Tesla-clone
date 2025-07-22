
import React, { useState, useRef } from "react";
import Teslalogo from "/src/assets/Tesla_logo.png";
import { CircleQuestionMark } from "lucide-react";
import { Globe } from "lucide-react";
import { CircleUser } from "lucide-react";
import Vehiclesmenu from "./navmenus/Vehiclesmenu";
import Energymenu from "./navmenus/Energymenu";
import Chargingmenu from "./navmenus/Chargingmenu";
import Discovermenu from "./navmenus/Discovermenu";
import Shopmenu from "./navmenus/Shopmenu";
import { Link } from "react-router-dom"; // <-- Add this import



const Navbar = ({ transparent }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  // Only one submenu open at a time
  const handleMenuEnter = (menuName) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu((prev) => (prev === menuName ? prev : menuName));
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${transparent ? 'bg-transparent' : 'bg-white bg-opacity-80 backdrop-blur-md'}`}>
      <nav>
        <div className={`navbar-container ${transparent ? 'bg-transparent' : 'bg-white'} h-15 rounded-2xl flex justify-between items-center p-3`}>
          <svg
            className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon h-3 pl-10"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
            ></path>
          </svg>

          <div>
            <ul className="hidden md:flex gap-6 text-[15px] pr-20 font-medium text-black">
              {/* Vehicles */}
              <div
                onMouseEnter={() => handleMenuEnter("vehicles")}
                onMouseLeave={handleMenuLeave}
                // Removed position: relative to allow submenu to cover the whole screen
                style={{ zIndex: activeMenu === "vehicles" ? 30 : 1 }}
              >
                <Vehiclesmenu open={activeMenu === "vehicles"} />
              </div>
              {/* Energy */}
              <div
                onMouseEnter={() => handleMenuEnter("energy")}
                onMouseLeave={handleMenuLeave}
                style={{ zIndex: activeMenu === "energy" ? 30 : 1 }}
              >
                <Energymenu open={activeMenu === "energy"} />
              </div>
              {/* Charging */}
              <div
                onMouseEnter={() => handleMenuEnter("charging")}
                onMouseLeave={handleMenuLeave}
                style={{ zIndex: activeMenu === "charging" ? 30 : 1 }}
              >
                <Chargingmenu open={activeMenu === "charging"} />
              </div>
              {/* Discover */}
              <div
                onMouseEnter={() => handleMenuEnter("discover")}
                onMouseLeave={handleMenuLeave}
                style={{ zIndex: activeMenu === "discover" ? 30 : 1 }}
              >
                <Discovermenu open={activeMenu === "discover"} />
              </div>
              {/* Shop */}
              <div
                onMouseEnter={() => handleMenuEnter("shop")}
                onMouseLeave={handleMenuLeave}
                style={{ zIndex: activeMenu === "shop" ? 30 : 1 }}
              >
                <Shopmenu open={activeMenu === "shop"} />
              </div>
            </ul>
          </div>
          <div className="flex justify-around items-center h-1 gap-3 pr-10">
            <Link to="/support">
              <CircleQuestionMark />
            </Link>
            <Globe />
            <Link to="/account">
              <CircleUser />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
