import { Link, useParams } from "react-router-dom";
import { productsData } from "../data/productsData";
import BreadcrumbProduct from "./BreadcrumbProduct";

export default function ProductDetail() {
  const { category, subcat, productId } = useParams();
  const product = productsData[category].subcategories[subcat].products.find(
    (p) => p.id === productId
  );

  return (<>
  
  <BreadcrumbProduct />

    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-5 font-montserrat text-blue" data-aos="fade-up">
        {product.name}</h2>

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
