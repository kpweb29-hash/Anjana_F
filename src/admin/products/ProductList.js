import React from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  
  // Your real product structure sample (you will replace with backend data later)
  const products = [
    {
      _id: "1",
      name: "SS Pipe 304",
      image: "/images/products/1.png",
      category: "Ferrous Metal",
      subcategory: "SS Pipes",
      description: "Stainless Steel Pipe 304 Grade",
    },
    {
      _id: "2",
      name: "SS Pipe 316",
      image: "/images/products/2.png",
      category: "Ferrous Metal",
      subcategory: "SS Pipes",
      description: "Stainless Steel Pipe 316 Grade",
    },
    {
      _id: "3",
      name: "Brass Round Rod",
      image: "/images/products/3.png",
      category: "Non-Ferrous Metal",
      subcategory: "Brass Rods",
      description: "High Quality Brass Round Rod",
    },
    {
      _id: "4",
      name: "Industrial Flange 150 Class",
      image: "/images/products/4.png",
      category: "Industrial Flanges",
      subcategory: "SS Flanges",
      description: "Stainless Steel Industrial Flange 150 Class",
    },
  ];

  return (
    <div className="p-6 md:pt-24">

      {/* PAGE TITLE ROW */}
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-brand font-bold text-blue">Product List</h1>

        <Link
          to="/admin/add-product"
          className="bg-red font-bold text-white px-4 py-2 rounded-md hover:bg-blue transition flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i> Add New Product
        </Link>
      </div>

      {/* DESKTOP TABLE VIEW */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue text-white">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Sub Category</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod._id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <img src={prod.image} className="h-14 w-14 object-cover rounded-lg border" alt={prod.name} />
                </td>
                <td className="p-3 font-semibold">{prod.name}</td>
                <td className="p-3">{prod.category}</td>
                <td className="p-3">{prod.subcategory}</td>
                <td className="p-3">{prod.description}</td>
                <td className="p-3 flex gap-2">
                  <Link
                    to={`/admin/edit-product/${prod._id}`}
                    className="bg-blue p-2 text-white rounded hover:bg-red transition"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </Link>

                  <button
                    className="bg-red p-2 text-white rounded hover:bg-blue transition"
                    onClick={() => alert("Delete logic will be added")}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden grid grid-cols-1 gap-4">

        {products.map((prod) => (
          <div
            key={prod._id}
            className="relative z-0 bg-white shadow-md border border-red/40 hover:border-red/100
             rounded-xl p-4"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              <img
                src={prod.image}
                className="h-16 w-16 object-cover rounded-lg border"
                alt={prod.name}
              />
              <div>
                <h3 className="text-blue font-semibold">{prod.name}</h3>
                <p className="text-sm text-gray-600">{prod.category}</p>
                <p className="text-xs text-gray-500">{prod.subcategory}</p>
                <p className="text-xs text-gray-500">{prod.description}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="absolute right-3 bottom-1 flex gap-2 mt-4 text-lg">
              <Link
                to={`/admin/edit-product/${prod._id}`}
                className="bg-blue p-1 text-white rounded-lg hover:bg-red transition"
              >
                <i className="fa-solid fa-pen"></i>
              </Link>

              <button
                className="bg-blue p-1 text-white rounded-lg hover:bg-red transition"
                onClick={() => alert("Delete logic will be added")}
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
