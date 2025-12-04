import React from "react";
import { Link, useLocation } from "react-router-dom";

const formatName = (name) => {
  if (!name) return "";
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

const BreadcrumbProduct = () => {
  const { pathname } = useLocation();

  // Split path: "/products/ferrous/ss-pipes/ss-pipe-304"
  const pathParts = pathname.split("/").filter((x) => x);

  // Breadcrumb items with accumulated links
  const breadcrumbLinks = pathParts.map((part, index) => {
    const url = "/" + pathParts.slice(0, index + 1).join("/");
    return { name: formatName(part), url };
  });

  const pageTitle = breadcrumbLinks.length
    ? breadcrumbLinks[breadcrumbLinks.length - 1].name
    : "Home";

  return (
    <section
      className="relative w-full py-28 md:py-36 text-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
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
        <h1
          className="text-4xl md:text-5xl font-vollkorn font-bold drop-shadow-lg"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          {pageTitle}
        </h1>

        {/* BREADCRUMB PATH */}
        <div
          className="mt-3 text-gray-200 text-lg flex items-center gap-2 flex-wrap"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <Link to="/" className="hover:text-red transition">
            Home
          </Link>

          {breadcrumbLinks.map((crumb, index) => (
            <React.Fragment key={index}>
              <span>/</span>
              {index === breadcrumbLinks.length - 1 ? (
                <span className="font-semibold">{crumb.name}</span>
              ) : (
                <Link to={crumb.url} className="hover:text-red transition">
                  {crumb.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbProduct;
