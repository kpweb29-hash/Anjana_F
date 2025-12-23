import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BASE_URL from "../BASEURL";
import BreadcrumbProduct from "./BreadcrumbProduct";

export default function ProductDetail() {
  const { category, subcat, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/product/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Error fetching product:', err));
  }, [productId]);

  if (!product || !product.productName) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue"></div>
      </div>
    );
  }

  return (<>
  
  <BreadcrumbProduct />

    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-5 font-montserrat text-blue" data-aos="fade-up">
        {product.productName}</h2>

      <img src={product.image} className="w-full h-80 object-cover rounded-lg" data-aos="zoom-in"  />

      <p className="mt-6 text-lg mb-8" data-aos="fade-up"  >{product.description}</p>

      {/* <ul className="mt-4 mb-8 list-disc pl-6" data-aos="fade-up"  data-aos-delay="100">
        {product.specs.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul> */}

      <div className="flex flex-wrap">
     {/* BUTTON */}
        <Link to="/contact" className="mr-4 mb-4 px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
          Get Quote
        </Link>

        {/* <Link to="/about#company-profile" className=" mb-4 px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
          Download Brochure
        </Link> */}
            </div>
            </div>
  </>);
}
