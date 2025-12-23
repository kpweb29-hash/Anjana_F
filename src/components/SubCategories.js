import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BASE_URL from "../BASEURL";
import BreadcrumbProduct from "./BreadcrumbProduct";


export default function SubCategories() {
  const { category } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const categoryName = category.replace(/-/g, ' ');
    fetch(`${BASE_URL}/subcategory`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(sub => sub.categoryId?.categoryName?.toLowerCase() === categoryName.toLowerCase());
        setSubcategories(filtered);
      })
      .catch(err => console.error('Error fetching subcategories:', err));
  }, [category]);

  return (<>

<BreadcrumbProduct />

    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue font-montserrat" data-aos="fade-up">{category}</h2>

      <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
        {subcategories.filter(sub => sub.subCategoryName).map((sub) => (
          <Link
            key={sub._id}
            to={`/products/${category}/${sub.subCategoryName.toLowerCase().replace(/\s+/g, '-')}`}
            className="border border-blue font-vollkorn p-5 rounded-lg hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">{sub.subCategoryName}</h3>
          </Link>
        ))}
      </div>
    </div>
 </> );
}
