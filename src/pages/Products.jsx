import { useState } from "react";
import cattle from '../assets/cattle.jpg';
import house from '../assets/house.jpeg';
import land from '../assets/land.jpg';

const someProducts = [
  {
    id: "111",
    name: "Cow",
    price: 15000,
    image: cattle,
    category: "animals", 
    date: "11-11-2008"
  },
  {
    id: "113",
    name: "Plus One House",
    price: 1000000,
    image: house,
    category: "Houses", 
    date: "11-11-2009"
  },
  {
    id: "114",
    name: "Land At Adi haki",
    price: 500000,
    image: land,
    category: "Land", 
    date: "11-11-2010"
  },
  {
    id: "12",
    name: "Ox",
    price: 25000,
    image: cattle,
    category: "animals", 
    date: "11-12-2008"
  },
  {
    id: "115",
    name: "Land At 70 kare",
    price: 1500000,
    image: land,
    category: "Land", 
    date: "11-11-2008"
  },
  {
    id: "116",
    name: "70 kare house",
    price: 2000000,
    image: house,
    category: "Houses", 
    date: "8-11-2008"
  },
]

const Products = ({ productsList = someProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleCategoryChange = (category) => setFilteredCategory(category);

  const filteredProducts = productsList
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        (filteredCategory === "All" || product.category === filteredCategory)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "highest-price":
          return b.price - a.price;
        case "lowest-price":
          return a.price - b.price;
        case "a-z":
          return a.name.localeCompare(b.name);
        case "z-a":
          return b.name.localeCompare(a.name);
        default:
          return b.date - a.date; // Assuming `date` is a timestamp
      }
    });

  return (
    <div className="min-h-screen bg-blue-200 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-1/3 px-4 py-2 rounded bg-white text-black shadow-md"
          />

          {/* Sort */}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="w-full md:w-1/3 px-4 py-2 rounded bg-white text-black shadow-md"
          >
            <option value="latest">Sort by: Latest</option>
            <option value="highest-price">Highest Price</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>

        <div className="flex gap-4">
          {/* Filters */}
          <aside className="w-full md:w-1/4 bg-white text-black rounded shadow-md p-4">
            <h2 className="font-bold text-lg mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Category</h3>
              <ul className="space-y-2">
                {["All", "Houses", "Rental", "Land", "animals"].map((cat) => (
                  <li
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`cursor-pointer p-2 rounded ${
                      filteredCategory === cat
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-100"
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Price Range</h3>
              <div>
                <label>Min Price: {minPrice}</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label>Max Price: {maxPrice}</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 rounded-lg shadow-lg p-6 text-center">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white bg-opacity-70 text-black rounded shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-blue-500 font-semibold">
                    {product.price} ብር
                  </p>
                  <button className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
