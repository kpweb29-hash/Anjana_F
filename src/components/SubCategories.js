import { useParams, Link } from "react-router-dom";
import { productsData } from "../data/productsData";
import BreadcrumbProduct from "./BreadcrumbProduct";


export default function SubCategories() {
  const { category } = useParams();
  const cat = productsData[category];

  return (<>

<BreadcrumbProduct />

    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue font-montserrat" data-aos="fade-up">{cat.name}</h2>

      <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
        {Object.entries(cat.subcategories).map(([key, sub]) => (
          <Link
            key={key}
            to={`/products/${category}/${key}`}
            className="border border-blue font-vollkorn p-5 rounded-lg hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">{sub.name}</h3>
          </Link>
        ))}
      </div>
    </div>
 </> );
}
