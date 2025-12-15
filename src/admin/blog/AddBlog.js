import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="p-6 md:pt-24">

      {/* HEADER */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-brand font-bold text-blue">Add New Blog</h1>
        <Link to="/admin/bloglist" className="text-2xl text-red">
          <i className="fa-regular fa-circle-left"></i>
        </Link>
      </div>

      {/* FORM CARD */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-red/80 mt-4">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BLOG TITLE */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Blog Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
            />
          </div>


          {/* FULL DESCRIPTION */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Full Description</label>
            <textarea
              rows="6"
              placeholder="Write detailed blog content..."
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
            ></textarea>
          </div>

          {/* BLOG IMAGE */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Blog Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImagePreview}
              className="border border-blue rounded-lg px-3 py-2 cursor-pointer"
            />

            {/* IMAGE PREVIEW */}
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-4 h-48 object-cover rounded-lg border border-blue p-2"
              />
            )}
          </div>

        </form>

        {/* SUBMIT BUTTON */}
        <div className="mt-6">
          <button
            className="bg-blue hover:bg-red text-white px-6 py-3 rounded-lg font-medium transition"
            onClick={() => navigate("/admin/bloglist")}
          >
            Add Blog
          </button>
            <button
            className="ml-2 px-6 py-2 rounded-lg border border-blue bg-white hover:bg-red hover:text-white transition"
            onClick={() => navigate("/admin/bloglist")}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
