import React, { useRef, useState, useEffect } from 'react';

const discoverItems = [
  {
    title: "Resources",
    items: [
      "Demo drive",
      "Insurace",
      "American heroes",
      "Learn",
      "Video Guides",
      "Customer Stories",
      "Event",
      "Workshop",
    ],
  },
  {
    title: "Location Services",
    items: [
      "Find Us",
      "Find a collision center",
      "Find a certifies Installer",
    ],
  },
  {
    title: "Company",
    items: [
      "About",
      "Career",
      "Investor Relation",
    ],
  },
];

const Discovermenu = () => {
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
        Discover
      </span>
      <div>
        <div
          className={`
            absolute left-0 right-0 z-50 w-screen min-h-115
            px-56 pt-8 pb-6 flex-wrap bg-white mt-2 rounded-md flex
            transition-all duration-300 ease-in-out
            ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
          style={{
            visibility: showDropdown ? 'visible' : 'hidden',
          }}
        >
          <li className="cursor-default flex justify-between items-start gap-70 w-full">
            {/* Resources Sublist */}
            <div className="resources flex flex-col gap-2">
              <span className="block text-gray-400 text-left font-tesla1 font-light tracking-wide mt-2 mb-1">Resources</span>
              <ul className="flex flex-col items-start mt-3 w-full gap-2">
                {discoverItems[0].items.map((item, idx) => (
                  <li
                    key={item}
                    className={`
                      transition-all duration-150
                      ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}
                    style={{
                      transitionDelay: open ? `${idx * 40 + 80}ms` : '0ms',
                    }}
                  >
                    <a href="#" className="text-left font-tesla1 font-light tracking-wide hover:underline transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Location Services Sublist */}
            <div className="location services flex flex-col gap-2">
              <span className="block text-gray-400 text-left font-tesla1 font-light tracking-wide mt-2 mb-1">Location Services</span>
              <ul className="flex flex-col gap-2 top-0 align-top">
                {discoverItems[1].items.map((item, idx) => (
                  <li
                    key={item}
                    className={`
                      transition-all duration-150
                      ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}
                    style={{
                      transitionDelay: open ? `${idx * 40 + 80}ms` : '0ms',
                    }}
                  >
                    <a href="#" className="text-left font-tesla1 font-light tracking-wide hover:underline transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Sublist */}
            <div className="company flex flex-col gap-2">
              <span className="block text-gray-400 text-left font-tesla1 font-light tracking-wide mt-2 mb-1">Company</span>
              <ul className="flex flex-col gap-2 top-0 align-top">
                {discoverItems[2].items.map((item, idx) => (
                  <li
                    key={item}
                    className={`
                      transition-all duration-150
                      ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}
                    style={{
                      transitionDelay: open ? `${idx * 40 + 80}ms` : '0ms',
                    }}
                  >
                    <a href="#" className="text-left font-tesla1 font-light tracking-wide hover:underline transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </div>
      </div>
    </li>
  );
};

export default Discovermenu;