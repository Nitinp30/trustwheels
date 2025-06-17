import SearchBar from "./SearchBar";

const HeroSection = ({ searchZip, setSearchZip, handleSearch, error }) => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Find your perfect Vehicle
        </h2>
        <p className="text-xl text-gray-600">
          Search thousands of available vehicles in your area
        </p>
      </div>
      <SearchBar
        searchZip={searchZip}
        setSearchZip={setSearchZip}
        handleSearch={handleSearch}
        error={error}
      />
    </div>
  </div>
);

export default HeroSection;
