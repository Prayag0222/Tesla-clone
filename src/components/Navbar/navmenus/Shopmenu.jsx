import React, { useRef, useState } from 'react';

const shopItems = [
  {
    name: "Charging",
    href: "https://shop.tesla.com/category/charging",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png",
    alt: "Charging",
  },
  {
    name: "Vehicle Accessories",
    href: "https://shop.tesla.com/category/vehicle-accessories",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png",
    alt: "Vehicle Accessories",
  },
  {
    name: "Apparel",
    href: "https://shop.tesla.com/category/apparel",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png",
    alt: "Apparel",
  },
  {
    name: "Lifestyle",
    href: "https://shop.tesla.com/category/lifestyle",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png",
    alt: "Lifestyle",
  },
];

const Shopmenu = () => {
  const [dropdown, setDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  // Animate dropdown in/out
  React.useEffect(() => {
    if (dropdown) {
      setShowDropdown(true);
    } else {
      // Wait for animation to finish before removing from DOM
      const timeout = setTimeout(() => setShowDropdown(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [dropdown]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(false);
    }, 300);
  };

  return (
    <li
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="hover:text-gray-600 transition-colors duration-200 font-tesla1 font-normal tracking-wide bg-transparent border-none outline-none cursor-pointer">
        Shop
      </span>
      {/* Dropdown animation */}
      <div className="">
        <div
          className={`
            absolute left-0 right-0 z-50 w-screen 
            px-40 pt-8 pb-6 flex-wrap bg-white shadow-lg mt-2 rounded-md flex justify-center gap-8
            transition-all duration-300 ease-in-out
            ${dropdown ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
          style={{
            visibility: showDropdown ? 'visible' : 'hidden',
          }}
        >
          {shopItems.map((item, idx) => (
            <li
              key={item.name}
              className={`
                group/item
                px-6 py-4 cursor-pointer flex flex-col items-center rounded-md
                transition-all duration-100
                hover:bg-gray-100 hover:scale-105
                ${dropdown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
              style={{
                transitionDelay: dropdown ? `${idx * 60 + 80}ms` : '0ms',
              }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-30 object-contain mb-2 transition-transform duration-100 group-hover/item:scale-100"
                  loading="lazy"
                />
                <span className="block text-center font-tesla1 font-medium text-black mt-2 transition-colors duration-200 group-hover/item:text-gray-700">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Shopmenu;