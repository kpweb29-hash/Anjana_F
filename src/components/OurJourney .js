import React from "react";

const OurJourney = () => {
  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      desc: "Anjana Enterprise was founded with the goal of supplying reliable industrial tools and hardware to local businesses.",
    },
    {
      year: "2017",
      title: "Expanding Product Range",
      desc: "Introduced machinery, power tools, and safety equipment to meet growing customer needs across industries.",
    },
    {
      year: "2020",
      title: "Serving Major Industries",
      desc: "Partnered with manufacturing units, engineering workshops, and contractors across Gujarat.",
    },
    {
      year: "2023",
      title: "Growing Stronger",
      desc: "Built a trusted reputation for quality, service, and fast delivery with a wide customer base.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-vollkorn font-bold text-blue" data-aos="fade-up">
            Our Journey
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-montserrat" data-aos="fade-up">
            A look at how Anjana Enterprise grew into a trusted industrial supplier.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-red ml-6 md:ml-10">

          {timeline.map((item, index) => (
            <div key={index} className="mb-12 ml-6" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

              {/* Dot */}
              <div className="absolute -left-2 mt-2 w-4 h-4 bg-red rounded-full border-4 border-white"></div>

              {/* Content Box */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border hover:shadow-xl 
              transition">
                <h3 className="text-2xl font-vollkorn font-bold text-red">
                  {item.year}
                </h3>
                <h4 className="text-xl font-semibold text-blue mt-3 font-vollkorn">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-3 leading-relaxed font-montserrat">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurJourney;
