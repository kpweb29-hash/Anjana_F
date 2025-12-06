import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  // MAIN CATEGORY → SUBCATEGORY
  const categories = {
    "Ferrous Metal": ["SS Pipes", "MS Pipes", "GI Pipes", "SS Rods"],
    "Non-Ferrous Metal": ["Brass Rods", "Copper Sheets", "Aluminium Flats"],
    "Industrial Flanges": ["SS Flanges", "MS Flanges", "Blind Flanges"],
    "Industrial Valves": ["Ball Valves", "Gate Valves", "Globe Valves"],
    "Industrial Fittings": ["Elbow Fittings", "Tee Fittings", "Reducer Fittings"],
    "Dairy Fittings": ["Dairy Bend", "Dairy Tee", "Dairy Clamp"],
    "Fasteners": ["Nut Bolt", "Washer", "Screws"],
    "Perforated Sheet": ["SS Perforated", "MS Perforated"],
  };

  // FORM STATE
  const [product, setProduct] = useState({
    name: "",
    category: "Ferrous Metal",
    subcategory: "SS Pipes",
    description: "",
    image: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  // Handle image preview
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setProduct({ ...product, image: file });
    }
  };

  // Category change updates subcategory
  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setProduct({
      ...product,
      category: selected,
      subcategory: categories[selected][0],
    });
  };

  return (
    <div className="p-6 md:pt-24">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-brand font-bold text-blue">
          Add New Product
        </h1>
        <Link to="/admin/productlist" className="text-2xl text-red">
          <i className="fa-regular fa-circle-left"></i>
        </Link>
      </div>

      {/* FORM CARD */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-red/80">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PRODUCT NAME */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Product Name</label>
            <input
              type="text"
              value={product.name}
              placeholder="Enter product name"
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
            />
          </div>

          {/* CATEGORY */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Category</label>
            <select
              value={product.category}
              onChange={handleCategoryChange}
              className="border border-blue rounded-lg px-4 py-2"
            >
              {Object.keys(categories).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* SUBCATEGORY */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Subcategory</label>
            <select
              value={product.subcategory}
              onChange={(e) =>
                setProduct({ ...product, subcategory: e.target.value })
              }
              className="border border-blue rounded-lg px-4 py-2"
            >
              {categories[product.category].map((sub) => (
                <option key={sub}>{sub}</option>
              ))}
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Description</label>
            <textarea
              rows="5"
              value={product.description}
              placeholder="Write detailed product description"
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
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
        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue hover:bg-red text-white px-6 py-3 rounded-lg font-medium transition"
            onClick={() => navigate("/admin/productlist")}
          >
            Add Product
          </button>
        </div>

      </div>
    </div>
  );
}
