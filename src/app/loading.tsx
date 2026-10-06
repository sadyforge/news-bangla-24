
import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-black px-4">
      <div className="text-center">
        <div className="relative flex justify-center items-center">
          <div className="w-20 h-20 rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin"></div>

          <div className="absolute w-10 h-10 rounded-full bg-red-500/10 blur-xl"></div>
        </div>

        <h2 className="text-xl font-semibold text-white mt-6">
          লোড হচ্ছে...
        </h2>

        <p className="text-red-200/50 text-sm mt-2">
          অনুগ্রহ করে একটু অপেক্ষা করুন
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
