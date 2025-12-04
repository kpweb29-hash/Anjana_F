import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE + DECORATION */}
        <div className="relative w-full" data-aos="fade-right">
          
          {/* MAIN IMAGE */}
          <img
            src="/images/about/hero-about.png"
            alt="About"
            className="rounded-lg shadow-lg w-full object-cover h-[350px] md:h-[550px]"
          />

          {/* BLUE BLOCK TOP RIGHT */}
          <div className="absolute top-6 right-6 bg-blue w-20 h-28"></div>

          {/* BLUE BLOCK BOTTOM LEFT */}
          <div className="absolute bottom-6 -left-4 bg-blue w-14 h-32"></div>

          {/* EXPERIENCE BOX */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg px-6 py-4 flex items-center gap-4 border-l-4 border-red w-fit">
            <h3 className="text-4xl font-vollkorn font-bold text-blue">
              15+
            </h3>
            <p className="text-sm font-semibold text-dark leading-tight uppercase">
              Years of <br /> Working Experience
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6" data-aos="fade-left">

          {/* SECTION TITLE */}
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-600">
            About Our Company
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-vollkorn font-extrabold text-dark leading-tight">
            Anjana Enterprise is a Reputable and Trusted Supplier of<br />
            <span className="text-blue">Industrial Metal Products</span>
          </h2>

          {/* SUB TEXT */}
          <p className="text-gray-700">
            We are committed to providing high-quality ferrous & non-ferrous metal products
            to industries across India. Our mission is to deliver durable and reliable
            products that meet the expectations of our customers and partners.
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600">
            Our strong emphasis on quality, service, and timely delivery has positioned us
            as one of the most trusted names in the metal industry. With years of experience
            and partnerships with top brands, we strive to offer only the best solutions.
          </p>

          {/* CHECKPOINT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">

            {[
              "ISO 9001:2015 Certified Company",
              "Association With Big Brands",
              "Pan India Delivery",
              "After Sales Support",
              "Premium Quality Products",
              "Wide Product Range",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <i className="fa-solid fa-check text-blue text-lg"></i>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}

          </div>

          {/* BUTTON */}
          <Link to="/about" className="mt-4 px-6 py-3 bg-blue text-white font-semibold rounded-lg shadow hover:bg-blue/80 transition flex items-center gap-2 w-fit" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
            Know About Us
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;