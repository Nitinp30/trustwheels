
import React, { useState, useCallback, useRef, useEffect } from "react";

const ModelSlider = ({ modelRange, setModelRange, MAX, MIN, filter }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState(null);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  const handleChange = useCallback(([min, max]) => {
    const clampedMin = Math.max(MIN, Math.min(min, MAX));
    const clampedMax = Math.min(MAX, Math.max(max, MIN));
    
    if (clampedMax - clampedMin < 1) {
      return; 
    }
    
    setModelRange([clampedMin, clampedMax]);
  }, [MIN, MAX, setModelRange]);

  const getPercentage = useCallback((value) => {
    return ((value - MIN) / (MAX - MIN)) * 100;
  }, [MIN, MAX]);

  const getValue = useCallback((percentage) => {
    return Math.round(MIN + (percentage / 100) * (MAX - MIN));
  }, [MIN, MAX]);

  const handleMouseDown = useCallback((thumbIndex, e) => {
    e.preventDefault();
    setIsDragging(true);
    setActiveThumb(thumbIndex);

    const handleMouseMove = (e) => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const newValue = getValue(percentage);

      const newRange = [...modelRange];
      newRange[thumbIndex] = newValue;

      if (thumbIndex === 0 && newValue < modelRange[1] - 1) {
        handleChange([newValue, modelRange[1]]);
      } else if (thumbIndex === 1 && newValue > modelRange[0] + 1) {
        handleChange([modelRange[0], newValue]);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setActiveThumb(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [modelRange, handleChange, getValue]);

  const handleKeyDown = useCallback((thumbIndex, e) => {
    let newValue = modelRange[thumbIndex];
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        newValue = Math.max(MIN, newValue - 1);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        newValue = Math.min(MAX, newValue + 1);
        break;
      case 'Home':
        e.preventDefault();
        newValue = MIN;
        break;
      case 'End':
        e.preventDefault();
        newValue = MAX;
        break;
      default:
        return;
    }

    const newRange = [...modelRange];
    newRange[thumbIndex] = newValue;

    if (thumbIndex === 0 && newValue < modelRange[1]) {
      handleChange([newValue, modelRange[1]]);
    } else if (thumbIndex === 1 && newValue > modelRange[0]) {
      handleChange([modelRange[0], newValue]);
    }
  }, [modelRange, handleChange, MIN, MAX]);

  const getThumbStyle = useCallback((thumbIndex) => ({
    height: "20px",
    width: "20px",
    backgroundColor: "#ffffff",
    border: "2px solid #1f2937",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: isDragging && activeThumb === thumbIndex
      ? "0 4px 12px rgba(0,0,0,0.15)"
      : "0 2px 4px rgba(0,0,0,0.1)",
    outline: "none",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "box-shadow 0.2s ease",
    zIndex: activeThumb === thumbIndex ? 3 : 2,
    left: `${getPercentage(modelRange[thumbIndex])}%`,
  }), [isDragging, activeThumb, getPercentage, modelRange]);

  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-900 mb-3">{filter}</h4>

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

      {/* Custom Slider Container */}
      <div className="relative px-2" ref={sliderRef}>
        {/* Track */}
        <div
          ref={trackRef}
          className="relative w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {/* Active Track */}
          <div
            className="absolute h-full bg-gray-800 rounded-lg"
            style={{
              left: `${getPercentage(modelRange[0])}%`,
              width: `${getPercentage(modelRange[1]) - getPercentage(modelRange[0])}%`,
            }}
          />
        </div>

        {/* Thumbs */}
        {[0, 1].map((thumbIndex) => (
          <div
            key={thumbIndex}
            style={getThumbStyle(thumbIndex)}
            onMouseDown={(e) => handleMouseDown(thumbIndex, e)}
            onKeyDown={(e) => handleKeyDown(thumbIndex, e)}
            tabIndex={0}
            role="slider"
            aria-label={`${filter} ${thumbIndex === 0 ? 'minimum' : 'maximum'} value`}
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={modelRange[thumbIndex]}
            aria-orientation="horizontal"
          />
        ))}
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