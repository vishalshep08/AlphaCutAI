import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
    Download,
    RotateCcw,
    Sparkles,
    ImageIcon,
    CheckCircle,
    Clock,
    ArrowLeft
} from "lucide-react";

const Result = () => {
    const { image, resultImage } = useContext(AppContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(!resultImage && image);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [showComparison, setShowComparison] = useState(true);

    useEffect(() => {
        if (!resultImage && image) {
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [resultImage, image]);

    const handleDownload = async () => {
        if (!resultImage) return;

        setDownloadProgress(0);
        const interval = setInterval(() => {
            setDownloadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        try {
            const response = await fetch(resultImage);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "background-removed.png";
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error("Download failed", error);
        }

        setTimeout(() => {
            clearInterval(interval);
            setDownloadProgress(0);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        Processing Complete
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Background Removal
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Result
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your image has been processed with precision. Compare the results and download your enhanced image.
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-white">
                                {resultImage ? (
                                    <>
                                        <CheckCircle className="w-5 h-5 text-green-300" />
                                        <span className="font-medium">Processing Complete</span>
                                    </>
                                ) : (
                                    <>
                                        <Clock className="w-5 h-5 animate-pulse" />
                                        <span className="font-medium">Processing Image...</span>
                                    </>
                                )}
                            </div>
                            <button
                                onClick={() => navigate("/")}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 backdrop-blur-sm"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">Back to Home</span>
                            </button>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-12">
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setShowComparison(true)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${showComparison ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
                                >
                                    Side by Side
                                </button>
                                <button
                                    onClick={() => setShowComparison(false)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${!showComparison ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
                                >
                                    Result Only
                                </button>
                            </div>
                        </div>

                        <div className={`grid gap-6 sm:gap-8 ${showComparison ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-2xl mx-auto"}`}>
                            {showComparison && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <ImageIcon className="w-5 h-5 text-gray-600" />
                                        <h3 className="text-lg font-semibold text-gray-800">Original Image</h3>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
                                        <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                                            {image ? (
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt="Original"
                                                    className="w-full h-auto rounded-xl object-cover max-h-96"
                                                />
                                            ) : (
                                                <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                                                    <div className="text-center">
                                                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                                        <p className="text-gray-500">No image uploaded</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-indigo-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Background Removed</h3>
                                    {resultImage && (
                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                            Ready
                                        </span>
                                    )}
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl" />
                                    <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                                        <div className="relative rounded-xl overflow-hidden bg-transparent bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] min-h-64">
                                            {loading ? (
                                                <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm">
                                                    <div className="text-center">
                                                        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                                                        <p className="text-gray-600 font-medium">Processing your image...</p>
                                                        <p className="text-gray-500 text-sm mt-1">This may take a few moments</p>
                                                    </div>
                                                </div>
                                            ) : resultImage ? (
                                                <img
                                                    src={resultImage}
                                                    alt="Background Removed"
                                                    className="w-full h-auto object-cover max-h-96 relative z-10"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "/fallback.png";
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-64 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                                        <p className="text-gray-500">Processed image will appear here</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {resultImage && (
                            <div className="mt-8 sm:mt-12">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <button
                                        onClick={() => navigate("/")}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-md group w-full sm:w-auto justify-center"
                                    >
                                        <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                                        Try Another Image
                                    </button>

                                    <button
                                        onClick={handleDownload}
                                        className="relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group w-full sm:w-auto justify-center overflow-hidden"
                                    >
                                        {downloadProgress > 0 && downloadProgress < 100 ? (
                                            <>
                                                <div className="absolute inset-0 bg-white/20" style={{ width: `${downloadProgress}%` }} />
                                                <Clock className="w-5 h-5 animate-spin" />
                                                Downloading... {downloadProgress}%
                                            </>
                                        ) : (
                                            <>
                                                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                                Download Image
                                            </>
                                        )}
                                    </button>
                                </div>

                                <div className="mt-6 text-center">
                                    <p className="text-sm text-gray-500 mb-3">Need different formats or sizes?</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full">PNG</button>
                                        <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full">JPG</button>
                                        <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full">WEBP</button>
                                        <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full">High Resolution</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">💡 Pro Tips for Better Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                            <span className="text-indigo-600 font-medium">•</span>
                            <span>Use high-contrast images for better edge detection</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-indigo-600 font-medium">•</span>
                            <span>Avoid busy or cluttered backgrounds</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-indigo-600 font-medium">•</span>
                            <span>Higher resolution images yield better results</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
