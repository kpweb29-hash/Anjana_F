import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Industries = () => {
    return (
        <>
            <Breadcrumb />

            <section
                className="py-10 bg-[#f5f8fc] text-center px-6"
                data-aos="fade-up"
                data-aos-duration="800"
            >

                {/* TITLE */}
                <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="h-[1px] w-12 bg-gray-400"></span>
                    <span className="text-gray-500 tracking-widest text-sm font-medium">
                        APPLICATION
                    </span>
                    <span className="h-[1px] w-12 bg-gray-400"></span>
                </div>

                {/* HEADING */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue leading-snug max-w-3xl mx-auto text-center">
                    Anjana Enterprise Has Served Its Products <br />
                    In The Following Industry
                </h2>

            </section>


            <section className="py-12 bg-[#f5f8fc]">
                <div className="max-w-7xl mx-auto px-6">

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                        data-aos="fade-up"
                        data-aos-duration="900"
                    >

                        {[
                            { img: "/images/industries/1.png", title: "PHARMA INDUSTRY" },
                            { img: "/images/industries/2.png", title: "CHEMICAL INDUSTRY" },
                            { img: "/images/industries/3.png", title: "CEMENT PLANTS" },
                            { img: "/images/industries/4.png", title: "DAIRY PLANTS" },
                            { img: "/images/industries/5.png", title: "FERTILIZER INDUSTRIES" },
                            { img: "/images/industries/6.png", title: "IRON & STEEL PLANTS" },
                            { img: "/images/industries/7.png", title: "SUGAR & PAPER MILLS" },
                            { img: "/images/industries/8.png", title: "CIVIL CONSTRUCTION" },
                            { img: "/images/industries/9.png", title: "WATER TREATMENT INDUSTRY" },
                            { img: "/images/industries/10.png", title: "AGRICULTURE INDUSTRY" },
                            { img: "/images/industries/11.png", title: "FOOD & BEVERAGES INDUSTRY" },
                            { img: "/images/industries/12.png", title: "HEAVY MACHINERY INDUSTRY" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-xl transition hover:-translate-y-1"
                                data-aos="zoom-in"
                                data-aos-delay={index * 80}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-[300px]  object-cover"
                                />

                                <div className="p-4 text-center border-t">
                                    <h3 className="text-xs font-semibold tracking-wide text-gray-700">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>



        </>
    )
}

export default Industries