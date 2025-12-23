import React, { useState, useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BASE_URL from '../BASEURL'

const Updates = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog`);
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <>
        <Breadcrumb />
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            Loading blogs...
          </div>
        </section>
      </>
    );
  }
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
      {blogs.map((blog, index) => (
        <div 
          key={blog._id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 border"
          data-aos="fade-up" 
          data-aos-delay={`${(index + 1) * 100}`}
        >
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-56 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-vollkorn font-bold text-blue">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {blog.shortDescription}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


    </>
  )
}

export default Updates