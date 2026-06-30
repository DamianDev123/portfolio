"use client";

import { useState } from "react";

export default function Project({ 
  title, 
  description, 
  images, 
}: { 
  title: string; 
  description: string; 
  images: string[]; 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const hasImages = images && images.length > 0;

  return (
    <>
    <div className="bg-pink-300 w-[98%] mx-auto h-0.5 mt-2 mb-5 "/>
    <div className="w-full h-150 bg-[#faeaf4] rounded-2xl p-6 transition-all duration-300 flex justify-between items-stretch gap-6">

      <div className="flex flex-col justify-between flex-1 pr-4 py-1">
        <div>
          <h3 className="text-4xl font-bold text-gray-800 tracking-tight relative inline-block group-hover:text-pink-600 transition-colors duration-300">
            {title || "Project Title"}
          </h3>
          <p className="text-xl text-gray-600 mt-3 leading-relaxed font-medium tracking-wide max-w-[95%]">
            {description || "No description provided yet for this project repository."}
          </p>
        </div>
      </div>

      <div className="group w-[50%] min-h-48 bg-[#fcd5ed]/30 border border-[#f3bcdf]/40 rounded-xl shrink-0 relative overflow-hidden flex items-center justify-center shadow-inner">
        {hasImages ? (
          <>
            <div 
              className="absolute inset-0 flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((imgUrl, idx) => (
                <div key={idx} className="w-full h-full shrink-0 overflow-hidden">
                  <img 
                    src={imgUrl} 
                    alt={`${title} - view ${idx + 1}`} 
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-3 p-2 rounded-xl bg-white/40 hover:bg-white/90 backdrop-blur-md text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button 
                  onClick={nextImage}
                  className="absolute right-3 p-2 rounded-xl bg-white/40 hover:bg-white/90 backdrop-blur-md text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm">
                  {images.map((_, index) => (
                    <button 
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span className="text-xs text-pink-400 font-semibold tracking-wide uppercase">
            No Preview Available
          </span>
        )}
      </div>

    </div>  
    </>
  );
}