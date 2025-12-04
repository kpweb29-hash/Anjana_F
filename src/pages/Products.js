import { Link } from "react-router-dom";
import { productsData } from "../data/productsData";
import BreadcrumbProduct from "../components/BreadcrumbProduct";

export default function Products() {
  return (
    
    <>

<BreadcrumbProduct />

    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue font-montserrat" data-aos="fade-up" >Product Categories</h2>

      <div className="grid md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
        {Object.entries(productsData).map(([key, cat]) => (
          <Link
            key={key}
            to={`/products/${key}`}
            className="border border-blue p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold font-vollkorn">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
 </> );
}
