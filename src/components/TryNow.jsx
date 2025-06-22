import { useState, useRef } from "react";
import { Upload, Image, Sparkles, Wand2, Download } from "lucide-react";

const TryNow = () => {
  // Mock removeBg function to simulate background removal process
  const removeBg = (file) => {
    console.log("Processing file:", file?.name || file);
    // TODO: Add your real background removal logic here
  };

  const [isDragging, setIsDragging] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);

  const fileInputRef = useRef(null);

  // Handle drag over event to update UI
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Reset dragging state on drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  // Handle file drop event and trigger background removal
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      removeBg(files[0]);
    }
  };

  // Handle paste event to accept images from clipboard
  const handlePaste = (e) => {
    const items = e.clipboardData.items;
    for (let item of items) {
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        removeBg(file);
        break;
      }
    }
  };

  // Process the entered image URL
  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      removeBg(urlInput.trim()); // Pass the URL to your removeBg logic
      console.log("Processing URL:", urlInput);
      setUrlInput("");
      setShowUrlInput(false);
    }
  };

  // Feature list with icons and text
  const features = [
    { icon: Sparkles, text: "AI-Powered Precision" },
    { icon: Wand2, text: "One-Click Processing" },
    { icon: Download, text: "High-Quality Results" },
  ];

  // Supported image formats
  const supportedFormats = ["JPG", "PNG", "WEBP", "GIF"];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl shadow-lg bg-white dark:bg-gray-900">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Background Removal
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Remove Image Background
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              In Seconds
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get professional-quality transparent backgrounds for any image with our
            advanced AI technology. Perfect for e-commerce, design, and creative projects.
          </p>
        </div>

        {/* Main Upload Area */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <div
            className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-dashed transition-all duration-300 ${
              isDragging
                ? "border-indigo-500 bg-indigo-50/50 scale-105"
                : "border-gray-200 hover:border-indigo-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onPaste={handlePaste}
            tabIndex={0} // Make div focusable to capture paste events
          >
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              {/* Upload Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Upload Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {isDragging ? "Drop your image here" : "Upload your image"}
              </h3>

              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Drag and drop, paste from clipboard, or browse files
              </p>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                id="upload2"
                hidden
                accept="image/*"
                onChange={(e) => removeBg(e.target.files[0])}
              />

              {/* Buttons: Browse and Use URL */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-6">
                <label
                  htmlFor="upload2"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                >
                  <Image className="w-4 h-4 sm:w-5 sm:h-5" />
                  Browse Files
                </label>

                <button
                  onClick={() => setShowUrlInput(!showUrlInput)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full border-2 border-gray-200 hover:border-indigo-300 text-sm sm:text-base transition-all duration-200 w-full sm:w-auto justify-center"
                >
                  Use URL
                </button>
              </div>

              {/* URL Input Field */}
              {showUrlInput && (
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Paste image URL here..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleUrlSubmit}
                    className="px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
                  >
                    Process
                  </button>
                </div>
              )}

              {/* Supported Image Formats */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
                <span>Supports:</span>
                {supportedFormats.map((format) => (
                  <span
                    key={format}
                    className="px-2 py-1 bg-gray-100 rounded-md font-medium"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-4">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{text}</h3>
            </div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                1K+
              </div>
              <div className="text-sm sm:text-base text-gray-600">Images Processed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                99.9%
              </div>
              <div className="text-sm sm:text-base text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                &lt;5s
              </div>
              <div className="text-sm sm:text-base text-gray-600">Processing Time</div>
            </div>
          </div>
        </div>

        {/* Privacy Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your privacy is protected. Images are processed securely and automatically deleted
            after processing. No watermarks for basic use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TryNow;
