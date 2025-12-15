import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditBlog() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Demo blog data — replace with backend later
  const [blog, setBlog] = useState({
    title: "How Quality Raw Materials Impact Industrial Manufacturing",
    shortDesc:
      "High-quality raw materials improve manufacturing efficiency, durability, and performance.",
    fullDesc:
      "Using high-grade ferrous and non-ferrous metals plays a crucial role in industrial production...",
    image: "/images/products/angle-channel.webp",
  });

  const [preview, setPreview] = useState(blog.image);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-6 md:pt-24">

      {/* HEADER */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-brand font-bold text-blue">Edit Blog</h1>
        <Link to="/admin/bloglist" className="text-2xl text-red">
          <i className="fa-regular fa-circle-left"></i>
        </Link>
      </div>

      <div className="bg-white p-6 shadow-md rounded-xl border border-red mt-4">

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BLOG TITLE */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Blog Title</label>
            <input
              type="text"
              value={blog.title}
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
          </div>

         

          {/* FULL DESCRIPTION */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Full Description</label>
            <textarea
              rows="7"
              value={blog.fullDesc}
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
              onChange={(e) => setBlog({ ...blog, fullDesc: e.target.value })}
            ></textarea>
          </div>

          {/* IMAGE UPLOAD */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Blog Image</label>

            <img
              src={preview}
              alt="Blog"
              className="w-full h-56 object-cover border border-blue rounded-lg p-2 mb-3"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImagePreview}
              className="border border-blue rounded-lg px-3 py-2"
            />
          </div>

        </form>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="px-6 py-2 rounded-lg border border-blue bg-white hover:bg-red hover:text-white transition"
            onClick={() => navigate("/admin/bloglist")}
          >
            Cancel
          </button>

          <button
            className="px-6 py-2 rounded-lg bg-blue text-white hover:bg-red transition"
            onClick={() => navigate("/admin/bloglist")}
          >
            Update Blog
          </button>
        </div>

      </div>
    </div>
  );
}
