import React from "react";
import { Link } from "react-router-dom";

const VisionMissionValues = () => {
    return (<>
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE SECTION */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-sm uppercase tracking-widest text-gray-500">
                        Our Vision, Mission & Values
                    </p>

                    <h2 className="text-2xl md:text-4xl font-vollkorn font-bold text-blue mt-2 leading-snug">
                        Anjana Enterprise Stands As A Premier <br />
                        Choice In The Metal Industry
                    </h2>
                </div>

                {/* THREE COLUMN LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* LEFT TEXT BOX */}
                    <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200 flex flex-col justify-between" data-aos="zoom-in-up">
                        <div>
                            <h3 className="text-lg font-bold text-dark leading-relaxed">
                                Quality Commitment at Anjana Enterprise.
                            </h3>
                            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                                At Anjana Enterprise, our unwavering commitment to quality is
                                the foundation of our operations. We believe quality is not just
                                a goal but a responsibility to our customers and partners.
                            </p>
                        </div>

                        <Link to="/about" className="text-center bg-blue text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue/80 transition">
                            Know About Us
                        </Link>
                    </div>

                    {/* MIDDLE IMAGE BOX */}
                    <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg group " data-aos="zoom-in-up">
                        <img
                            src="/images/home/vision2.jpg"
                            alt="Our Goals"
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                        />

                        {/* OVERLAY BOX */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue text-white w-[85%] px-6 py-5 rounded-t-lg shadow-lg">
                            <h3 className="font-bold text-center text-lg">Our Aims & Goals</h3>
                            <p className="text-sm text-center mt-2 leading-relaxed">
                                Our aim is to consistently deliver metal products of exceptional
                                quality. Quality is the cornerstone of our reputation.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE BOX */}
                    <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg group" data-aos="zoom-in-up">
                        <img
                            src="/images/home/vision1.jpg"
                            alt="Our Warehouse"
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                        />

                        {/* OVERLAY BOX */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue text-white w-[85%] px-6 py-5 rounded-t-lg shadow-lg">
                            <h3 className="font-bold text-center text-lg">Our Warehouse</h3>
                            <p className="text-sm text-center mt-2 leading-relaxed">
                                We maintain a state-of-the-art warehouse equipped with the
                                latest technology and modern inventory management systems.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section
            className="w-full bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/home/carousel1.jpeg')", // change image
            }}
        >
            {/* DARK OVERLAY */}
            <div className="w-full h-full bg-blue/90 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* STAT BOX */}
                        {[
                            { number: "250+", label: "BRANDS" },
                            { number: "850+", label: "CITIES SERVED" },
                            { number: "50+", label: "PROFESSIONALS" },
                            { number: "3+", label: "MFG. UNITS" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white text-center shadow-lg rounded-lg py-6 px-4"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"

                            >
                                <h3 className="text-3xl font-vollkorn font-bold text-blue">{item.number}</h3>
                                <p className="text-gray-600 text-xs mt-2 tracking-wide font-semibold uppercase">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="text-white" data-aos="zoom-in-left">
                        <h3 className="text-2xl md:text-3xl font-vollkorn font-bold leading-relaxed">
                            Companies From All Around The Country Trust
                            <br />
                            <span className="text-red">Anjana Enterprise</span>
                            For Sustainable & Affordable
                            <br />
                            Industrial Metal Products
                        </h3>
                    </div>

                </div>
            </div>
        </section>


    </>
    );
};

export default VisionMissionValues;
