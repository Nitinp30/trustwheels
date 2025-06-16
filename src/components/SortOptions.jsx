import React from "react";

const SortOptions = ({ sortBy, setSortBy }) => (
  <div className="flex items-center gap-4">
    <span className="text-sm text-gray-600">Sort by</span>
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
    >
      <option value="Popularity">Popularity</option>
      <option value="Price: Low to High">Price: Low to High</option>
      <option value="Price: High to Low">Price: High to Low</option>
      <option value="Year: Newest First">Year: Newest First</option>
      <option value="Year: Oldest First">Year: Oldest First</option>
      <option value="Mileage: Low to High">Mileage: Low to High</option>
      <option value="Mileage: High to Low">Mileage: High to Low</option>
    </select>
  </div>
);

export default SortOptions;
