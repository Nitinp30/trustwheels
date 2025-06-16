import React, { useState, useMemo } from "react";
import MOCK_VEHICLES from "../data/vehicles";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { isValidZip } from "../utils/validation";
import VehicleCard from "../components/VehicleCard";
import SortOptions from "../components/SortOptions";
import ModalOverlay from "../components/ModalOverlay";
import FiltersSidebar from "../components/FiltersSideBar";

const Home = () => {
  const [searchZip, setSearchZip] = useState("");
  const [error, setError] = useState("");
  const [currentZip, setCurrentZip] = useState("");
  const [sortBy, setSortBy] = useState("Popularity");
  const [selectedColor, setSelectedColor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedMake, setSelectedMake] = useState("");
  const [recentlyAddedFilter, setRecentlyAddedFilter] = useState(false);
  const [noShippingFeeFilter, setNoShippingFeeFilter] = useState(false);
  const [brandNewFilter, setBrandNewFilter] = useState(false);
  const [featuredFilter, setFeaturedFilter] = useState(false);
  const [modelYearRange, setModelYearRange] = useState([2020, 2025]);
  const [modelMileageRange, setModelMileageRange] = useState([0, 80000]);

  const makes = [...new Set(MOCK_VEHICLES.map((v) => v.make))].sort();
  const colors = [...new Set(MOCK_VEHICLES.map((v) => v.color))].sort();

  const filteredVehicles = useMemo(() => {
    let vehicles = MOCK_VEHICLES;

    if (currentZip) {
      vehicles = vehicles.filter((v) => v.zipCode === currentZip);
    }
    if (selectedMake) {
      vehicles = vehicles.filter((v) => v.make === selectedMake);
    }
    if (selectedColor) {
      vehicles = vehicles.filter((v) => v.color === selectedColor);
    }
    if (featuredFilter) {
      vehicles = vehicles.filter((v) => v.featured);
    }
    if (recentlyAddedFilter) {
      vehicles = vehicles.filter((v) => v.recentlyAdded);
    }
    if (brandNewFilter) {
      vehicles = vehicles.filter((v) => v.brandNew);
    }
    if (noShippingFeeFilter) {
      vehicles = vehicles.filter((v) => v.noShippingFee);
    }
    vehicles = vehicles.filter(
      (v) => v.price >= priceRange[0] && v.price <= priceRange[1]
    );
    vehicles = vehicles.filter(
      (v) =>
        v.mileage >= modelMileageRange[0] && v.mileage <= modelMileageRange[1]
    );
    vehicles = vehicles.filter(
      (v) => v.year >= modelYearRange[0] && v.year <= modelYearRange[1]
    );
    if (sortBy && sortBy !== "Popularity") {
      vehicles = [...vehicles].sort((a, b) => {
        switch (sortBy) {
          case "Price: Low to High":
            return a.price - b.price;
          case "Price: High to Low":
            return b.price - a.price;
          case "Year: Newest First":
            return b.year - a.year;
          case "Year: Oldest First":
            return a.year - b.year;
          case "Mileage: Low to High":
            return a.mileage - b.mileage;
          case "Mileage: High to Low":
            return b.mileage - a.mileage;
          default:
            return 0;
        }
      });
    }

    return vehicles;
  }, [
    currentZip,
    sortBy,
    selectedMake,
    recentlyAddedFilter,
    featuredFilter,
    noShippingFeeFilter,
    brandNewFilter,
    priceRange,
    selectedColor,
    modelYearRange,
    modelMileageRange,
    sortBy,
  ]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setError("");
    if (!searchZip) return setError("Please enter a ZIP code");
    if (!isValidZip(searchZip))
      return setError("Please enter a valid 5-digit ZIP code");
    setCurrentZip(searchZip);
  };

  const clearAllFilters = () => {
    setSelectedMake("");
    setSelectedColor("");
    setFeaturedFilter(false);
    setRecentlyAddedFilter(false);
    setBrandNewFilter(false);
    setNoShippingFeeFilter(false);
    setPriceRange([0, 2000]);
    setBrandNewFilter(false);
    setModelMileageRange([0, 80000]);
    setModelYearRange([2020, 2022]);
  };

  const activeFiltersCount = [
    selectedMake,
    selectedColor,
    featuredFilter,
    recentlyAddedFilter,
    brandNewFilter,
    noShippingFeeFilter,
    priceRange[0] > 0 || priceRange[1] < 2000,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
      {currentZip && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <FiltersSidebar
              activeFiltersCount={activeFiltersCount}
              clearAllFilters={clearAllFilters}
              makes={makes}
              colors={colors}
              selectedMake={selectedMake}
              setSelectedMake={setSelectedMake}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              noShippingFeeFilter={noShippingFeeFilter}
              setNoShippingFeeFilter={setNoShippingFeeFilter}
              recentlyAddedFilter={recentlyAddedFilter}
              setRecentlyAddedFilter={setRecentlyAddedFilter}
              brandNewFilter={brandNewFilter}
              setBrandNewFilter={setBrandNewFilter}
              modelYearRange={modelYearRange}
              setModelYearRange={setModelYearRange}
              modelMileageRange={modelMileageRange}
              setModelMileageRange={setModelMileageRange}
            />
            <main className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredVehicles.length} results
                  </h2>
                  <p className="text-gray-600">in {currentZip}</p>
                </div>
                <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
              </div>
              {filteredVehicles.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-gray-500 text-lg mb-2">
                    No vehicles found
                  </div>
                  <div className="text-gray-400">
                    Try adjusting your filters or searching a different ZIP code
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      )}
      {currentZip && <ModalOverlay />}
    </div>
  );
};

export default Home;
