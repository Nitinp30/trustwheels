import React from "react";
import { Heart } from "lucide-react";
import { formatPrice, formatMileage } from "../utils/format";

const VehicleCard = ({ vehicle }) => (
  <div className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group">
    <div className="relative aspect-video bg-gray-200 overflow-hidden">
      <img
        src={vehicle.image}
        alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        {vehicle.recentlyAdded && (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            Recently added
          </span>
        )}
        {vehicle.brandNew && (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            Brand new
          </span>
        )}
        {vehicle.noShippingFee && (
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
            No shipping fee
          </span>
        )}
      </div>
      <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
        <Heart className="w-4 h-4 text-gray-600" />
      </button>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {vehicle.year} • {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-gray-600">
            {vehicle.trim} • {formatMileage(vehicle.mileage)} • {vehicle.color}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">
            {formatPrice(vehicle.price)}
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600 mb-3">
          Get it by {vehicle.getItBy}
        </p>
        <button className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
          View Details
        </button>
      </div>
    </div>
  </div>
);

export default VehicleCard;
