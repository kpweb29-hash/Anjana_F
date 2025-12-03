import React from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = [
    {
      _id: "1",
      name: "Industrial Drill Machine",
      image: "/images/products/1.png",
      category: "Machinery ",
    },
    {
      _id: "2",
      name: "Cutting Tools Set",
      image: "/images/products/2.png",
      category: "Tools",
    },
    {
      _id: "3",
      name: "Safety Gloves",
      image: "/images/products/3.png",
      category: "Safety",
    },
    {
      _id: "4",
      name: "Bench Grinder",
      image: "/images/products/4.png",
      category: "Machinery",
    },
  ];

  return (
    <div className="p-6">

      {/* PAGE TITLE ROW */}
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-brand font-bold text-blue">
          Product List
        </h1>

        <Link
          to="/admin/add-product"
          className="bg-red font-bold text-white px-4 py-2 rounded-md hover:bg-blue transition flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i> Add New Product
        </Link>
      </div>

     

      {/* MOBILE CARD VIEW */}
      <div className="grid grid-cols-1 gap-4">

        {products.map((prod) => (
          <div
            key={prod._id}
            className="relative bg-white shadow-md border border-red/40 hover:border-red/100 rounded-xl p-4"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              <img
                src={prod.image}
                className="h-16 w-16 object-cover rounded-lg border"
                alt={prod.name}
              />
              <div>
                <h3 className="text-brandBlue font-semibold">{prod.name}</h3>
                <p className="text-brandGrey text-sm">{prod.category}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="absolute right-3 bottom-1 flex justify-end gap-2 mt-4 text-lg">
              <Link
                to={`/admin/edit-product/${prod._id}`}
                className="bg-blue p-1 text-white rounded-lg hover:bg-red transition"
              >
                <i className="fa-solid fa-pen"></i>
              </Link>

              <button
                className=" bg-blue p-1 text-white rounded-lg hover:bg-red transition"
                onClick={() => alert("Delete logic will be added by backend")}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}

      </div>



    </div>
  );
}
