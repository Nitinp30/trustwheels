import React from "react";
import { MapPin, Search } from "lucide-react";

const SearchBar = ({ searchZip, setSearchZip, handleSearch, error }) => (
  <div className="max-w-md mx-auto">
    <div className="relative">
      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={searchZip}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d{0,5}$/.test(value)) {
            setSearchZip(value);
          }
        }}
        placeholder="Enter ZIP code"
        maxLength={5}
        className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
      />

      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        Search
      </button>
    </div>
    {error && (
      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
        {error}
      </div>
    )}
  </div>
);

export default SearchBar;
