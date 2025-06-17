import SortOptions from "./SortOptions";

const ResultsHeader = ({ filteredVehicles, currentZip, sortBy, setSortBy }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {filteredVehicles.length} results
        </h2>
        <p className="text-gray-600">in {currentZip}</p>
      </div>
      <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );

  export default ResultsHeader;