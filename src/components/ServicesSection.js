import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Industrial Tools Supply",
      desc: "We provide a wide range of tools for workshops, factories, and engineering units.",
    },
    {
      id: 2,
      icon: "fa-solid fa-gears",
      title: "Machinery & Equipment",
      desc: "Delivering heavy-duty machinery designed for long-term industrial performance.",
    },
    {
      id: 3,
      icon: "fa-solid fa-toolbox",
      title: "Hardware Products",
      desc: "A complete range of hardware items for industrial and commercial needs.",
    },
    {
      id: 4,
      icon: "fa-solid fa-hard-hat",
      title: "Safety Equipment",
      desc: "High-quality safety products to ensure workplace protection and compliance.",
    },
    {
      id: 5,
      icon: "fa-solid fa-truck-fast",
      title: "Fast Delivery Service",
      desc: "Quick and reliable product delivery to keep your business running smoothly.",
    },
    {
      id: 6,
      icon: "fa-solid fa-handshake",
      title: "Reliable Customer Support",
      desc: "We offer dedicated support to help you choose the right industrial products.",
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-vollkorn font-bold text-blue" >
            What We Offer
          </h2>
          <p className="mt-3 text-lg text-gray-600" data-aos="fade-up">
            Complete industrial product solutions to support your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-8 text-center border hover:shadow-2xl 
              hover:-translate-y-1 transition" data-aos="fade-up-right"
            >
              {/* ICON */}
              <div className="text-blue text-5xl mb-6">
                <i className={item.icon}></i>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-vollkorn font-bold text-red">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-grey text-sm mt-4 leading-relaxed font-montserrat">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
