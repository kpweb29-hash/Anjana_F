import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BASE_URL from "../BASEURL";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [totals, setTotals] = useState({
    totalProducts: 0,
    totalBlogs: 0,
    totalAdmins: 0
  });

  useEffect(() => {
    if (localStorage.getItem("admin-auth") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const token = localStorage.getItem("admin-token");
        const response = await fetch(`${BASE_URL}/admin/totals`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTotals(data);
        } else {
          console.error("Failed to fetch totals");
        }
      } catch (error) {
        console.error("Error fetching totals:", error);
      }
    };

    fetchTotals();
  }, []);
  return (<>
    {/* PAGE CONTENT */}
    <div className="p-6">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-vollkorn text-blue font-bold text-brandBlue md:mt-20 mb-8">
        Admin Dashboard
      </h1>

      {/* ======= TOP CARDS ======= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* TOTAL PRODUCTS */}
        <Link to="/admin/productlist">
          <div className="group bg-white shadow-md rounded-xl p-6 border border-red flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
            <div className="bg-blue text-white p-4 rounded-lg group-hover:scale-110 transition">
              <i className="fa-solid fa-box text-2xl"></i>
            </div>
            <div>
              <p className="text-gray text-sm">Total Products</p>
              <h2 className="text-xl font-bold font-vollkorn">{totals.totalProducts}</h2>
            </div>
          </div>
        </Link>

        {/* GALLERY IMAGES */}
        <Link to="/admin/BlogList">
          <div className="group bg-white shadow-md rounded-xl p-6 border border-red flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
            <div className="bg-blue text-white p-4 rounded-lg group-hover:scale-110 transition">
              <i className="fa-solid fa-image text-2xl"></i>
            </div>
            <div>
              <p className="text-brandGrey text-sm">Blogs</p>
              <h2 className="text-xl font-bold font-vollkorn">{totals.totalBlogs}</h2>
            </div>
          </div>
        </Link>

        {/* ADMIN USERS */}
        <div className="group bg-white shadow-md rounded-xl p-6 border border-red flex items-center gap-5 hover:shadow-xl transition cursor-pointer">
          <div className="bg-blue text-white p-4 rounded-lg group-hover:scale-110 transition">
            <i className="fa-solid fa-users text-2xl"></i>
          </div>
          <div>
            <p className="text-brandGrey text-sm">Admin Users</p>
            <h2 className="text-xl font-bold font-vollkorn">{totals.totalAdmins}</h2>
          </div>
        </div>

      </div>

      {/* ======= BOTTOM OVERVIEW BOX ======= */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-10 border border-red">
        <h2 className="text-lg font-semibold text-blue mb-3">
          Quick Overview
        </h2>
        <p className="text-grey leading-relaxed">
          Welcome to your admin panel. Use the sidebar to manage products,
          gallery images, and update website content. This dashboard provides
          a quick snapshot of important activity and system information.
        </p>
      </div>

    </div> </>
  );
}
