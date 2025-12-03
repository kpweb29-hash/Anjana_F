import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EditProduct() {

     const navigate = useNavigate();
  // Demo product to edit (backend will replace this later)
  const [product, setProduct] = useState({
    name: "Wireless Radio Remote",
    category: "Remote Control",
    description:
      "High-performance industrial wireless remote for crane and hoist control.",
    image: "/mnt/data/wireless radio remote 1.jpeg",
  });

  const [preview, setPreview] = useState(product.image);

  // Handle File Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-6">

       <div className="flex justify-between">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-brand font-bold text-blue mb-6">
          Edit Product
        </h1>
        <Link to="/admin/productlist" className="text-2xl text-red" ><i class="fa-regular fa-circle-left"></i></Link>
      </div>

      {/* FORM CONTAINER */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-red">

        {/* GRID FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div>
            {/* Product Name */}
            <label className="block mb-2 text-blue font-medium">
              Product Name
            </label>
            <input
              type="text"
              value={product.name}
              className="w-full px-4 py-2 border rounded-lg border-blue focus:outline-brandBlue"
            />

           

            {/* Description */}
            <label className="block mt-5 mb-2 text-blue font-medium">
              Description
            </label>
            <textarea
              value={product.description}
              rows="6"
              className="w-full px-4 py-2 border rounded-lg border-blue focus:outline-brandBlue"
            ></textarea>
          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* Image Preview */}
            <label className="block mb-2 text-blue font-medium">
              Product Image
            </label>

            <img
              src={preview}
              alt="Preview"
              className="w-full h-56 object-contain rounded-lg border border-blue shadow mb-3"
            />

            {/* Upload Input */}
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded-lg border-blue bg-white cursor-pointer"
            />

          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-8">

          {/* CANCEL */}
          <button className="px-6 py-2 rounded-lg border border-brandGrey bg-blue hover:bg-red text-white transition"  onClick={() => navigate("/admin/productlist")}>
            Cancel
          </button>

          {/* UPDATE */}
          <button className="px-6 py-2 rounded-lg bg-blue text-white hover:bg-red transition"  onClick={() => navigate("/admin/productlist")}>
            Update Product
          </button>

        </div>

      </div>
    </div>
  );
}
