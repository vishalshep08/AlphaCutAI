import React, { useState, useEffect } from 'react';
import { Upload, Zap, Download, Check, ArrowRight, Sparkles, Image, Palette } from 'lucide-react';

const steps = [
  {
    step: "Step 1",
    title: "Upload Your Image",
    description: "Choose any photo from your device and upload it to our background remover tool with just one click.",
    icon: Upload,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    step: "Step 2", 
    title: "AI Automatically Removes Background",
    description: "Our smart AI detects the subject and instantly removes the background with incredible accuracy.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    step: "Step 3",
    title: "Download or Customize",
    description: "Save your image with a transparent background or edit it further with new scenes, colors, or overlays.",
    icon: Download,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
];

const features = [
  { icon: Check, text: "100% Automatic", subtext: "No manual work required" },
  { icon: Zap, text: "Lightning Fast", subtext: "Results in 3 seconds" },
  { icon: Image, text: "HD Quality", subtext: "Maintains original resolution" },
  { icon: Palette, text: "Easy Editing", subtext: "Add new backgrounds instantly" },
];

const BgRemovalSteps = ({ scrollToRef }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>

      <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            AI-Powered Technology
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Remove backgrounds in
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              3 simple steps
            </span>
          </h2>
          
          <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Transform your photos instantly with our advanced AI technology. No experience required, professional results guaranteed.
          </p>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-indigo-600" />
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{feature.text}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{feature.subtext}</p>
            </div>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeStep === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/20 ${isActive ? 'ring-2 ring-indigo-500 scale-105' : 'hover:scale-105'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
                onClick={handleClick}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-block ${item.bgColor} ${item.textColor} text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm`}>
                    {item.step}
                  </span>
                  <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            onClick={handleClick}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base sm:text-lg"
          >
            <Upload className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            Try It Now - It's Free!
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
            Process unlimited images • Results in seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgRemovalSteps;