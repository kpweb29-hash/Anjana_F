import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

   // 🔥 Disable scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"; // Stop scrolling
    } else {
      document.body.style.overflow = "auto";   // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto";   // Cleanup
    };
  }, [sidebarOpen]);

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-26 left-0 w-full flex justify-between items-center p-4 shadow bg-white text-brandLight border-b-2 border-t-2 border-blue z-[9999]">

          <h1 className="font-brand text-blue font-bold text-2xl ">Admin Panel</h1>

          {/* Mobile Toggle Button */}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="border p-[2px]">
            <i
              className={`fa-solid text-blue ${
                sidebarOpen ? "fa-xmark" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>
            <div className="mt-16 md:mt-2">

        <Outlet />
            </div>
      </div>
    </div>
  );
}
