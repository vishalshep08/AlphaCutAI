import React, { useState, useEffect, useRef } from "react";
import assets from "../assets/assets";

const categories = [
  { name: "People", icon: "👤", description: "Perfect for portraits and headshots" },
  { name: "Products", icon: "📦", description: "Ideal for e-commerce listings" },
  { name: "Animals", icon: "🐾", description: "Great for pet photography" },
  { name: "Cars", icon: "🚗", description: "Perfect for vehicle showcases" },
  { name: "Graphics", icon: "🎨", description: "Clean graphics and logos" },
];

const categoryImages = {
  People: {
    original: assets.people_org,
    removed: assets.people,
  },
  Products: {
    original: assets.product,
    removed: assets.product_removed,
  },
  Animals: {
    original: assets.animal,
    removed: assets.animal_removed,
  },
  Cars: {
    original: assets.car,
    removed: assets.car_removed,
  },
  Graphics: {
    original: assets.graphics,
    removed: assets.graphics_removed,
  },
};

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState("People");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({ original: false, removed: false });
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [viewMode, setViewMode] = useState("slider"); // 'slider', 'before', 'after'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  const currentImages = categoryImages[activeCategory];
  const currentCategory = categories.find(cat => cat.name === activeCategory);

  const handleSliderChange = (e) => {
    setSliderPosition(parseInt(e.target.value));
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setImageLoaded({ original: false, removed: false });
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    } else {
      setIsAutoPlaying(true);
      autoPlayRef.current = setInterval(() => {
        setSliderPosition(prev => {
          const newPos = prev >= 90 ? 10 : prev + 2;
          return newPos;
        });
      }, 50);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    if (mode === 'before') setSliderPosition(100);
    else if (mode === 'after') setSliderPosition(0);
    else setSliderPosition(50);
  };

  // Auto-advance categories every 8 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isAutoPlaying) {
  //       const currentIndex = categories.findIndex(cat => cat.name === activeCategory);
  //       const nextIndex = (currentIndex + 1) % categories.length;
  //       handleCategoryChange(categories[nextIndex].name);
  //     }
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, [activeCategory, isAutoPlaying]);

  // When both images are loaded, start transition and reset slider
  useEffect(() => {
    if (imageLoaded.original && imageLoaded.removed) {
      setIsTransitioning(true);
      if (viewMode === 'slider') setSliderPosition(50);
      const timeout = setTimeout(() => setIsTransitioning(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [imageLoaded, viewMode]);

  // Cleanup auto-play on unmount
  // useEffect(() => {
  //   return () => {
  //     if (autoPlayRef.current) {
  //       clearInterval(autoPlayRef.current);
  //     }
  //   };
  // }, []);

  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Stunning Quality Results
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            See the difference our AI makes across different image types
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Preview</span>
            </div>
            <span>•</span>
            <span>Drag to compare</span>
          </div>
        </div>

        {/* Category Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`group relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 min-w-[100px] ${
                    activeCategory === category.name
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  onClick={() => handleCategoryChange(category.name)}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-semibold">{category.name}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                    {category.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1">
            {[
              { mode: 'before', label: 'Before', icon: '🖼️' },
              { mode: 'slider', label: 'Compare', icon: '⚡' },
              { mode: 'after', label: 'After', icon: '✨' }
            ].map(({ mode, label, icon }) => (
              <button
                key={mode}
                onClick={() => handleViewModeChange(mode)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  viewMode === mode
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isAutoPlaying
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
            <span>{isAutoPlaying ? 'Pause' : 'Auto Play'}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200"
          >
            <span>🔍</span>
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
        </div>

        {/* Main Slider Container */}
        <div 
          ref={containerRef}
          className={`relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 ${
            isFullscreen ? 'bg-black' : 'bg-white'
          }`}
        >
          {/* Image Container */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            {/* Loading State */}
            {(!imageLoaded.original || !imageLoaded.removed) && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-20">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-600 font-medium">Loading {currentCategory.name.toLowerCase()} images...</p>
                </div>
              </div>
            )}

            {/* Original Image */}
            <img
              src={currentImages.original}
              alt={`${activeCategory} original`}
              onLoad={() => setImageLoaded((prev) => ({ ...prev, original: true }))}
              className={`absolute top-0 left-0 w-full h-full object-cover pointer-events-none transition-all duration-400 ${
                isTransitioning ? "ease-in-out" : ""
              }`}
              style={{
                clipPath: viewMode === 'slider' ? `inset(0 ${100 - sliderPosition}% 0 0)` : 
                          viewMode === 'before' ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
              }}
            />

            {/* Processed Image */}
            <img
              src={currentImages.removed}
              alt={`${activeCategory} background removed`}
              onLoad={() => setImageLoaded((prev) => ({ ...prev, removed: true }))}
              className={`absolute top-0 left-0 w-full h-full object-cover pointer-events-none transition-all duration-400 ${
                isTransitioning ? "ease-in-out" : ""
              }`}
              style={{
                clipPath: viewMode === 'slider' ? `inset(0 0 0 ${sliderPosition}%)` :
                          viewMode === 'after' ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
              }}
            />

            {/* Slider Control */}
            {viewMode === 'slider' && (
              <>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute z-30 top-0 left-0 w-full h-full appearance-none bg-transparent focus:outline-none cursor-grab active:cursor-grabbing"
                  style={{ background: 'transparent' }}
                />

                {/* Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Slider Handle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-indigo-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  </div>
                </div>
              </>
            )}

            {/* Labels */}
            {viewMode === 'slider' && (
              <>
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium">
                  Original
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium">
                  Background Removed
                </div>
              </>
            )}

            {/* Single View Labels */}
            {viewMode !== 'slider' && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {viewMode === 'before' ? 'Original Image' : 'Background Removed'}
              </div>
            )}
          </div>

          {/* Bottom Info Panel */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{currentCategory.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{activeCategory} Category</h3>
                    <p className="text-sm text-gray-600">{currentCategory.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Quality Indicators */}
                <div className="flex items-center space-x-2 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">4K Quality</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">AI Powered</span>
                  </div>
                </div>

                {/* Processing Time */}
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  ⚡ ~3 seconds
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <div className="text-blue-600 text-2xl mb-3">🎯</div>
            <h3 className="font-bold text-gray-900 mb-2">Precision Cutting</h3>
            <p className="text-sm text-gray-600">Advanced AI detects edges with pixel-perfect accuracy</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <div className="text-green-600 text-2xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-600">Process images in seconds, not minutes</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
            <div className="text-purple-600 text-2xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 mb-2">Batch Processing</h3>
            <p className="text-sm text-gray-600">Upload multiple images and process them all at once</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .min-w-[100px] {
            min-width: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default BgSlider;