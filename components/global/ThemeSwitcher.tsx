"use client";
import React from "react";
import themes from "@/themes";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/context/theme";

const ThemeSwitcher: React.FC = () => {
  const { theme: currentTheme, changeTheme } = useTheme();

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost m-1">
          Theme <ChevronDownIcon className="size-4" />
        </div>
        <div
          tabIndex={0}
          className="menu dropdown-content bg-base-200 rounded-box w-56 p-2 shadow max-h-[calc(100vh-10rem)] overflow-scroll flex-row z-50"
        >
          <div className="grid grid-cols-1 gap-3 w-full">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => changeTheme(theme)}
                className="outline-base-content text-start outline-offset-4"
                data-set-theme={theme}
              >
                <span
                  className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                  data-theme={theme}
                >
                  <span className="grid grid-cols-5 grid-rows-3">
                    <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                      {currentTheme === theme ? (
                        <CheckIcon className="size-4" />
                      ) : (
                        <div className="size-4"></div>
                      )}
                      <span className="flex-grow text-sm">{theme}</span>{" "}
                      <span className="flex h-full shrink-0 flex-wrap gap-1">
                        <span className="bg-primary rounded-badge w-2"></span>{" "}
                        <span className="bg-secondary rounded-badge w-2"></span>{" "}
                        <span className="bg-accent rounded-badge w-2"></span>{" "}
                        <span className="bg-neutral rounded-badge w-2"></span>
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
