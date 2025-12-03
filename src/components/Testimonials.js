import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mr. Akash Parikh",
      text:
        "I've had the privilege of working with Anjana Enterprise on several projects, and I can confidently say they are the epitome of excellence in the metal industry.",
    },
    {
      name: "Mr. Rajat Mehta",
      text:
        "Anjana Enterprise impressed us with their vast and diverse metal product range. No matter the complexity of the project, they had the perfect solution.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500" data-aos="fade-up">
            Client Testimonial
          </p>

          <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-blue mt-2" data-aos="fade-up" data-aos-delay="100">
            What They Say About Anjana Enterprise
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* LEFT IMAGE (CIRCLE STYLE) */}
          <div className="flex justify-center" data-aos="zoom-in-up">
            <div className="w-[260px] h-[260px] md:w-[330px] md:h-[330px] rounded-full bg-blue/20 flex items-center justify-center overflow-hidden">
              <img 
                src="/images/about/testimonial.png" 
                alt="Client" 
                className="w-[85%] object-cover"
              />
            </div>
          </div>

          {/* RIGHT TESTIMONIAL CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 relative"
                data-aos="zoom-in-left"
              >
                {/* STARS */}
                <div className="flex gap-1 text-yellow-500 text-lg mb-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                {/* TEXT */}
                <p className="text-gray-600 italic leading-relaxed">
                  "{item.text}"
                </p>

                {/* QUOTE ICON */}
                <i className="fa-solid fa-quote-right text-blue/20 text-4xl absolute bottom-6 right-6"></i>

                {/* NAME */}
                <p className="mt-6 font-semibold text-dark">{item.name}</p>
              </div>
            ))}

          </div>

        </div>

        {/* LOGO STRIP */}
        <div className="mt-20 bg-blue py-10 px-6 rounded-lg shadow-lg">
          <h3 className="text-white text-xl font-semibold mb-8 text-center" data-aos="fade-up">
            Our Satisfied Clients
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-90" >
            <img src="/images/products/1.png" className="w-32" alt="Client" data-aos="fade-up" data-aos-delay="100"/>
            <img src="/images/products/2.png" className="w-32" alt="Client" data-aos="fade-up" data-aos-delay="100" />
            <img src="/images/products/3.png" className="w-32" alt="Client" data-aos="fade-up" data-aos-delay="100" />
            <img src="/images/products/4.png" className="w-32" alt="Client" data-aos="fade-up" data-aos-delay="100" />
            <img src="/images/products/5.png" className="w-32" alt="Client" data-aos="fade-up" data-aos-delay="100" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
