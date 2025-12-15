import React from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const blogs = [
    {
      _id: "1",
      title: "How Quality Raw Materials Impact Industrial Manufacturing",
      image: "/images/products/angle-channel.webp",
      shortDesc:
        "Learn why choosing high-grade ferrous & non-ferrous metals is essential...",
    },
    {
      _id: "2",
      title: "Top Trends Shaping the Future of the Metal Industry in India",
      image: "/images/products/ms-pipes.webp",
      shortDesc:
        "Discover major innovations transforming metal sourcing & industrial production...",
    },
    {
      _id: "3",
      title: "Why Non-Ferrous Metals Are Critical for Modern Engineering",
      image: "/images/products/non-ferrous-metal.png",
      shortDesc:
        "Explore how copper, aluminum, and brass enable high-performance engineering...",
    },
  ];

  return (
    <div className="p-6 md:pt-24">

      {/* PAGE HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-brand font-bold text-blue">Blog List</h1>

        <Link
          to="/admin/add-blog"
          className="bg-red font-bold text-white px-4 py-2 rounded-md hover:bg-blue transition flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i> Add New Blog
        </Link>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue text-white">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Short Description</th>
              <th className="p-3 text-left w-32">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-16 w-20 rounded-lg border object-cover"
                  />
                </td>
                <td className="p-3 font-semibold">{blog.title}</td>
                <td className="p-3 text-sm text-gray-700">
                  {blog.shortDesc.substring(0, 80)}...
                </td>

                <td className="p-3 flex gap-2">
                  <Link
                    to={`/admin/edit-blog/${blog._id}`}
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
      <div className="grid md:hidden grid-cols-1 gap-4 mt-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="relative bg-white shadow-md border border-red/40 rounded-xl p-4"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h3 className="font-bold text-blue">{blog.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{blog.shortDesc}</p>

            <div className="absolute right-3 bottom-3 flex gap-2">
              <Link
                to={`/admin/edit-blog/${blog._id}`}
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
