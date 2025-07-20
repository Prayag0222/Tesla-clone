import React, { useRef, useState, useEffect } from 'react';

const vehicleItems = [
  {
    name: "Model S",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png",
    alt: "Model S",
    learn: "Learn",
    order: "Order",
  },
  {
    name: "Model 3",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png",
    alt: "Model 3",
    learn: "Learn",
    order: "Order",
  },
  {
    name: "Model X",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y-2-v2.png",
    alt: "Model X",
    learn: "Learn",
    order: "Order",
  },
  {
    name: "Model Y",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X-New.png",
    alt: "Model Y",
    learn: "Learn",
    order: "Order",
  },
  {
    name: "Cybertruck",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
    alt: "Cybertruck",
    learn: "Learn",
    order: "Order",
  },
  {
    name: "Inventory",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Inventory.png",
    alt: "Inventory",
    learn: "Learn",
    order: "Order",
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
      <div className='flex '>
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
                px-2 py-4 flex flex-col items-center rounded-md
                transition-all duration-100 mr-20
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
              <div >
                <ul>
                  <li className='flex gap-3'>
                    <a className='hover:text-gray-700 text-gray-500 underline font-medium ' href="">{item.learn}</a>
                    <a className='hover:text-gray-700 text-gray-500 underline font-medium ' href="">{item.order}</a>
                  </li>
                </ul>
              </div>
              
            </li>
            
          ))}
          <div className="w-[2px] bg-gray-400 mt-[-200px] mb-20 m" style={{ height: 'auto', minHeight: '200px', alignSelf: 'stretch' }} />
          <div className=' h-full -mt-50 ' >
    <ul className='flex flex-col gap-2 '>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Current Offers</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Demo Drive</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Trade-in</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Help Me Choose</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Compare</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Workshops</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Help Me Charge</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Fleet</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Semi</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Roadster</a>
      </li>
      <li>
        <a href="#" className="text-gray-700 transition-all duration-200 underline-offset-4 hover:underline">Federal Tax Credit</a>
      </li>
    </ul>

    </div>
          
        </div>
      </div>
    </li>
  );
};

export default Vehiclesmenu;