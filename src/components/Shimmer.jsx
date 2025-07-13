import React from "react";
const Shimmer = () => {
    return (
      <div className="w-40 h-60 bg-gray-300 rounded-lg overflow-hidden animate-pulse shadow-lg">
        <div className="w-full h-40 bg-gray-400"></div>
        <div className="p-2 space-y-2">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;