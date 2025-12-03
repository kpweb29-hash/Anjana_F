import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Industrial Drill Machine",
      image: "/images/products/1.png",
      desc: "High-performance drilling machine for workshops & industries.",
      link: "/products",
    },
    {
      id: 2,
      name: "Cutting Tools Set",
      image: "/images/products/2.png",
      desc: "Durable cutting tools designed for precision and strength.",
      link: "/products",
    },
    {
      id: 3,
      name: "Electric Grinder",
      image: "/images/products/3.png",
      desc: "Heavy-duty grinder for industrial cutting and shaping tasks.",
      link: "/products",
    },
    {
      id: 4,
      name: "Safety Equipment Kit",
      image: "/images/products/4.png",
      desc: "High-quality safety gear for workplace protection.",
      link: "/products",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-vollkorn font-bold text-red" data-aos="fade-up">
            Featured Products
          </h2>
          <p className="mt-3 text-lg text-grey" data-aos="fade-up">
            Our most trusted and frequently purchased items.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white text-dark rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              data-aos="zoom-in-up"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-vollkorn font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                <Link
                  to={item.link}
                  className="inline-block mt-4 px-5 py-2 bg-red text-white rounded-md font-semibold hover:bg-red-700 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
