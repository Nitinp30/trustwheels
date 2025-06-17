import React, { useState, useEffect } from "react";
import MOCK_VEHICLES from "../data/vehicles";
import Header from "../components/Header";
import { isValidZip } from "../utils/validation";
import VehicleCard from "../components/VehicleCard";
import ModalOverlay from "../components/ModalOverlay";
import FiltersSidebar from "../components/FiltersSideBar";
import { useVehicleFilters } from "../utils/hooks";
import HeroSection from "../components/HeroSection";
import ResultsHeader from "../components/ResultsHeader";
import EmptyState from "../components/EmptyState";
import VehicleCardSkeleton from "../components/VehicleCardSkeleton";

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
  const [isModelOverlayVisible, setIsModelOverlayVisible] = useState(true);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  const makes = [...new Set(MOCK_VEHICLES.map((v) => v.make))].sort();
  const colors = [...new Set(MOCK_VEHICLES.map((v) => v.color))].sort();

  const filters = {
    currentZip,
    selectedMake,
    selectedColor,
    featuredFilter,
    recentlyAddedFilter,
    brandNewFilter,
    noShippingFeeFilter,
    priceRange,
    modelYearRange,
    modelMileageRange,
    sortBy,
  };

  const filteredVehicles = useVehicleFilters(MOCK_VEHICLES, filters);

  useEffect(() => {
    if (currentZip) {
      setIsLoadingResults(true);
      const timer = setTimeout(() => {
        setIsLoadingResults(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [
    selectedMake,
    selectedColor,
    featuredFilter,
    recentlyAddedFilter,
    brandNewFilter,
    noShippingFeeFilter,
    priceRange,
    modelYearRange,
    modelMileageRange,
    sortBy,
    currentZip,
  ]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setError("");
    if (!searchZip) return setError("Please enter a ZIP code");
    if (!isValidZip(searchZip))
      return setError("Please enter a valid US zip code.");

    setIsInitialLoad(true);
    setCurrentZip(searchZip);

    setTimeout(() => {
      setIsInitialLoad(false);
    }, 1200);
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
    setModelYearRange([2020, 2025]);
  };

  const activeFiltersCount = [
    selectedMake,
    selectedColor,
    featuredFilter,
    recentlyAddedFilter,
    brandNewFilter,
    noShippingFeeFilter,
    priceRange[0] > 0 || priceRange[1] < 2000,
    modelMileageRange[0] > 0 || modelMileageRange[1] < 80000,
    modelYearRange[0] > 2020 || modelYearRange[1] < 2025,
  ].filter(Boolean).length;

  const isLoading = isInitialLoad || isLoadingResults;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection
        searchZip={searchZip}
        setSearchZip={setSearchZip}
        handleSearch={handleSearch}
        error={error}
      />
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
              {!isLoading && (
                <ResultsHeader
                  filteredVehicles={filteredVehicles}
                  currentZip={currentZip}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
              )}

              {isLoading ? (
                <div>
                  <div className="mb-6 animate-pulse">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <div>
                        <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                      </div>
                      <div className="h-10 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <VehicleCardSkeleton key={index} />
                    ))}
                  </div>
                </div>
              ) : filteredVehicles.length === 0 ? (
                <EmptyState />
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
      {currentZip && isModelOverlayVisible && (
        <ModalOverlay setIsModelOverlayVisible={setIsModelOverlayVisible} />
      )}
    </div>
  );
};

export default Home;
