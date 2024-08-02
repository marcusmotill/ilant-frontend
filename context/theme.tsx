"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "@/themes";

interface ThemeContextType {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let initTheme = localStorage.getItem("theme");
    if (!initTheme) {
      initTheme = themes[0];
    }
    setTheme(initTheme);
  }, []);

  const changeTheme = (newTheme: string) => {
    if (!themes.includes(newTheme)) {
      return;
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className="flex flex-col h-full"
        data-theme={theme || themes[0]}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
