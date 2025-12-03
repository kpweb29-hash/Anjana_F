import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import OurJourney from '../components/OurJourney '
import CoreValues from '../components/CoreValues '
import ServicesSection from '../components/ServicesSection'
import FAQSection from '../components/FAQSection '
import ContactCTA from '../components/ContactCTA'

const About = () => {
  return (<>

    <Breadcrumb />

    <section className="pt-14 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="flex-1" data-aos="fade-right"
    >
          <img
            src="/images/about/hero-about.png"
            alt="About Anjana Enterprise"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1" 
     >
          <h2 className="text-3xl lg:text-4xl font-vollkorn font-bold text-blue" data-aos="fade-up">
            About Anjana Enterprise
          </h2>

          <p className="mt-6 text-lg text-grey leading-relaxed" data-aos="fade-up">
            Anjana Enterprise is a trusted supplier of industrial machinery,
            hardware tools, safety equipment, and engineering products. With a
            strong presence in the industry, we aim to provide high–quality and
            reliable solutions to manufacturing units, workshops, and industrial
            businesses across Gujarat and India.
          </p>

          <p className="mt-4 text-lg text-grey leading-relaxed" data-aos="fade-up">
            Our focus on durability, performance, and customer satisfaction
            makes us a preferred partner for hundreds of clients.
          </p>

          <p className="mt-4 text-lg text-grey leading-relaxed hidden lg:block" data-aos="fade-up">
           Anjana Enterprise supplies reliable industrial tools, machinery, and hardware solutions. With years of experience, we deliver quality products, excellent service, and trusted support for every industry need.
          </p>



        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 pb-10 " >

       <p className="text-lg text-grey leading-relaxed" data-aos="fade-up">
            We provide premium industrial tools, machinery, and engineering products, ensuring durable performance, fast delivery, and reliable service for manufacturing units, workshops, and industrial businesses.
          </p>

      {/* MISSION + VISION */}
      <div className=" space-y-6 flex flex-col md:flex-row items-center gap-4 mt-4">

        <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-red shadow-sm"
         data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h3 className="text-2xl font-vollkorn font-bold text-blue">
            Our Mission
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            To supply high–quality industrial products that enhance
            productivity, safety, and efficiency for all types of industries.
          </p>
        </div>

        <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-red shadow-sm" 
         data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h3 className="text-2xl font-vollkorn font-bold text-blue">
            Our Vision
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            To become the most reliable and preferred industrial supplier by
            delivering exceptional value, service, and performance.
          </p>
        </div>

      </div>

    </section>

    <CoreValues />

    <OurJourney />

    <ServicesSection />

    <FAQSection />

    <ContactCTA />

  </>
  )
}

export default About