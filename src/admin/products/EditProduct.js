import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  // State for categories and subcategories
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // State for product
  const [product, setProduct] = useState({
    productName: "",
    categoryId: "",
    subCategoryId: "",
    description: "",
    image: "",
  });

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Fetch categories and subcategories
  useEffect(() => {
    fetch(`${BASE_URL}/subcategory`)
      .then(res => res.json())
      .then(data => {
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
        setLoadingCategories(false);
      })
      .catch(err => {
        console.error('Error fetching subcategories:', err);
        setLoadingCategories(false);
      });
  }, []);

  // Fetch product data
  useEffect(() => {
    if (id) {
      const token = localStorage.getItem("admin-token");
      fetch(`${BASE_URL}/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          setProduct({
            productName: data.productName || "",
            categoryId: data.categoryId?._id || data.categoryId || "",
            subCategoryId: data.subCategoryId?._id || data.subCategoryId || "",
            description: data.description || "",
            image: data.image || "",
          });
          setPreview(data.image || "");
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching product:', err);
          setLoading(false);
        });
    }
  }, [id]);

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    const selectedCategory = categories.find(cat => cat.id === selectedCategoryId);
    setProduct({
      ...product,
      categoryId: selectedCategoryId,
      subCategoryId: selectedCategory?.subcategories[0]?.id || "",
    });
  };

  // Handle subcategory change
  const handleSubCategoryChange = (e) => {
    setProduct({ ...product, subCategoryId: e.target.value });
  };

  // Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setProduct({ ...product, image: file });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("categoryId", product.categoryId);
    formData.append("subCategoryId", product.subCategoryId);
    formData.append("description", product.description);
    if (product.image && typeof product.image !== 'string') {
      formData.append("image", product.image);
    }

    try {
      const token = localStorage.getItem("admin-token");
      const response = await fetch(`${BASE_URL}/product/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Product updated successfully!");
        navigate("/admin/productlist");
      } else {
        const errorText = await response.text();
        alert(`Failed to update product: ${response.status} ${response.statusText}. ${errorText}`);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("An error occurred while updating the product.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading || loadingCategories) {
    return (
      <div className="p-6 md:pt-24">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

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

        <form onSubmit={handleSubmit}>

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT SIDE FORM */}
          <div>

            {/* PRODUCT NAME */}
            <label className="block mb-2 text-blue font-medium">
              Product Name
            </label>
            <input
              type="text"
              value={product.productName}
              onChange={(e) =>
                setProduct({ ...product, productName: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg border-blue focus:outline-brandBlue"
            />

            {/* CATEGORY */}
            <label className="block mt-5 mb-2 text-blue font-medium">
              Category
            </label>
            <select
              value={product.categoryId}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 border rounded-lg border-blue"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* SUBCATEGORY */}
            <label className="block mt-5 mb-2 text-blue font-medium">
              Subcategory
            </label>
            <select
              value={product.subCategoryId}
              onChange={handleSubCategoryChange}
              className="w-full px-4 py-2 border rounded-lg border-blue"
            >
              {categories.find(cat => cat.id === product.categoryId)?.subcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>{sub.name}</option>
              )) || []}
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
            type="button"
            className="px-6 py-2 rounded-lg border border-brandGrey bg-blue hover:bg-red text-white transition"
            onClick={() => navigate("/admin/productlist")}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={updating}
            className="px-6 py-2 rounded-lg bg-blue text-white hover:bg-red transition disabled:opacity-50"
          >
            {updating ? "Updating..." : "Update Product"}
          </button>
        </div>

        </form>
      </div>
    </div>
  );
}
