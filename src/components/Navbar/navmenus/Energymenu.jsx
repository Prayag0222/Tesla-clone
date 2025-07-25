import React, { useRef, useState, useEffect } from 'react';

const energyItems = [
  {
    name: "Solar Panels",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png",
    alt: "Solar Panels",
  },
  {
    name: "Solar Roof",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png",
    alt: "Solar Roof",
  },
  {
    name: "Powerwall",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png",
    alt: "Powerwall",
  },
  {
    name: "Megapack",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png",
    alt: "Megapack",
  },
];

const Energymenu = () => {
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
      <span className="hover:text-gray-600 transition-colors duration-200 font-tesla1 font-normal tracking-wide bg-transparent border-none outline-none cursor-pointer">
        Energy
      </span>
      <div>
        <div
          className={`
            absolute left-0 right-0 z-50 w-screen 
            px-40  pt-8 pb-6 flex-wrap bg-white shadow-lg mt-2 rounded-md flex justify-center gap-8
            transition-all duration-300 ease-in-out
            ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
          style={{
            visibility: showDropdown ? 'visible' : 'hidden',
          }}
        >
          {energyItems.map((item, idx) => (
            <li
              key={item.name}
              className={`
                group/item
                px-6 py-4 cursor-pointer flex flex-col items-center rounded-md
                transition-all duration-150
     
                
                ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
              style={{
                transitionDelay: open ? `${idx * 60 + 80}ms` : '0ms',
              }}
            >
              <img
                className="h-25 object-contain mb-2 transition-transform duration-100 group-hover/item:scale-100"
                src={item.img}
                alt={item.alt}
                loading="lazy"
              />
              <span className="block text-center font-tesla1 font-medium text-black mt-2 transition-colors duration-200 group-hover/item:text-gray-700">
                {item.name}
              </span>
              <ul className='flex underline-2 gap-4 '>
                <li>
                  <a className='hover:text-gray-700 text-gray-500 underline font-medium' href="#">{item.learn || "Learn"}</a>
                </li>
                <li>
                  <a className='hover:text-gray-700 text-gray-500 underline font-medium' href="#">{item.order || "Order"}</a>
                </li>
              </ul>
            </li>
          ))}
          <div className='w-[2px] bg-gray-500 '>
            <ul className='flex flex-col w-50 pl-5 gap-3'>
              <li>
                <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Schedule a Consultation</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Why Solar</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Incentives</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Partner with Tesla</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Commercial</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Utilities</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </li>
  );
};

export default Energymenu;