import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();

    // Extract page name from URL
    const pageName = location.pathname
        .replace("/", "")
        .replace("-", " ")
        .replace("/", "")
        || "Home";

    const formattedName =
        pageName.charAt(0).toUpperCase() + pageName.slice(1);

    return (
        <section className="relative w-full py-28 md:py-36 text-white" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/logo/breadcrumb-bg.png"
                    alt="Breadcrumb Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* PAGE TITLE */}
                <h1 className="text-4xl md:text-5xl font-vollkorn font-bold drop-shadow-lg" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    {formattedName}  
                </h1>

                {/* BREADCRUMB LINE */}
                <div className="mt-3 text-gray-200 text-lg flex items-center gap-2" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">

                    <Link to="/" className="hover:text-red transition">
                        Home
                    </Link>

                    <span>/</span>

                    <span className=" font-semibold">
                        {formattedName}
                    </span>


                </div>

            </div>
        </section>

    );
};

export default Breadcrumb;
