import React from 'react'
import { Link } from 'react-router-dom'

const AboutDirector = () => {
  return (
    <>
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-500 tracking-wide border-l-4 border-red pl-3 uppercase text-sm font-semibold" data-aos="fade-up">
            About Our Director
          </p>

          <h2 className="text-3xl font-vollkorn font-bold text-blue mt-2" data-aos="fade-up" data-aos-delay="100">
            Mr. Ganpat Choudhary
          </h2>

          <p className="text-gray-600 leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
            Mr. Ganpat Choudhary is a proponent of unwavering commitment to excellence.
            He ensures that the principles of quality, precision, and client satisfaction
            are woven into the fabric of our company’s culture. He understands that our
            clients are at the core of our success. He places strong emphasis on understanding
            client needs and fostering relationships built on trust and collaboration.
          </p>

          {/* Bullet Points */}
          <div className="mt-6 space-y-3" data-aos="fade-up" data-aos-delay="250">
            <div className="flex gap-3 items-center text-sm text-gray-700">
              <i className="fa-solid fa-check text-red"></i> Constant Improvement
            </div>

            <div className="flex gap-3 items-center text-sm text-gray-700">
              <i className="fa-solid fa-check text-red"></i> Commitment to Customers
            </div>

            <div className="flex gap-3 items-center text-sm text-gray-700">
              <i className="fa-solid fa-check text-red"></i> Best Quality You Can Get
            </div>
          </div>

          {/* Progress Bars */}
          <div className="my-8 space-y-6" data-aos="fade-up" data-aos-delay="300">

            <div>
              <p className="text-sm font-semibold text-gray-700">Trusted Company</p>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-full bg-blue rounded" style={{ width: "94%" }}></div>
              </div>
              <span className="text-xs font-bold text-blue">94%</span>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700">Saving You Time</p>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-full bg-blue rounded" style={{ width: "80%" }}></div>
              </div>
              <span className="text-xs font-bold text-blue">80%</span>
            </div>

          </div>

          {/* BUTTON */}
        <Link to="/about#management" className=" px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
          Our Management
        </Link>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          <img
            src="/images/about/about-profile.png"
            alt="Director"
            className="w-full rounded shadow-lg object-cover"
          />

          {/* Bottom Info Box */}
          <div className="absolute bottom-0 left-0 bg-blue text-white p-5 flex gap-4 items-center
           w-80" style={{ transform: "translateY(50%)" }}>
            <div className="bg-yellow-400 p-3 rounded">
              <i className="fa-solid fa-briefcase text-blue text-xl"></i>
            </div>
            <p className="text-sm font-semibold leading-tight">
              15+ YEARS OF <br /> WORKING EXPERIENCE
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default AboutDirector