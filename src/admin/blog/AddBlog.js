import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function AddBlog() {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [blog, setBlog] = useState({
    title: "",
    shortDescription: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setBlog({ ...blog, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("shortDescription", blog.shortDescription);
    if (blog.image) {
      formData.append("image", blog.image);
    }

    try {
      const token = localStorage.getItem("admin-token");
      const response = await fetch(`${BASE_URL}/blog`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Blog added successfully!");
        navigate("/admin/bloglist");
      } else {
        const errorText = await response.text();
        alert(`Failed to add blog: ${response.status} ${response.statusText}. ${errorText}`);
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
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

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

          {/* BLOG TITLE */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Blog Title</label>
            <input
              type="text"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              placeholder="Enter blog title"
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
              required
            />
          </div>

          {/* SHORT DESCRIPTION */}
          {/* <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Short Description</label>
            <textarea
              rows="3"
              value={blog.shortDescription}
              onChange={(e) => setBlog({ ...blog, shortDescription: e.target.value })}
              placeholder="Enter short description..."
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
              required
            ></textarea>
          </div> */}

          {/* FULL DESCRIPTION */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Short Description</label>
            <textarea
              rows="6"
              value={blog.shortDescription}
              onChange={(e) => setBlog({ ...blog, shortDescription: e.target.value })}
              placeholder="Write detailed blog content..."
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
              required
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
              required
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

        {/* SUBMIT BUTTON */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue hover:bg-red text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Adding Blog..." : "Add Blog"}
          </button>
            <button
            type="button"
            disabled={loading}
            className="ml-2 px-6 py-2 rounded-lg border border-blue bg-white hover:bg-red hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => navigate("/admin/bloglist")}
          >
            Cancel
          </button>
        </div>

        </form>

      </div>
    </div>
  );
}
