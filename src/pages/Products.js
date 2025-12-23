import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BASE_URL from "../BASEURL";
import BreadcrumbProduct from "../components/BreadcrumbProduct";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/subcategory`)
      .then(res => res.json())
      .then(data => {
        setSubcategories(data);
        const uniqueCategories = [...new Set(data.map(sub => sub.categoryId?.categoryName).filter(Boolean))];
        setCategories(uniqueCategories);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const filteredSubcategories = subcategories.filter(sub => sub.categoryId?.categoryName === selectedCategory);

  return (
    <>
      <BreadcrumbProduct />

      <div className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue font-montserrat" data-aos="fade-up">Product Categories</h2>

        {!selectedCategory ? (
          <div className="grid md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className="border border-blue p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold font-vollkorn">{cat}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div data-aos="fade-up" data-aos-delay="200">
            <button onClick={handleBack} className="mb-6 px-4 py-2 bg-blue text-white rounded-md hover:bg-red transition">
              ← Back to Categories
            </button>
            {/* <h3 className="text-2xl font-bold mb-6 text-blue font-montserrat">"categoryName": "{selectedCategory}"</h3> */}
            <div className="grid md:grid-cols-3 gap-6">
              {filteredSubcategories.filter(sub => sub.subCategoryName).map((sub) => (
                <Link
                  key={sub._id}
                  to={`/products/${selectedCategory.toLowerCase().replace(/\s+/g, '-')}/${sub.subCategoryName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="border border-blue p-5 rounded-lg hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-semibold font-vollkorn">{sub.subCategoryName}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
