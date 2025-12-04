import { useParams, Link } from "react-router-dom";
import { productsData } from "../data/productsData";
import BreadcrumbProduct from "./BreadcrumbProduct";

export default function AllProductList() {
  const { category, subcat } = useParams();
  const sub = productsData[category].subcategories[subcat];

  return (<>

<BreadcrumbProduct />

    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue font-montserrat" data-aos="fade-up">{sub.name}</h2>

      <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
        {sub.products.map((p) => (
          <Link
            key={p.id}
            to={`/products/${category}/${subcat}/${p.id}`}
            className="border border-blue p-4 rounded-lg hover:shadow-lg"
          >
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mt-3">{p.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  </>);
}
