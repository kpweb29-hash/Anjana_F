import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Updates = () => {
  return (
    <>
    
    <Breadcrumb />


    <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-12" data-aos="fade-up">
      <h3 className="text-red font-semibold tracking-wide">OUR BLOGS</h3>
      <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-blue mt-2">
        Latest Insights & Industry Updates
      </h2>
    </div>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Blog 1 */}
      <div 
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 border"
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        <img 
          src="/images/products/angle-channel.webp" 
          alt="Blog 1" 
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-vollkorn font-bold text-blue">
            How Quality Raw Materials Impact Industrial Manufacturing
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Learn why choosing high-grade ferrous & non-ferrous metals is essential
            for achieving strength, precision, and long-term performance in
            manufacturing and engineering applications.
          </p>
          
        </div>
      </div>

      {/* Blog 2 */}
      <div 
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 border"
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        <img 
          src="/images/products/ms-pipes.webp" 
          alt="Blog 2" 
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-vollkorn font-bold text-blue">
            Top Trends Shaping the Future of the Metal Industry in India
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            From automation to sustainable metal solutions, discover the
            innovations that are transforming metal sourcing, fabrication, and
            industrial production across India.
          </p>
       
        </div>
      </div>

      {/* Blog 3 */}
      <div 
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 border"
        data-aos="fade-up" 
        data-aos-delay="300"
      >
        <img 
          src="/images/products/non-ferrous-metal.png" 
          alt="Blog 3" 
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-vollkorn font-bold text-blue">
            Why Non-Ferrous Metals Are Critical for Modern Engineering
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Explore how copper, aluminium, brass, and other non-ferrous materials
            enable high-performance solutions in electrical, automotive, and
            heavy-machinery industries.
          </p>
          
        </div>
      </div>

    </div>

  </div>
</section>


    </>
  )
}

export default Updates