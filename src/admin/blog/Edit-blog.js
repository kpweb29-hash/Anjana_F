import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function EditBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    shortDescription: "",
    image: null,
  });
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const token = localStorage.getItem('admin-token');
      try {
        const response = await fetch(`${BASE_URL}/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBlog({
            title: data.title,
            shortDescription: data.shortDescription,
            image: data.image,
          });
          setPreview(data.image);
        } else {
          alert('Failed to fetch blog');
        }
      } catch (error) {
        console.error(error);
        alert('Error fetching blog');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setBlog({ ...blog, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("shortDescription", blog.shortDescription);
    if (blog.image && typeof blog.image !== 'string') {
      formData.append("image", blog.image);
    }

    const token = localStorage.getItem('admin-token');
    try {
      const response = await fetch(`${BASE_URL}/blog/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.ok) {
        alert("Blog updated successfully!");
        navigate("/admin/bloglist");
      } else {
        alert('Failed to update blog');
      }
    } catch (error) {
      console.error(error);
      alert('Error updating blog');
    }
  };

  if (loading) {
    return <div className="p-6 md:pt-24">Loading blog...</div>;
  }

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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

          {/* SHORT DESCRIPTION */}
          {/* <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Short Description</label>
            <input
              type="text"
              value={blog.shortDescription}
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
              onChange={(e) => setBlog({ ...blog, shortDescription: e.target.value })}
            />
          </div> */}

          {/* FULL DESCRIPTION */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-blue mb-1">Description</label>
            <textarea
              rows="7"
              value={blog.shortDescription}
              className="border border-blue rounded-lg px-4 py-2 focus:outline-brandBlue"
              onChange={(e) => setBlog({ ...blog, shortDescription: e.target.value })}
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

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4 mt-8 md:col-span-2">
            <button
              type="button"
              className="px-6 py-2 rounded-lg border border-blue bg-white hover:bg-red hover:text-white transition"
              onClick={() => navigate("/admin/bloglist")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue text-white hover:bg-red transition"
            >
              Update Blog
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
