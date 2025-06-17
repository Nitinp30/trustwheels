import { useMemo } from "react";

export const useVehicleFilters = (vehicles, filters) => {
  return useMemo(() => {
    let filteredVehicles = vehicles;

    if (filters.currentZip) {
      filteredVehicles = filteredVehicles.filter(
        (v) => v.zipCode === filters.currentZip
      );
    }
    if (filters.selectedMake) {
      filteredVehicles = filteredVehicles.filter(
        (v) => v.make === filters.selectedMake
      );
    }
    if (filters.selectedColor) {
      filteredVehicles = filteredVehicles.filter(
        (v) => v.color === filters.selectedColor
      );
    }
    if (filters.featuredFilter) {
      filteredVehicles = filteredVehicles.filter((v) => v.featured);
    }
    if (filters.recentlyAddedFilter) {
      filteredVehicles = filteredVehicles.filter((v) => v.recentlyAdded);
    }
    if (filters.brandNewFilter) {
      filteredVehicles = filteredVehicles.filter((v) => v.brandNew);
    }
    if (filters.noShippingFeeFilter) {
      filteredVehicles = filteredVehicles.filter((v) => v.noShippingFee);
    }

    filteredVehicles = filteredVehicles.filter(
      (v) =>
        v.price >= filters.priceRange[0] && v.price <= filters.priceRange[1]
    );
    filteredVehicles = filteredVehicles.filter(
      (v) =>
        v.mileage >= filters.modelMileageRange[0] &&
        v.mileage <= filters.modelMileageRange[1]
    );
    filteredVehicles = filteredVehicles.filter(
      (v) =>
        v.year >= filters.modelYearRange[0] &&
        v.year <= filters.modelYearRange[1]
    );

    if (filters.sortBy && filters.sortBy !== "Popularity") {
      filteredVehicles = [...filteredVehicles].sort((a, b) => {
        switch (filters.sortBy) {
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

    return filteredVehicles;
  }, [vehicles, filters]);
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
