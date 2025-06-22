import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Upload,
  Play,
  Zap,
  Download,
  Palette,
  CheckCircle,
  ArrowRight,
  Camera
} from 'lucide-react';
import { AppContext } from '../context/AppContext';
import assets from '../assets/assets';

const Header = () => {
  const { removeBg } = useContext(AppContext);
  const navigate = useNavigate();

  // States
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Feature List
  const features = [
    { icon: CheckCircle, text: '100% Automatic - No manual work needed' },
    { icon: Zap, text: 'Lightning Fast - Results in 3 seconds' },
    { icon: Download, text: 'High Quality - Maintains original resolution' },
    { icon: Palette, text: 'Easy Editing - Add new backgrounds instantly' },
  ];

  // Upload Handlers
  const handleFileUpload = async (file) => {
    if (!file) return;
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          removeBg(file);
          navigate('/result');
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl mb-16">
      {/* Background Visual */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-40 pointer-events-none" />

      <div className="relative px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Text & Upload Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              The fastest{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                background eraser
              </span>
              <span className="block text-gray-700 text-2xl mt-2">powered by AI</span>
            </h1>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Transform your photos instantly with AI. Remove backgrounds with pixel-perfect
              precision in just 3 seconds. No experience required!
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                  <feature.icon className="text-green-500 w-5 h-5" />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* Drag & Drop Upload */}
            <div
              className={`relative border-2 border-dashed p-6 rounded-xl transition-all cursor-pointer ${
                dragActive
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('upload1').click()}
            >
              <input
                id="upload1"
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                  <Upload className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Drop your image here</h3>
                <p className="text-sm text-gray-500 mb-4">or click to browse from your device</p>

                {isUploading && (
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                )}

                <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400">
                  <span className="bg-gray-100 px-2 py-1 rounded">JPG</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">PNG</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">WEBP</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Max 10MB</span>
                </div>
              </div>
            </div>

            {/* Upload Button */}
            <button
              onClick={() => document.getElementById('upload1').click()}
              disabled={isUploading}
              className="mt-6 flex items-center gap-3 justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
            >
              <Camera className="w-5 h-5" />
              {isUploading
                ? `Processing... ${uploadProgress}%`
                : 'Upload & Remove Background'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Video Preview Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="relative shadow-2xl rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
                <video
                  src={assets.video_banner}
                  autoPlay={isVideoPlaying}
                  loop
                  muted
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                    <span>See the magic in action</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoPlaying(!isVideoPlaying);
                      }}
                      className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md"
                    >
                      <Play />
                    </button>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ✨ NEW
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-800">
                🚀 3sec process
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
