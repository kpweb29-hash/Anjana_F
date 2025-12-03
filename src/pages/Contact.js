import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE CTA BOXES */}
          <div className="space-y-6">

            {/* PHONE */}
            <a
              href="tel:+91 99984 88480"
              data-aos="fade-down-right"
              className="flex items-center gap-4 p-6 bg-blue text-white rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="bg-red text-white p-3 rounded-full text-2xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3 className="text-xl font-vollkorn font-bold">Call Us</h3>
                <p className="text-gray-200">+91 99984 88480</p>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+91 99984 88480"
               data-aos="fade-up-right"
              className="flex items-center gap-4 p-6 bg-blue text-white rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="bg-red text-white p-3 rounded-full text-2xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3 className="text-xl font-vollkorn font-bold">Call Us</h3>
                <p className="text-gray-200">+91 99984 88480</p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:support@apnawebx.com"
              data-aos="fade-up-left"
              className="flex items-center gap-4 p-6 mb-6 bg-blue text-white rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="bg-red text-white p-3 rounded-full text-2xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-xl font-vollkorn font-bold">Email Us</h3>
                <p className="text-gray-200">support@apnawebx.com</p>
              </div>
            </a>

            {/* ADDRESS */}
              <div data-aos="fade-down-left">
            <a href="https://maps.app.goo.gl/ZskBvFqZx8gXENCS9" className="flex items-center gap-4 p-6 bg-blue text-white rounded-xl shadow-lg hover:shadow-2xl transition"  target="_blank" rel="noreferrer">
                <div className="bg-red text-white p-3 rounded-full text-2xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h3 className="text-xl font-vollkorn font-bold">Visit Us</h3>
                  <p className="text-gray-200">
                    SUVAN BUSSINESS PARK, SOMA TEXTILE MILL COMPOUND, 109, Rakhial, Ahmedabad, Gujarat 380021
                  </p>
                </div>
            </a>
              </div>

          </div>

          {/* RIGHT SIDE CONTACT FORM */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-xl border" data-aos="zoom-in-left">

            <h2 className="text-3xl font-vollkorn font-bold text-blue mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red outline-none"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red outline-none"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red outline-none"
              />

              {/* MESSAGE */}
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red outline-none"
              ></textarea>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-3 bg-red text-white font-semibold rounded-lg hover:bg-red/80 transition"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-vollkorn font-bold text-blue mb-6 text-center" data-aos="fade-up">
            Find Us on Map
          </h2>

          <div className="w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border" 
          data-aos="zoom-in" data-aos-duration="3000">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.198240902908!2d72.62522327436744!3d23.016492316556892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87d8d419d291%3A0x34ca44a658045610!2sAnjana%20Enterprise!5e0!3m2!1sen!2sin!4v1764575938931!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
