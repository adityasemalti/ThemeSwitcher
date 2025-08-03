import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 theme-cyberpunk:bg-cyberpunkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-4 items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white theme-cyberpunk:text-cyberpunkText">
          🌈 MultiThemeApp
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-wrap gap-3 items-center">
          <button
            className="text-black dark:text-white theme-cyberpunk:text-cyberpunkText border px-3 py-2 rounded-full hover:scale-105 transition"
            onClick={() => navigate("/about")}
          >
            About Us
          </button>
          <button
            className="text-black dark:text-white theme-cyberpunk:text-cyberpunkText border px-3 py-2 rounded-full hover:scale-105 transition"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>

          {/* Theme Dropdown */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            className="bg-gray-100 dark:bg-gray-700 theme-cyberpunk:bg-cyberpunkAccent text-sm px-3 py-2 rounded-md text-gray-900 dark:text-white theme-cyberpunk:text-black"
          >
            <option value="theme1">🌞 Theme 1</option>
            <option value="theme2">🌙 Theme 2</option>
            <option value="theme3">🚀 Theme 3</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
