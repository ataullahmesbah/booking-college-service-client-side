import React from "react";
import banner1 from "../../images/banner/banner1.png"; // Ensure the correct image path

const Banner = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 md:p-8 lg:p-12 bg-gradient-to-r from-blue-400 to-emerald-400 pt-16"

    >
      {/* Left side */}
      <div className="flex flex-col justify-center lg:px-28 text-white">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-100 lg:mb-8 ">
          Welcome to Scholars For Search
        </h1>
        <p className="text-lg lg:text-xl mt-4">
          Our college booking admission services offer personalized guidance and support
          throughout your college application journey. With our experienced advisors
          and seamless online platform, let us simplify the process and open doors
          to your dream college.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Admission
          </button>
          <button className="bg-lime-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="flex justify-center items-center">
        {/* Check if the image is loaded correctly */}
        <img
          className="w-full lg:w-3/4 rounded-lg"
          src={banner1}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
