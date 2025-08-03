import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false); // only for Theme1

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(result);
  }, [search, products]);

  if (loading) return <p className="p-6 text-lg">Loading products...</p>;

  // 🌞 THEME 1 — With Toggleable Sidebar
  if (theme === "theme1") {
  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-100 border-r p-4 z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h2 className="text-xl font-semibold mb-4">🌟 Menu</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Home</li>
          <li>Products</li>
          <li>Profile</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-6xl mx-auto">
        {/* Menu Button + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden px-4 py-2 border rounded text-sm bg-white z-50"
          >
            {sidebarOpen ? "✖ Close" : "☰ Menu"}
          </button>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-64"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded shadow p-4">
              <img
                src={product.images[0]}
                className="h-32 object-contain mx-auto mb-2"
                alt={product.title}
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}



  // 🌙 THEME 2 — With Search Bar
  if (theme === "theme2") {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 p-4 text-white hidden md:block">
          <h2 className="text-2xl font-bold mb-4">🧭 Sidebar</h2>
          <ul className="space-y-2">
            <li>Dashboard</li>
            <li>Categories</li>
            <li>Settings</li>
          </ul>
        </aside>
        <main className="flex-1 p-6 space-y-6">
          <div className="flex justify-end mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 border text-white w-full md:w-64"
            />
          </div>

          <h1 className="text-4xl font-bold">🌙 Dark Store</h1>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-gray-700 rounded shadow p-4 text-white">
                <img
                  src={product.images[0]}
                  className="h-32 object-contain mx-auto mb-2"
                  alt={product.title}
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-blue-400 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // 🚀 THEME 3 — Sidebar + Search
  if (theme === "theme3") {
    return (
      <div className="flex flex-col md:flex-row min-h-screen bg-pink-100">
        <aside className="md:w-60 bg-pink-300 text-pink-900 font-bold p-4 sticky top-20 z-10 md:relative">
          <h2 className="text-xl mb-3">🎉 Explore</h2>
          <ul className="space-y-2">
            <li>Store</li>
            <li>Offers</li>
            <li>Wishlist</li>
          </ul>
        </aside>
        <main className="flex-1 p-4">
          <div className="flex justify-end mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded w-full md:w-64 border-pink-400 border"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-pink-800">🚀 Fun Product Grid</h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-all"
              >
                <img
                  src={product.images[0]}
                  className="h-32 object-contain mx-auto mb-2"
                  alt={product.title}
                />
                <h3 className="text-pink-700 text-md font-bold">{product.title}</h3>
                <p className="text-green-600 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return null;
};

export default Home;
