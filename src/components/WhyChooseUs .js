import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "fa-solid fa-user-shield",
      title: "Commitment to Safety",
    },
    {
      icon: "fa-solid fa-gem",
      title: "Best Quality Raw Materials",
      active: true,
    },
    {
      icon: "fa-solid fa-user-check",
      title: "Customer-Centric Approach",
    },
    {
      icon: "fa-solid fa-indian-rupee-sign",
      title: "Competitive Pricing",
    },
    {
      icon: "fa-solid fa-medal",
      title: "Exceptional Quality",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Innovation and Reliability",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500" data-aos="fade-up"  >
            Our Quality Commitments
          </p>

          <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-blue mt-2 leading-snug"
           data-aos="fade-up" data-aos-delay="100">
            We're Here To Meet Your Unique Requirements.
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            At Anjana Enterprise, we’re not just a supplier; we’re your trusted
            partner in metal excellence. We are committed to meeting your needs
            and exceeding expectations with quality, reliability, and service.
          </p>

          {/* FEATURES GRID */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

            {features.map((item, index) => (
              <div
                key={index}
                className={`border p-5 rounded-lg shadow-sm flex items-start gap-4 transition cursor-pointer
                ${item.active ? "bg-blue text-white" : "bg-white hover:border-blue/40"}`} 
                 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
              >
                {/* ICON */}
                <div>
                  <i
                    className={`${item.icon} text-3xl ${
                      item.active ? "text-white" : "text-blue"
                    }`}
                  ></i>
                </div>

                {/* TEXT */}
                <p
                  className={`font-semibold text-sm leading-relaxed ${
                    item.active ? "text-white" : "text-dark"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/about/whychoose.jpg"
            alt="Quality"
            className="rounded-lg shadow-xl w-full max-w-[550px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
