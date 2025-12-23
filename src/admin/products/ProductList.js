import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../BASEURL";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("admin-token");
        const response = await fetch(`${BASE_URL}/product`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const token = localStorage.getItem("admin-token");
        const response = await fetch(`${BASE_URL}/product/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setProducts(products.filter(prod => prod._id !== id));
          alert("Product deleted successfully!");
        } else {
          alert("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("An error occurred while deleting the product.");
      }
    }
  };

  if (loading) {
    return (
      <div className="p-6 md:pt-24">
        <div className="text-center">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="p-6 md:pt-24">

      {/* PAGE TITLE ROW */}
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-brand font-bold text-blue">Product List</h1>

        <Link
          to="/admin/add-product"
          className="bg-red font-bold text-white px-4 py-2 rounded-md hover:bg-blue transition flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i> Add New Product
        </Link>
      </div>

      {/* DESKTOP TABLE VIEW */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue text-white">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Sub Category</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod._id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <img src={prod.image} className="h-14 w-14 object-cover rounded-lg border" alt={prod.productName} />
                </td>
                <td className="p-3 font-semibold">{prod.productName}</td>
                <td className="p-3">{prod.categoryId?.categoryName || prod.category}</td>
                <td className="p-3">{prod.subCategoryId?.subCategoryName || prod.subcategory}</td>
                <td className="p-3">{prod.description}</td>
                <td className="p-3 flex gap-2">
                  <Link
                    to={`/admin/edit-product/${prod._id}`}
                    className="bg-blue p-2 text-white rounded hover:bg-red transition"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </Link>

                  <button
                    className="bg-red p-2 text-white rounded hover:bg-blue transition"
                    onClick={() => handleDelete(prod._id)}
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
      <div className="md:hidden grid grid-cols-1 gap-4">

        {products.map((prod) => (
          <div
            key={prod._id}
            className="relative z-0 bg-white shadow-md border border-red/40 hover:border-red/100
             rounded-xl p-4"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              <img
                src={prod.image}
                className="h-16 w-16 object-cover rounded-lg border"
                alt={prod.productName}
              />
              <div>
                <h3 className="text-blue font-semibold">{prod.productName}</h3>
                <p className="text-sm text-gray-600">{prod.categoryId?.categoryName || prod.category}</p>
                <p className="text-xs text-gray-500">{prod.subCategoryId?.subCategoryName || prod.subcategory}</p>
                <p className="text-xs text-gray-500">{prod.description}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="absolute right-3 bottom-1 flex gap-2 mt-4 text-lg">
              <Link
                to={`/admin/edit-product/${prod._id}`}
                className="bg-blue p-1 text-white rounded-lg hover:bg-red transition"
              >
                <i className="fa-solid fa-pen"></i>
              </Link>

              <button
                className="bg-blue p-1 text-white rounded-lg hover:bg-red transition"
                onClick={() => handleDelete(prod._id)}
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
