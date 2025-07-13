import React, { useRef, useState, useEffect } from 'react';

const vehicleItems = [
  {
    name: "Model S",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png",
    alt: "Model S",
  },
  {
    name: "Model 3",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png",
    alt: "Model 3",
  },
  {
    name: "Model X",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y-2-v2.png",
    alt: "Model X",
  },
  {
    name: "Model Y",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X-New.png",
    alt: "Model Y",
  },
  {
    name: "Cybertruck",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
    alt: "Cybertruck",
  },
  {
    name: "Inventory",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Inventory.png",
    alt: "Inventory",
  },
];

const Vehiclesmenu = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  // Animate dropdown in/out
  useEffect(() => {
    if (open) {
      setShowDropdown(true);
    } else {
      // Wait for animation to finish before removing from DOM
      const timeout = setTimeout(() => setShowDropdown(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <li
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="hover:text-gray-600 transition-colors duration-200 font-tesla1 bg-transparent border-none outline-none cursor-pointer">
        Vehicle
      </span>
      <div>
        <div
          className={`
            absolute left-0 right-0 z-50 w-screen 
            px-40 pt-8 pb-6 flex-wrap bg-white shadow-lg mt-2 rounded-md flex justify-center gap-8
            transition-all duration-300 ease-in-out
            ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
          style={{
            visibility: showDropdown ? 'visible' : 'hidden',
          }}
        >
          {vehicleItems.map((item, idx) => (
            <li
              key={item.name}
              className={`
                px-6 py-4 cursor-pointer flex flex-col items-center rounded-md
                transition-all duration-100
                hover:bg-gray-100 hover:scale-105
                ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
              style={{
                transitionDelay: open ? `${idx * 60 + 80}ms` : '0ms',
              }}
            >
              <img
                className="h-30 object-contain mb-2 transition-transform duration-100 group-hover/item:scale-100"
                src={item.img}
                alt={item.alt}
                loading="lazy"
              />
              <span className="block text-center font-tesla1 font-medium text-black mt-2 transition-colors duration-200">
                {item.name}
              </span>
            </li>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Vehiclesmenu;