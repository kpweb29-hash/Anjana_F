import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
    return (
        <section className="py-14 bg-blue text-white relative overflow-hidden">

            {/* Background Shape */}
            <div className="absolute inset-0 bg-dark/50 z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Content */}
                <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* LEFT */}
                    <div className="md:w-2/3" data-aos="fade-right"
                        data-aos-offset="150"
                        data-aos-easing="ease-in-sine">
                        <h2 className="text-4xl md:text-5xl font-vollkorn font-bold leading-tight" >
                            Need High-Quality Industrial Products?
                        </h2>

                        <p className="text-lg text-grey font-montserrat mt-4 max-w-xl" >
                            Contact us today for inquiries, pricing, and fast supply of all your
                            industrial tools, machinery, and hardware needs.
                        </p>
                    </div>

                    {/* RIGHT CTA BUTTON */}
                    <div className="flex flex-col items-center gap-4" data-aos="fade-left"
                        data-aos-offset="150"
                        data-aos-easing="ease-in-sine">
                        <Link
                            to="/contact"
                            className="px-10 py-4 bg-red text-white text-xl font-semibold rounded-md shadow-lg hover:bg-grey transition"
                        >
                            Contact Us
                        </Link>

                        {/* Phone */}
                        <a
                            href="tel:+91 99984 88480"
                            className="text-lg font-semibold flex items-center gap-2 hover:text-red transition"
                        >
                            <i className="fa-solid fa-phone text-red text-2xl"></i>
                            +91 99984 88480
                        </a>

                        {/* Address */}
                        <div className="text-center">
                            <a href="/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-red" >
                                <p className=" text-sm flex items-center gap-2 justify-center">
                                    <i className="fa-solid fa-location-dot text-red text-xl"></i>
                                    Visit Our Store
                                </p>
                                <p className=" text-sm">
                                    SUVAN BUSSINESS PARK, SOMA TEXTILE MILL COMPOUND, 109, Rakhial, Ahmedabad, Gujarat 380021
                                </p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
