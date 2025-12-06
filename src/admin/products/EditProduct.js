import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  // CATEGORY & SUBCATEGORY DATA (you can later load from backend)
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

  // SAMPLE DATA (replace by backend fetch later)
  const [product, setProduct] = useState({
    name: "SS Pipe 304",
    category: "Ferrous Metal",
    subcategory: "SS Pipes",
    description: "Stainless Steel Pipe 304 Grade",
    image: "/images/products/ss304.png",
  });

  const [preview, setPreview] = useState(product.image);

  // 🔹 Handle category change
  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setProduct({
      ...product,
      category: selected,
      subcategory: categories[selected][0], // auto-select 1st subcategory
    });
  };

  // 🔹 Handle subcategory change
  const handleSubCategoryChange = (e) => {
    setProduct({ ...product, subcategory: e.target.value });
  };

  // 🔹 Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-6 md:pt-24">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-brand font-bold text-blue">
          Edit Product
        </h1>

        <Link to="/admin/productlist" className="text-3xl text-red">
          <i className="fa-regular fa-circle-left"></i>
        </Link>
      </div>

      {/* FORM BOX */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-red">

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT SIDE FORM */}
          <div>

            {/* PRODUCT NAME */}
            <label className="block mb-2 text-blue font-medium">
              Product Name
            </label>
            <input
              type="text"
              value={product.name}
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg border-blue focus:outline-brandBlue"
            />

            {/* CATEGORY */}
            <label className="block mt-5 mb-2 text-blue font-medium">
              Category
            </label>
            <select
              value={product.category}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 border rounded-lg border-blue"
            >
              {Object.keys(categories).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>

            {/* SUBCATEGORY */}
            <label className="block mt-5 mb-2 text-blue font-medium">
              Subcategory
            </label>
            <select
              value={product.subcategory}
              onChange={handleSubCategoryChange}
              className="w-full px-4 py-2 border rounded-lg border-blue"
            >
              {categories[product.category].map((sub) => (
                <option key={sub}>{sub}</option>
              ))}
            </select>

            {/* DESCRIPTION */}
            <label className="block mt-5 mb-2 text-blue font-medium">
              Description
            </label>
            <textarea
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              rows="6"
              className="w-full px-4 py-2 border rounded-lg border-blue"
            ></textarea>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div>
            <label className="block mb-2 text-blue font-medium">
              Product Image
            </label>

            {/* IMAGE PREVIEW */}
            <img
              src={preview}
              className="w-full h-56 object-contain rounded-lg border border-blue shadow mb-3"
              alt="Preview"
            />

            {/* IMAGE UPLOAD */}
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded-lg border-blue bg-white cursor-pointer"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="px-6 py-2 rounded-lg border border-brandGrey bg-blue hover:bg-red text-white transition"
            onClick={() => navigate("/admin/productlist")}
          >
            Cancel
          </button>

          <button
            className="px-6 py-2 rounded-lg bg-blue text-white hover:bg-red transition"
            onClick={() => navigate("/admin/productlist")}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}
