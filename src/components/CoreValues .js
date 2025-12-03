import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CoreValues = () => {
  const values = [
    {
      id: 1,
      icon: "fa-solid fa-award",
      title: "Quality First",
      desc: "We focus on delivering durable, reliable, and premium-grade industrial products.",
    },
    {
      id: 2,
      icon: "fa-solid fa-handshake",
      title: "Customer Commitment",
      desc: "We ensure customer satisfaction with responsive service and trusted support.",
    },
    {
      id: 3,
      icon: "fa-solid fa-shield-halved",
      title: "Integrity",
      desc: "We work with honesty, transparency, and responsibility in every business deal.",
    },
    {
      id: 4,
      icon: "fa-solid fa-bolt",
      title: "Performance",
      desc: "Our products and service are built for high performance and long-lasting use.",
    },
    {
      id: 5,
      icon: "fa-solid fa-lightbulb",
      title: "Innovation",
      desc: "We evolve continuously by adding new industrial products and better solutions.",
    },
    {
      id: 6,
      icon: "fa-solid fa-users-gear",
      title: "Reliability",
      desc: "We deliver on time and maintain strong relationships with customers and brands.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-vollkorn font-bold text-blue" data-aos="fade-up">
            Our Core Values
          </h2>
          <p className="mt-3 text-lg text-grey font-montserrat" data-aos="fade-up">
            The principles that drive our work, service, and growth.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2400, disableOnInteraction: false }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {values.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-50 rounded-xl shadow-sm p-8 text-center border hover:shadow-xl  transition h-full" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">

                {/* ICON */}
                <div className="text-red text-5xl mb-6">
                  <i className={item.icon}></i>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-vollkorn font-bold text-dark">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default CoreValues;
