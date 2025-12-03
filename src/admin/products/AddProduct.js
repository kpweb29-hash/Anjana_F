import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-brand font-bold text-blue mb-6">
          Add New Product
        </h1>
        <Link to="/admin/productlist" className="text-2xl text-red" ><i class="fa-regular fa-circle-left"></i></Link>
      </div>

      {/* FORM CARD */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-red/80">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PRODUCT NAME */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
            />
          </div>

         

          {/* LONG DESCRIPTION */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">
              Description
            </label>
            <textarea
              rows="5"
              placeholder="Write detailed product description"
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
            ></textarea>
          </div>

          {/* IMAGE UPLOAD */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Product Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImagePreview}
              className="border border-blue rounded-lg px-3 py-2"
            />

            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-4 h-40 object-contain border border-blue rounded-lg p-2"
              />
            )}
          </div>

        </form>

        {/* SUBMIT BUTTON */}
        <div className="mt-6">
          <button className="bg-blue hover:bg-red text-white px-6 py-3 rounded-lg font-medium transition"  onClick={() => navigate("/admin/productlist")}>
            Add Product
          </button>
        </div>

      </div>
    </div>
  );
}
