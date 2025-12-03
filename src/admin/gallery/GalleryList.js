import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GalleryList() {
  // Dummy gallery images
  const [images] = useState([
    {
      id: 1,
      src: "/images/products/1.png",
    },
    {
      id: 2,
      src: "/images/products/2.png",
    },
    {
      id: 3,
      src: "/images/products/3.png",
    },
    {
      id: 4,
      src: "/images/products/4.png",
    },
    {
      id: 5,
      src: "/images/products/5.png",
    },
    {
      id: 6,
      src: "/images/products/6.png",
    },
  ]);

  return (
      <div className="p-6">

        {/* PAGE TITLE */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue">
            Gallery Images
          </h1>

          <Link
            to="/admin/add-gallery"
            className="bg-red text-white px-5 py-2 rounded-lg hover:bg-blue transition"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Add Image
          </Link>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white border border-brandLight rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />


              <button className="w-full bg-blue text-white py-2 rounded-lg hover:bg-red transition">
                <i className="fa-solid fa-trash mr-2"></i>
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
  );
}
