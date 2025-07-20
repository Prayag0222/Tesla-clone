import React, { useRef, useState, useEffect } from 'react';

const chargingItems = [
  {
    name: "Home Charging",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png",
    alt: "Home Charging",
  },
  {
    name: "Supercharging",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging.png",
    alt: "Supercharging",
  },
  {
    name: "Charging for business",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging-for-Business.png",
    alt: "Destination Charging",
  },
];

const Chargingmenu = () => {
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
        Charging
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
          {chargingItems.map((item, idx) => (
            <li
              key={item.name}
              className={`
                px-6 py-4 cursor-pointer flex flex-col items-center rounded-md
                transition-all duration-100
             
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
          <div className="w-[2px] bg-gray-400 mr-2" style={{ minHeight: '200px', alignSelf: 'stretch' }} />
          <ul className=' flex flex-col gap-5'>
            <li>
              <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Help Me Charge</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Charging Calculator</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Charging With NACS</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Supercharger Voting</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Host a Supercharger</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Chargingmenu;