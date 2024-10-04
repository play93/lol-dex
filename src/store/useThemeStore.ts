import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      darkMode: false, // 초기 상태는 다크모드가 비활성화된 상태
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })), // 다크 모드를 토글하는 함수
    }),
    {
      name: "theme-storage", // 로컬 스토리지에 저장될 이름
    }
  )
);

export const ToggleDarkModeOnHTML = () => {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
};
