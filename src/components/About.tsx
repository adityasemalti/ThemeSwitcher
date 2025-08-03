const About = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">ℹ️ About Us</h1>
      <p className="text-lg leading-relaxed">
        Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400 theme3:text-pink-600">MultiThemeApp</span> — a dynamic React + TypeScript application that supports multiple themes, layouts, and beautiful UI transitions.
      </p>
      <p>
        This project is built with:
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>⚛️ React with TypeScript</li>
          <li>🎨 Tailwind CSS with custom theme support</li>
          <li>🌐 React Router for multiple pages</li>
          <li>📦 Live product data from DummyJSON API</li>
        </ul>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Created as part of a frontend developer assessment challenge.
      </p>
    </div>
  );
};

export default About;
