import Image from "next/image";
import { useEffect, useState } from "react";
import { BannerData } from "./bannerdata";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleImageToggle(currentIndex + 1);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  function handleImageToggle(index) {
    const length = BannerData.length;
    if (index === length) setCurrentIndex(0);
    else if (index === -1) setCurrentIndex(length - 1);
    else setCurrentIndex(index);
  }

  return (
    <div id="default-carousel" className="relative w-full p-2.5" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[600px]">
        <div className="duration-100 transition-all w-full h-full" data-carousel-item>
          <Image
            loading="eager"
            className="w-full h-full object-fill"
            priority={true}
            alt={BannerData[currentIndex].name}
            src={BannerData[currentIndex].url}
          />
        </div>
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {BannerData.map((item, i) => (
          <button
            key={item.name}
            onClick={() => handleImageToggle(i)}
            type="button"
            className={`w-3 h-3 rounded-full  ${
              currentIndex === i ? "bg-[#112467]" : "bg-[#F7BE38]"
            } transition-all duration-100`}
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="5"
          ></button>
        ))}
      </div>

      <button
        onClick={() => handleImageToggle(currentIndex - 1)}
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group  focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-5 h-5 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-1 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-2 h-2 md:w-4 md:h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        onClick={() => handleImageToggle(currentIndex + 1)}
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-5 h-5 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-1 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-2 h-2 md:w-4 md:h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
