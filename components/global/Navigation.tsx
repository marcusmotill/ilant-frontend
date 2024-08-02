"use client";
import React from "react";
import ThemeSwitcher from "@/components/global/ThemeSwitcher";

const Navigation: React.FC = () => {
  return (
    <div className="navbar bg-base-100 text-base-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Ilant Book Search</a>
      </div>
      <div className="flex-none">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navigation;
