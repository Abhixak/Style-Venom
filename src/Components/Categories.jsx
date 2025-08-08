import React, { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";

const Categories = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMain, setSelectedMain] = useState("");
  const [selectedStuff, setSelectedStuff] = useState("All Season"); // Default selection
  const [price, setPrice] = useState(500); // Price in INR

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    setSelectedMain("");
    setSelectedStuff("All Season");
    setPrice(500);
  };

  // Map season to categories (example mapping)
  const categoriesBySeason = {
    Summer: ["Topwear", "Jeans", "Shoes", "Bags", "Accessories"],
    Winter: [
      "Topwear",
      "Jeans",
      "Jackets",
      "Bags",
      "Sweaters",
      "Shoes",
      "Accessories",
    ],
    "All Season": [
      "Topwear",
      "Jeans",
      "Jackets",
      "Shoes",
      "Bags",
      "Sweaters",
      "Accessories",
    ],
  };

  // Get categories to show based on selectedStuff
  const displayedCategories = categoriesBySeason[selectedStuff] || [];

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gradient-to-br from-[#d4f1ff] to-[#fef6e4] w-[95%] rounded-xl shadow-lg">
        <section className="!p-5">
          {/* Title */}
          <p className="font-bold text-xl text-gray-800 !mb-3 tracking-wide">
            Make a Look
          </p>

          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap !mb-4">
            <button
              className={`${
                selectedMain === "Men"
                  ? "bg-black text-white"
                  : "bg-blue-400 text-white"
              } !px-4 !py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300`}
              onClick={() => setSelectedMain("Men")}
            >
              Men
            </button>
            <button
              className={`${
                selectedMain === "Women"
                  ? "bg-black text-white"
                  : "bg-pink-400 text-white"
              } !px-4 !py-2 rounded-full shadow-md hover:bg-purple-600 transition-all duration-300`}
              onClick={() => setSelectedMain("Women")}
            >
              Women
            </button>
            <button
              onClick={toggleFilters}
              className="bg-gray-600 text-white !px-4 !py-2 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <FiFilter size={18} />
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white !p-4 rounded-lg shadow-lg border border-gray-100 !mb-4 animate-fadeIn">
              {/* Price Filter */}
              <div className="!mb-5">
                <label className="font-semibold text-gray-700 block mb-2">
                  Under <span className="text-blue-600">₹{price}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Main Category */}
              <div className="!mb-5">
                <p className="font-semibold text-gray-700 !mb-3">
                  Select Main Category
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Men", "Women"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedMain(cat)}
                      className={`border !px-4 !py-2 rounded-full transition-all duration-300 font-medium ${
                        selectedMain === cat
                          ? "bg-blue-500 text-white border-blue-500"
                          : "hover:bg-gray-100 border-gray-300 text-gray-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stuff type */}
              <div>
                <p className="font-semibold text-gray-700 !mb-3">
                  Select Stuff Type
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Summer", "Winter", "All Season"].map((stuff) => (
                    <button
                      key={stuff}
                      onClick={() => setSelectedStuff(stuff)}
                      className={`border !px-4 !py-2 rounded-full transition-all duration-300 font-medium ${
                        selectedStuff === stuff
                          ? "bg-blue-500 text-white border-blue-500"
                          : "hover:bg-gray-100 border-gray-300 text-gray-700"
                      }`}
                    >
                      {stuff}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Scrollable Categories */}
          <div className="flex gap-4 lg:justify-center overflow-x-auto items-center !pb-2">
            {displayedCategories.map((cat, index) => (
              <div
                key={index}
                className="min-w-[120px] bg-white shadow-md !p-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-gray-700 font-medium"
              >
                {cat}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
