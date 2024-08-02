"use client";
import React from "react";
import Image from "next/image";

const SearchLoading: React.FC = () => {
  return (
    <div className="grow overflow-y-scroll">
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 10 }).map((item, index) => (
          <a
            key={index}
            className="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
          >
            <figure className="px-4 pt-4">
              <div className="skeleton h-32 w-full"></div>
            </figure>
            <div className="card-body">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchLoading;
