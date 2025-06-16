import React from "react";
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
  setModelMileageRange,
  modelMileageRange,
  setBrandNewFilter,
  modelYearRange,
  setModelYearRange,
}) => (
  <aside className="lg:w-80 flex-shrink-0">
    <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
          <ChevronDown className="w-4 h-4 mr-1" />
          Featured
        </h4>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={noShippingFeeFilter}
              onChange={(e) => setNoShippingFeeFilter(e.target.checked)}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="ml-3 text-sm text-gray-700">No shipping fee</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={recentlyAddedFilter}
              onChange={(e) => setRecentlyAddedFilter(e.target.checked)}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="ml-3 text-sm text-gray-700">Recently added</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={brandNewFilter}
              onChange={(e) => setBrandNewFilter(e.target.checked)}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="ml-3 text-sm text-gray-700">Brand new</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
          <ChevronDown className="w-4 h-4 mr-1" />
          Monthly price
        </h4>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0] || ""}
            onChange={(e) =>
              setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1] === 2000 ? "" : priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
          <ChevronDown className="w-4 h-4 mr-1" />
          Make
        </h4>
        <select
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">All Makes</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
          <ChevronDown className="w-4 h-4 mr-1" />
          Color
        </h4>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <ModelSlider
          modelRange={modelYearRange}
          setModelRange={setModelYearRange}
          MIN={2020}
          MAX={2025}
          filter={"Year"}
        />
      </div>
      <div className="mb-6">
        <ModelSlider
          modelRange={modelMileageRange}
          setModelRange={setModelMileageRange}
          MIN={1000}
          MAX={80000}
          filter={"Mileage"}
        />
      </div>
    </div>
  </aside>
);

export default FiltersSidebar;
