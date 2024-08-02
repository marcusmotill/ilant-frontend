"use client";
import React from "react";
import { useRef, useCallback, useLayoutEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchPaginationProps {
  totalItems: number | undefined;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SearchPagination: React.FC<SearchPaginationProps> = ({
  totalItems,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="navbar bg-base-100 text-base-content">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <div className="join">
          <button
            className={`join-item btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => onPageChange(currentPage - 1)}
          >
            «
          </button>
          <button className="join-item btn">Page {currentPage}</button>
          <button
            className="join-item btn"
            onClick={() => onPageChange(currentPage + 1)}
          >
            »
          </button>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default SearchPagination;
