import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set default to true for dark mode

  useEffect(() => {
    setDarkMode(); // Set dark mode by default when component mounts
  }, []);

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setIsDarkMode(false);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        className="hidden"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label
        htmlFor="darkmode-toggle"
        className="cursor-pointer flex items-center"
      >
        <div
          className={`w-8 h-4 bg-gray-400 rounded-full duration-300 ease-in-out ${
            isDarkMode ? "bg-blue-600" : "bg-yellow-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              isDarkMode ? "translate-x-4" : ""
            }`}
          ></div>
        </div>
        <div className="mx-2">
          {isDarkMode ? (
            <Moon className="h-7 w-7 sm:h-8 sm:w-8  text-white" />
          ) : (
            <Sun className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-500" />
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
