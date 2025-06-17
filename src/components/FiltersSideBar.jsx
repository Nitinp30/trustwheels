import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ModelSlider from "./ModelSlider";

const FiltersSidebar = ({
  activeFiltersCount,
  clearAllFilters,
  makes,
  colors,
  selectedMake,
  setSelectedMake,
  selectedColor,
  setSelectedColor,
  priceRange,
  setPriceRange,
  noShippingFeeFilter,
  setNoShippingFeeFilter,
  recentlyAddedFilter,
  setRecentlyAddedFilter,
  brandNewFilter,
  setBrandNewFilter,
  modelMileageRange,
  setModelMileageRange,
  modelYearRange,
  setModelYearRange,
}) => {
  const [openSections, setOpenSections] = useState({
    featured: true,
    price: true,
    make: true,
    color: true,
    year: true,
    mileage: true,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="flex-shrink-0 lg:w-80">
      <div className="sticky p-6 bg-white border shadow-sm rounded-xl top-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("featured")}
            className="flex items-center justify-between w-full mb-3 text-sm font-medium text-gray-900"
          >
            <span className="flex items-center">
              <ChevronDown
                className={`w-4 h-4 mr-1 transform transition-transform duration-300 ${
                  openSections.featured ? "rotate-180" : ""
                }`}
              />
              Featured
            </span>
          </button>
          {openSections.featured && (
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={noShippingFeeFilter}
                  onChange={(e) => setNoShippingFeeFilter(e.target.checked)}
                  className="text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-3 text-sm text-gray-700">No shipping fee</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={recentlyAddedFilter}
                  onChange={(e) => setRecentlyAddedFilter(e.target.checked)}
                  className="text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-3 text-sm text-gray-700">Recently added</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={brandNewFilter}
                  onChange={(e) => setBrandNewFilter(e.target.checked)}
                  className="text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-3 text-sm text-gray-700">Brand new</span>
              </label>
            </div>
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full mb-3 text-sm font-medium text-gray-900"
          >
            <span className="flex items-center">
              <ChevronDown
                className={`w-4 h-4 mr-1 transform transition-transform duration-300 ${
                  openSections.price ? "rotate-180" : ""
                }`}
              />
              Monthly price
            </span>
          </button>
          {openSections.price && (
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0] || ""}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1] === 2000 ? "" : priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("make")}
            className="flex items-center justify-between w-full mb-3 text-sm font-medium text-gray-900"
          >
            <span className="flex items-center">
              <ChevronDown
                className={`w-4 h-4 mr-1 transform transition-transform duration-300 ${
                  openSections.make ? "rotate-180" : ""
                }`}
              />
              Make
            </span>
          </button>
          {openSections.make && (
            <select
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">All Makes</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("color")}
            className="flex items-center justify-between w-full mb-3 text-sm font-medium text-gray-900"
          >
            <span className="flex items-center">
              <ChevronDown
                className={`w-4 h-4 mr-1 transform transition-transform duration-300 ${
                  openSections.color ? "rotate-180" : ""
                }`}
              />
              Color
            </span>
          </button>
          {openSections.color && (
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">All Colors</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("year")}
            className="flex items-center justify-between w-full mb-3 text-sm font-medium text-gray-900"
          >
            <span className="flex items-center">
              <ChevronDown
                className={`w-4 h-4 mr-1 transform transition-transform duration-300 ${
                  openSections.year ? "rotate-180" : ""
                }`}
              />
              Model Year
            </span>
          </button>
          {openSections.year && (
            <ModelSlider
              modelRange={modelYearRange}
              setModelRange={setModelYearRange}
              MIN={2020}
              MAX={2025}
              filter="Year"
            />
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("mileage")}
            className="flex items-center justify-between w-full mb-3 text-sm font-medium text-gray-900"
          >
            <span className="flex items-center">
              <ChevronDown
                className={`w-4 h-4 mr-1 transform transition-transform duration-300 ${
                  openSections.mileage ? "rotate-180" : ""
                }`}
              />
              Mileage
            </span>
          </button>
          {openSections.mileage && (
            <ModelSlider
              modelRange={modelMileageRange}
              setModelRange={setModelMileageRange}
              MIN={1000}
              MAX={80000}
              filter="Mileage"
            />
          )}
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
