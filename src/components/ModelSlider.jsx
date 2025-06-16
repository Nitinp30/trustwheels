import React, { useState } from "react";
import ReactSlider from "react-slider";

const ModelSlider = ({ modelRange, setModelRange, MAX, MIN, filter }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = ([min, max]) => {
    const clampedMin = Math.max(MIN, Math.min(min, MAX - 1));
    const clampedMax = Math.min(MAX, Math.max(max, MIN + 1));

    if (clampedMin >= clampedMax) {
      return;
    }

    setModelRange([clampedMin, clampedMax]);
  };

  const getTrackStyle = (index) => {
    if (index === 1) {
      return {
        backgroundColor: "#1f2937",
        borderRadius: "4px",
        height: "8px",
        top: "50%",
        transform: "translateY(-50%)",
      };
    }
    // Inactive tracks
    return {
      backgroundColor: "#e5e7eb",
      borderRadius: "4px",
      height: "8px",
      top: "50%",
      transform: "translateY(-50%)",
    };
  };

  const getThumbStyle = (index) => ({
    height: "20px",
    width: "20px",
    backgroundColor: "#ffffff",
    border: "2px solid #1f2937",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: isDragging
      ? "0 4px 12px rgba(0,0,0,0.15)"
      : "0 2px 4px rgba(0,0,0,0.1)",
    outline: "none",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "box-shadow 0.2s ease",
    zIndex: 1,
  });

  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-900 mb-3"> {filter}</h4>

      {/* Top Pill Inputs */}
      <div className="flex justify-between items-center mb-6">
        <div className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium bg-white shadow-sm min-w-[60px] text-center">
          {modelRange[0]}
        </div>
        <span className="text-gray-500 text-sm mx-2">-</span>
        <div className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium bg-white shadow-sm min-w-[60px] text-center">
          {modelRange[1]}
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative px-2">
        <ReactSlider
          className="relative w-full h-5 flex items-center"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          value={modelRange}
          onChange={handleChange}
          onBeforeChange={() => setIsDragging(true)}
          onAfterChange={() => setIsDragging(false)}
          min={MIN}
          max={MAX}
          step={1}
          pearling
          minDistance={1}
          withTracks
          renderThumb={(props, state) => (
            <div
              {...props}
              style={{
                ...props.style,
                ...getThumbStyle(state.index),
              }}
            />
          )}
          renderTrack={(props, state) => (
            <div
              {...props}
              style={{
                ...props.style,
                ...getTrackStyle(state.index),
              }}
            />
          )}
        />
      </div>

      {/* Bottom Labels */}
      <div className="flex justify-between text-sm text-gray-500 mt-4 px-2">
        <span>{MIN}</span>
        <span>{MAX}</span>
      </div>
    </div>
  );
};

export default ModelSlider;
