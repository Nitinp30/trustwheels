const VehicleCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm border overflow-hidden animate-pulse">
    <div className="aspect-video bg-gray-200"></div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="h-4 bg-gray-200 rounded mb-3 w-1/3"></div>
        <div className="h-12 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  </div>
);

export default VehicleCardSkeleton;
