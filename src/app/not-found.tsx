
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-red-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-rose-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 */}
        <div className="relative">
          <h1 className="text-[130px] sm:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-400 via-red-500 to-red-800 drop-shadow-2xl">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-64 h-64 bg-red-600/20 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl px-6 py-8 sm:px-10 shadow-2xl shadow-red-950/50">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Page Not Found
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            পেজটি পাওয়া যায়নি
          </h2>

          <p className="text-red-100/60 mt-4 leading-relaxed text-sm sm:text-base">
            আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে,
            পরিবর্তন করা হয়েছে অথবা এই ঠিকানায় আর নেই।
          </p>

          {/* Button */}
          <Link href="/" className="inline-block mt-7">
            <button className="btn border-0 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-7 shadow-lg shadow-red-900/40">
              ← হোম পেজে ফিরে যান
            </button>
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="text-red-200/30 text-xs mt-6">
          Something went wrong? Let's get you back on track.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

