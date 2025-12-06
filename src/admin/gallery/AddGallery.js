import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddGallery() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
      <div className="p-6 md:pt-24">
          

         <div className="flex justify-between">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-brand font-bold text-blue mb-6">
         Add Gallery Image
        </h1>
        <Link to="/admin/gallerylist" className="text-2xl text-red" ><i class="fa-regular fa-circle-left"></i></Link>
      </div>

        <div className="bg-white p-6 rounded-xl shadow border border-red max-w-xl">

          {/* IMAGE PREVIEW */}
          {preview && (
            <img
              src={preview}
              className="w-full h-52 object-cover rounded-md mb-4"
              alt="Preview"
            />
          )}

          <label className="block mb-2 font-medium text-blue">Image Title</label>
          <input
            type="text"
            className="w-full border border-blue p-2 rounded mb-4"
            placeholder="Enter Image Title"
          />

          <label className="block mb-2 font-medium text-blue">Upload Image</label>
          <input
            type="file"
            className="w-full border border-blue p-2 rounded mb-6"
            onChange={handleImage}
          />

          <button className="bg-blue text-white px-6 py-2 rounded hover:bg-red transition">
            Upload Image
          </button>
        </div>
      </div>
  );
}
