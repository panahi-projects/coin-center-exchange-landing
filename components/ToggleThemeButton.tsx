"use client";
import { useToggleMode } from "@/stores/useToggleMode";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { Button } from "./ui/button";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useToggleMode();
  return (
    <div className="border-solid border-2 border-foreground rounded-full w-8 h-8 flex items-center justify-center">
      <Button onClick={toggleTheme} variant={"ghost"}>
        {theme === "dark" ? (
          <HiOutlineSun size={24} />
        ) : (
          <HiOutlineMoon size={24} />
        )}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
