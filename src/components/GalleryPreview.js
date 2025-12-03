import React from "react";
import { Link } from "react-router-dom";

const GalleryPreview = () => {
    const images = [
        "/images/products/1.png",
        "/images/products/2.png",
        "/images/products/3.png",
        "/images/products/4.png",
    ];

    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-vollkorn font-bold text-blue" data-aos="fade-up">
                        Our Gallery
                    </h2>
                    <p className="mt-3 text-lg text-grey font-montserrat" data-aos="fade-up">
                        A quick look at some of our industrial tools, machinery, and work.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-md group"
                            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
                        >
                            <img
                                src={img}
                                alt="Gallery"
                                className="object-contain w-full h-48 md:h-60 group-hover:scale-110 transition duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center mt-10">
                    <Link
                        to="/gallery"
                        className="px-7 py-3 bg-red text-white text-lg font-semibold rounded-md hover:bg-red-700 transition"
                    >
                        View Full Gallery
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default GalleryPreview;
