import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Products = () => {
  const [search, setSearch] = useState("");
  const [popupData, setPopupData] = useState(null);

  const openPopup = (img, title) => {
    setPopupData({ img, title });
  };
  const closePopup = () => setPopupData(null);

  // SAMPLE DATA – replace with real products
  const productList = [
    {
      id: 1,
      title: "Industrial Drill Machine",
      image: "/images/products/1.png",
      category: "Machinery",
    },
    {
      id: 2,
      title: "Cutting Tools Set",
      image: "/images/products/2.png",
      category: "Tools",
    },
    {
      id: 3,
      title: "Safety Gloves",
      image: "/images/products/3.png",
      category: "Safety",
    },
    {
      id: 4,
      title: "Bench Grinder",
      image: "/images/products/4.png",
      category: "Machinery",
    },
    {
      id: 5,
      title: "Hammer Set",
      image: "/images/products/5.png",
      category: "Tools",
    },
    {
      id: 6,
      title: "Safety Helmet",
      image: "/images/products/6.png",
      category: "Safety",
    },
  ];

  const categories = ["All", "Machinery", "Tools", "Safety"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = productList.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Breadcrumb />

      {popupData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
          onClick={closePopup} 
        >
          <div className="relative max-w-[90vw] max-h-[85vh]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">



            {/* IMAGE */}
            <img
              src={popupData.img}
              alt="Popup"
              className="max-w-[90vw] max-h-[75vh] rounded-t-xl shadow-lg border-2 border-red mx-auto"
            />
            {/* TITLE */}
            <h3 className="text-center text-white text-2xl font-vollkorn mb-4  bg-blue border-b border-x 
             border-red">
              {popupData.title}
            </h3>

            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 bg-red text-white w-10 h-10 rounded-full flex justify-center items-center text-2xl shadow-lg"
              onClick={closePopup}
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
      )}


      {/* 🔥 Product Page */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Title */}
          <h1 className="text-4xl font-vollkorn font-bold text-blue text-center mb-10" data-aos="fade-up">
            Our Products
          </h1>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" data-aos="fade-up">

            {/* Search */}
            <input
              type="text"
              data-aos="fade-up"
              placeholder="Search products..."
              className="w-full md:w-1/3 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-red outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Category Buttons */}
            <div className="flex flex-wrapp gap-2 sm:gap-4" data-aos="fade-up">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 md:px-5 py-2 rounded-lg text-sm font-semibold transition ${activeCategory === cat
                    ? "bg-red text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition group" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
                >
                  {/* IMAGE */}
                  <div
                    className="h-56 overflow-hidden cursor-pointer"
                    onClick={() => openPopup(product.image, product.title)}

                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full p-3 h-full object-contain group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="text-center py-2">
                    <h3 className="text-xl font-vollkorn py-1 font-bold text-white bg-blue">
                      {product.title}
                    </h3>
                    <p className="text-red text-sm mt-1">{product.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg col-span-full">
                No products found.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
