import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Gallery = () => {
  const [popupData, setPopupData] = useState(null);

  const openPopup = (img) => {
    setPopupData(img);
  };

  const closePopup = () => setPopupData(null);

  // GALLERY IMAGES — Replace with your real images
  const galleryImages = [
    { id: 1, src: "/images/products/1.png" },
    { id: 2, src: "/images/products/2.png" },
    { id: 3, src: "/images/products/3.png" },
    { id: 4, src: "/images/products/4.png" },
    { id: 5, src: "/images/products/5.png" },
    { id: 6, src: "/images/products/6.png" },
  ];

  return (
    <>
      <Breadcrumb />

      {/* POPUP VIEWER */}
      {popupData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
          onClick={closePopup}
        >
          <div className="relative">
            <img
              src={popupData}
              alt="Popup"
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-xl border-2 border-red"
            />

            {/* CLOSE BUTTON */}
            <button
              className="absolute -top-4 -right-4 bg-red text-white w-10 h-10 rounded-full flex justify-center items-center text-2xl shadow-lg"
              onClick={closePopup}
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
      )}

      {/* GALLERY PAGE */}
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE TITLE */}
          <h1 className="text-4xl font-vollkorn font-bold text-blue text-center mb-12" data-aos="fade-up">
            Anjana Enterprise's Gallery
          </h1>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-xl shadow-lg border group cursor-pointer"
                onClick={() => openPopup(img.src)} data-aos="zoom-in"
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-38 sm:h-50 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;
