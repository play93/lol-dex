"use client";

import { ToggleDarkModeOnHTML, useThemeStore } from "@/store/useThemeStore";
import React from "react";

const ThemeSwitchButton = () => {
  const { toggleDarkMode, darkMode } = useThemeStore();
  ToggleDarkModeOnHTML();

  return (
    <div className="w-8 h-8 flex justify-center items-center bg-white dark:bg-black text-black dark:text-white p-2 rounded-full shadow-lg mx-4">
      <button onClick={toggleDarkMode} className="">
        {darkMode ? "☀" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeSwitchButton;
