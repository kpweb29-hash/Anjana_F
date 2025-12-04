import React from "react";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Industrial Tools",
      image: "/images/products/angle-channel.webp",
      link: "/products",
    },
    {
      id: 2,
      title: "Machinery & Equipment",
      image: "/images/products/ferro-alloys.png",
      link: "/products",
    },
    {
      id: 3,
      title: "Hardware Supplies",
      image: "/images/products/ms-sheet.webp",
      link: "/products",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-blue" data-aos="fade-up">
            Our Product Categories
          </h2>
          <p className="mt-3 text-lg text-grey"   data-aos="fade-up" data-aos-delay="100">
            Explore a wide range of industrial-grade products we supply.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl shadow-lg overflow-hidden border group hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-2xl font-vollkorn font-bold text-dark">
                  {cat.title}
                </h3>

                <Link
                  to={cat.link}
                  className="inline-block mt-4 px-6 py-2 bg-red text-white text-lg font-semibold rounded-md hover:bg-red-700 transition"
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;
