import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function AddProduct() {
  const navigate = useNavigate();

  // State for categories and subcategories
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch subcategories from API
    fetch(`${BASE_URL}/subcategory`)
      .then(res => res.json())
      .then(data => {
        // Process the data to group subcategories by category
        const categoryMap = {};
        data.forEach(sub => {
          const catId = sub.categoryId._id;
          const catName = sub.categoryId.categoryName;
          if (!categoryMap[catId]) {
            categoryMap[catId] = {
              id: catId,
              name: catName,
              subcategories: []
            };
          }
          categoryMap[catId].subcategories.push({
            id: sub._id,
            name: sub.subCategoryName
          });
        });
        const categoryList = Object.values(categoryMap);
        setCategories(categoryList);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching subcategories:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Set initial category and subcategory once categories are loaded
    if (categories.length > 0 && !product.category) {
      const firstCategory = categories[0];
      setProduct(prev => ({
        ...prev,
        category: firstCategory.id,
        subcategory: firstCategory.subcategories[0]?.id || "",
      }));
    }
  }, [categories]);

  // FORM STATE
  const [product, setProduct] = useState({
    name: "",
    category: "",
    subcategory: "",
    description: "",
    image: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // Handle image preview
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setProduct({ ...product, image: file });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);

    const formData = new FormData();
    formData.append("productName", product.name);
    formData.append("categoryId", product.category);
    formData.append("subCategoryId", product.subcategory);
    formData.append("description", product.description);
    if (product.image) {
      formData.append("image", product.image);
    }

    console.log("Submitting product:", {
      productName: product.name,
      categoryId: product.category,
      subCategoryId: product.subcategory,
      description: product.description,
      hasImage: !!product.image
    });

    try {
      const token = localStorage.getItem("admin-token");
      console.log("Token:", token ? "Present" : "Missing");
      const response = await fetch(`${BASE_URL}/product`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      console.log("Response status:", response.status);
      if (response.ok) {
        alert("Product added successfully!");
        navigate("/admin/productlist");
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        alert(`Failed to add product: ${response.status} ${response.statusText}. ${errorText}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    } finally {
      setLoadingSubmit(false);
    }
  };

  // Category change updates subcategory
  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    const selectedCategory = categories.find(cat => cat.id === selectedCategoryId);
    setProduct({
      ...product,
      category: selectedCategoryId,
      subcategory: selectedCategory?.subcategories[0]?.id || "",
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

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

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
            {loading ? (
              <div className="border border-blue rounded-lg px-4 py-2 text-gray-500">Loading...</div>
            ) : (
              <select
                value={product.category}
                onChange={handleCategoryChange}
                className="border border-blue rounded-lg px-4 py-2"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            )}
          </div>

          {/* SUBCATEGORY */}
          <div className="flex flex-col">
            <label className="font-medium text-blue mb-1">Subcategory</label>
            {loading ? (
              <div className="border border-blue rounded-lg px-4 py-2 text-gray-500">Loading...</div>
            ) : (
              <select
                value={product.subcategory}
                onChange={(e) =>
                  setProduct({ ...product, subcategory: e.target.value })
                }
                className="border border-blue rounded-lg px-4 py-2"
              >
                {categories.find(cat => cat.id === product.category)?.subcategories.map((sub) => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                )) || []}
              </select>
            )}
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

          {/* SUBMIT BUTTON */}
          <div className="md:col-span-2 mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loadingSubmit}
              className="bg-blue hover:bg-red text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
            >
              {loadingSubmit ? "Adding..." : "Add Product"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
