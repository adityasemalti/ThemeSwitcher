import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeContent = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === "theme1") {
    return (
      <div className="p-8 max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Welcome to Theme 1</h2>
        <p>This is a minimalist layout using light background and sans-serif font.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Click Me</button>
      </div>
    );
  }

  if (theme === "theme2") {
    return (
      <div className="flex">
        <aside className="w-1/4 bg-gray-800 p-4 min-h-screen">Sidebar Menu</aside>
        <main className="flex-1 p-6 space-y-3">
          <h2 className="text-3xl font-bold">Welcome to Theme 2</h2>
          <p>This layout uses a dark sidebar and serif fonts.</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Click Me</button>
        </main>
      </div>
    );
  }

  if (theme === "theme3") {
    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded shadow-md p-4 transition hover:scale-105">
            <h3 className="text-lg font-bold">Card {i}</h3>
            <p className="text-sm">Fun and colorful layout using Pacifico font!</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default ThemeContent;
