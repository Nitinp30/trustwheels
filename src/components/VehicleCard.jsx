import React, { useState, useCallback } from "react";
import { Heart } from "lucide-react";
import { formatPrice, formatMileage } from "../utils/format";

const VehicleCard = ({ vehicle }) => {
  const [imageError, setImageError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleImageError = useCallback((e) => {
    setImageError(true);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageError(false);
  }, []);

  const handleHeartClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsLiked(!isLiked);
    },
    [isLiked]
  );

  const getDataUrlPlaceholder = () => {
    const svg = `
      <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="300" fill="#f3f4f6"/>
        <text x="50%" y="45%" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="16">
          ${vehicle.make} ${vehicle.model}
        </text>
        <text x="50%" y="60%" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="12">
          Image not available
        </text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <img
          src={vehicle.image || getDataUrlPlaceholder()}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center text-gray-500">
              <div className="text-sm font-medium">
                {vehicle.make} {vehicle.model}
              </div>
              <div className="text-xs">Image not available</div>
            </div>
          </div>
        )}
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
        <button
          onClick={handleHeartClick}
          className={`absolute top-3 right-3 p-2 backdrop-blur-sm rounded-full transition-all duration-200 transform ${
            isLiked
              ? "bg-red-50 hover:bg-red-100 scale-110"
              : "bg-white/80 hover:bg-white hover:scale-105"
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-all duration-200 ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "text-gray-600 hover:text-red-400"
            }`}
          />
        </button>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {vehicle.year} • {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-sm text-gray-600">
              {vehicle.trim} • {formatMileage(vehicle.mileage)} •{" "}
              {vehicle.color}
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
};

export default VehicleCard;
