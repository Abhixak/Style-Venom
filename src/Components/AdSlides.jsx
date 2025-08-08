import React, { useEffect, useState } from "react";

// Men Images
import Men1 from "../assets/MEN/jackets.jpg";
import Men2 from "../assets/MEN/jeans-2.jpg";
import Men3 from "../assets/MEN/jeans.jpg";
import Men4 from "../assets/MEN/suits.jpg";
import Men5 from "../assets/MEN/Tshirt.jpg";

// Women Images
import Women1 from "../assets/Women/onepeice.jpg";
import Women2 from "../assets/Women/shoes.jpg";
import Women3 from "../assets/Women/skirts.jpg";
import Women4 from "../assets/Women/tops.jpg";
import Women5 from "../assets/Women/bikini.jpg";

const AdSlides = () => {
  const menImages = [Men1, Men2, Men3, Men4, Men5];
  const womenImages = [Women1, Women2, Women3, Women4, Women5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % menImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center !mt-3 sm:!mt-5 md:!mt-7 ">
      <div className="w-[95%] h-200 sm:h-250 md:h-90 rounded-md md:gap-5 gap-3 grid md:grid-cols-3 overflow-hidden items-center">
        {/* Men's Section */}
        <div className="bg-blue-200 h-full w-full overflow-hidden rounded-md">
          <img
            src={menImages[currentIndex]}
            alt="Men"
            className="w-full h-full object-cover"
          />
          <a
            href="#"
            className="relative bottom-10 z-10 !p-2 text-[white] bg-[black]"
          >
            MEN's COLLECTION
          </a>
        </div>

        {/* Center Button */}
        <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-yellow-50 h-30 md:h-full flex flex-col justify-center rounded-md items-center gap-2">
          <h2 className="text-xl font-bold text-gray-800 ">SHOP NOW</h2>
          <button className="bg-black text-white !px-6 !py-2 w-[50%] cursor-pointer hover:bg-gray-800 transition">
            Explore
          </button>
        </div>

        {/* Women's Section */}
        <div className=" bg-red-200 h-full w-full overflow-hidden rounded-md">
          <img
            src={womenImages[currentIndex]}
            alt="Women"
            className="w-full h-full object-cover"
          />
          <a
            href="#"
            className="relative bottom-10 z-10 !p-2 text-[white] bg-[black]"
          >
            WOMEN's COLLECTION
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdSlides;
