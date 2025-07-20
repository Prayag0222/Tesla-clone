import { useState } from "react";
import { motion } from "framer-motion";

export default function Slides() {
  const cards = [
    { 
      id: 1, 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Solar-Panels-Desktop.png",
      x: "0%",
      width: "71%",
      model:"Solar Panel",
      lease:"Use Solar Energy to Power Your Home and Charge Your Tesla",
      button1:"",
      button2:"",
    },
    { 
      id: 2, 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Powerwall-Desktop.png",
      x: "0%",
      width: "65%",
      model:"Powerwall",
      lease:"Keep Your Lights On During Outages",
      button1:"",
      button2:"",
    },
    { 
      id: 3, 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Solar-Roof-Desktop.png",
      x: "0%",
      width: "65%",
      model:"Solar Roof",
      lease:"Generate Clean Energy With Your Roof",
      button1:"",
      button2:"",
    },
    { 
      id: 4, 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Megapack-Desktop.jpg",
      x: "0%",
      width: "65%",
      model:"Megapack",
      lease:"Massive Batteries for Massive Energy Support",
      button1:"",
      button2:"",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Dots handler: set activeIndex directly
  const selectImage = (idx) => {
    if (activeIndex === idx) return;
    setActiveIndex(idx);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* Buttons */}
      <button
        onClick={goPrev}
        className="absolute sm:block md:hidden lg:hidden xl:hidden left-4 z-50 text-black text-4xl hover:scale-110 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute sm:block md:hidden lg:hidden xl:hidden right-4 z-50 text-black text-4xl hover:scale-110 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  bg-gray-200 rounded rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
      </button>

      {/* Slides container with fixed height and relative positioning */}
      <div className="relative w-full p-2 sm:p-4 md:p-8 lg:p-10 bg-transparent" style={{ height: '500px' }}>
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === activeIndex - 1;
          const isNext = index === activeIndex + 1;

          let x = "0%";
          let scale = 1;
          let zIndex = 0;
          let opacity = 1;

          if (isActive) {
            x = `${card.x}`;
            scale = 1;
            zIndex = 10;
            opacity = 1;
          } else if (isPrev) {
            x = "-105%";
            zIndex = 5;
          } else if (isNext) {
            x = "105%";
            zIndex = 5;
          } else if (index < activeIndex) {
            x = "-200%";
          } else {
            x = "200%";
          }

          return (
            <motion.div
              key={card.id}
              className="absolute flex-col justify-center align-center  h-142 bg-black sm:w-3/4 md:w-1/2 lg:w-270 object-cover rounded-xl shadow-lg border border-white cursor-pointer ml-10 mt-30 overflow-hidden w-dvw "
              animate={{ x, scale, opacity, zIndex }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={card.image}
                className="h-full w-full rounded-xl  shadow-black shadow "
                loading="lazy"
                alt={card.name}
              />
              <div className="">
                <div className="absolute top-5  text-white ">
                <h1 className=" text-white font-bold lg:text-xl sm:text-sm p-4 ml-7">{card.title}</h1>
                </div>
                  <div className="absolute bottom-6 text-left ml-10 p-3 h-50 w-200">
                   
                    <h1 className="   text-white font-bold lg:text-6xl md:text-4xl sm:text-2xl">{card.model}</h1>
                    <span className="absolute text-white flex lg:text-2xl mt-5 md:text-xl sm:text-sm ">{card.lease}</span>
                    <div className=" absolute flex gap-3 bottom-2 max-h-8   lg:w-80 md:w-60 sm:w-40 mt-20">
                      <button className="text-white bg-blue-400 lg:text-md sm:text-sm w-full lg:font-medium md:font-medium sm:font-bold py-1 rounded cursor-pointer ">Order Now</button>
                      <button className="text-black bg-white lg:text-md sm:text-sm lg:font-medium md:font-medium sm:font-bold  w-full py-1 rounded cursor-pointer  ">Learn more</button>
                    </div>
                  
                  </div>
              </div>
              {/* Dots navigation */}
              <div className="absolute left-0 right-0 flex justify-center items-center gap-2">
                {cards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectImage(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-200 border-2 border-white ${
                      activeIndex === idx ? 'bg-white' : 'bg-white/40'
                    }`}
                    style={{
                      outline: activeIndex === idx ? '2px solid #0ea5e9' : 'none'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
