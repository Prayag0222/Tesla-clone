import React, { useState, useEffect, useRef } from 'react';

const images = [
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-FTC-Desktop.png",
    alt: "Tesla Promo 1",
    text: "$7,500 Federal Tax Credit Ending",
    text1: "Take delivery by September 30th, 2025",
    button: "Order Model 3",
    button2: "Order Model Y",
    style: "bg-sky-600 text-white py-2 px-15 rounded m-1 hover:bg-sky-700 transition-all duration-300 ease-in-out cursor-pointer",
    style2: "bg-sky-600 text-white py-2 px-15 rounded m-1 hover:bg-sky-700 transition-all duration-300 ease-in-out cursor-pointer"
  },
  {
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promotional-Carousel-Made-in-America-Desktop.png",
    alt: "Tesla Promo 2",
    text: "Made in America",
    text1: "Free Red,White and Blue Paint",
    button: "Order Model X",
    button2: "View inventory",
    style: "bg-sky-600 text-white py-2 px-15 rounded m-1 hover:bg-sky-700 transition-all duration-300 ease-in-out cursor-pointer",
    style2: "bg-white text-black py-2 px-15 rounded m-1 hover:bg-sky-700 transition-all duration-300 ease-in-out cursor-pointer"
  }
];

// Make fade duration very fast for a sudden but smooth transition
const FADE_DURATION = 120; // ms

const Firstpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Helper functions for navigation
  const goToPrev = () => {
    triggerFade(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    });
    resetInterval();
  };

  const goToNext = () => {
    triggerFade(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    });
    resetInterval();
  };

  // Reset interval when user manually changes image
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      triggerFade(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      });
    }, 5000);
  };

  // Fade transition logic
  const triggerFade = (changeImageFn) => {
    setFade(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      changeImageFn();
      setFade(true);
    }, FADE_DURATION);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      triggerFade(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      });
    }, 5000);
    return () => {
      clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, []);

  // Manual select via dots
  const selectImage = (idx) => {
    if (idx === currentIndex) return;
    triggerFade(() => {
      setCurrentIndex(idx);
    });
    resetInterval();
  };

  // Button click handlers for each image
  const handleButtonClick = (idx) => {
    // Already targeted buttons
    if (idx === 0) {
      window.open("https://www.tesla.com/model3/design#overview", "_blank", "noopener,noreferrer");
    } else if (idx === 1) {
      window.open("https://www.tesla.com/modelx/design#overview", "_blank", "noopener,noreferrer");
    } else {
      // fallback: go to main tesla site
      window.open("https://www.tesla.com/", "_blank", "noopener,noreferrer");
    }
  };

  const handleButton2Click = (idx) => {
    // Already targeted buttons
    if (idx === 0) {
      window.open("https://www.tesla.com/inventory/new/m3", "_blank", "noopener,noreferrer");
    } else if (idx === 1) {
      window.open("https://www.tesla.com/inventory/new/mx", "_blank", "noopener,noreferrer");
    } else {
      // fallback: go to main tesla site
      window.open("https://www.tesla.com/", "_blank", "noopener,noreferrer");
    }
  };

  // Make the dots also redirect to the real Tesla homepage if clicked on the current dot (no-op in original)
  const handleDotClick = (idx) => {
    if (idx === currentIndex) {
      window.open("https://www.tesla.com/", "_blank", "noopener,noreferrer");
      return;
    }
    selectImage(idx);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto">
        <div className="w-full aspect-[16/7] relative">
          {/* Left Arrow Button */}
          <button
            onClick={goToPrev}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black rounded w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-all duration-200 shadow-lg focus:outline-none"
            style={{ backdropFilter: 'blur(2px)' }}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right Arrow Button */}
          <button
            onClick={goToNext}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200  text-black rounded p-3 transition-all duration-200 shadow-lg focus:outline-none"
            style={{ backdropFilter: 'blur(2px)' }}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <img
            className={`w-full h-122 object-cover transition-opacity duration-150 ${fade ? 'opacity-100' : 'opacity-0'}`}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            draggable={false}
            style={{
              transition: `opacity ${FADE_DURATION}ms ease`
            }}
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center bg-black/30 md:bg-transparent">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 md:mt-20 font-bold text-white mb-2">
              {images[currentIndex].text}
            </h1>
            <span
              className="text-base sm:text-lg md:text-xl font-medium underline underline-offset-4 decoration-2 text-white px-2 md:px-4 py-1 rounded"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://www.tesla.com/", "_blank", "noopener,noreferrer")}
              title="Go to Tesla.com"
            >
              {images[currentIndex].text1}
            </span>
            <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-2 md:gap-4">
              <button
                onClick={() => handleButtonClick(currentIndex)}
                aria-label={images[currentIndex].button}
                className={images[currentIndex].style}
                type="button"
              >
                {images[currentIndex].button}
              </button>
              <button
                onClick={() => handleButton2Click(currentIndex)}
                aria-label={images[currentIndex].button2}
                className={images[currentIndex].style2}
                type="button"
              >
                {images[currentIndex].button2}
              </button>
            </div>
            {/* Dots for manual image selection */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-200 border-2 border-white ${
                    currentIndex === idx ? 'bg-white' : 'bg-white/40'
                  }`}
                  style={{
                    outline: currentIndex === idx ? '2px solid #0ea5e9' : 'none',
                    cursor: "pointer"
                  }}
                  type="button"
                  title={currentIndex === idx ? "Go to Tesla.com" : `Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;