import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BASE_URL from "../BASEURL";
import BreadcrumbProduct from "./BreadcrumbProduct";

export default function AllProductList() {
  const { category, subcat } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subcatName = subcat.replace(/-/g, ' ');
    // First, fetch subcategories to get the ID
    fetch(`${BASE_URL}/subcategory`)
      .then(res => res.json())
      .then(subData => {
        const subcategory = subData.find(sub => sub.subCategoryName?.toLowerCase() === subcatName.toLowerCase());
        if (subcategory) {
          // Now fetch products for this subcategory
          return fetch(`${BASE_URL}/product/subcategory/${subcategory._id}`);
        } else {
          throw new Error('Subcategory not found');
        }
      })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [subcat]);

  if (loading) return <div>Loading...</div>;

  return (<>

<BreadcrumbProduct />

    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue font-montserrat" data-aos="fade-up">{subcat}</h2>

      <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
        {products.filter(p => p.productName && p.image).map((p) => (
          <Link
            key={p._id}
            to={`/products/${category}/${subcat}/${p._id}`}
            className="border border-blue p-4 rounded-lg hover:shadow-lg"
          >
            <img src={p.image} alt={p.productName} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mt-3">{p.productName}</h3>
          </Link>
        ))}
      </div>
    </div>
  </>);
}
