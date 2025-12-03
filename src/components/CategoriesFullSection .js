import React from "react";

const CategoriesFullSection = () => {
  const categories = [
    {
      id: "01",
      title: "Ferrous Metal",
      subtitle: "Stockiest & Suppliers",
      image: "/images/products/ferrous-metal.png",
      description:
        "Round Bars • Flat Bars • Forgings • Bright Bars • Billets • Plates • Sheets • Circle Cutting • Custom Profiles",
    },
    {
      id: "02",
      title: "Non-Ferrous Metal",
      subtitle: "Stockiest & Suppliers",
      image: "/images/products/non-ferrous-metal.png",
      description:
        "Copper • Brass • Aluminium • Bronze • Gun Metal • Bus Bars • Coils • Pipes • Foils • Sheets",
    },
    {
      id: "03",
      title: "Ferro & Ferro Alloys",
      subtitle: "Stockiest & Suppliers",
      image: "/images/products/ferro-alloys.png",
      description:
        "Ferro Chrome • Ferro Silicon • Ferro Manganese • Ferro Moly • High Carbon • Low Carbon • Special Alloys",
    },
  ];

  return (
    <>

    <div className=" bg-gray-100 py-16 ">

        <div className="px-6 text-center " data-aos="fade-up">
            <h4 className="text-3xl md:text-4xl pt-4 font-bold">OUR PRODUCTS RANGE</h4>
            <h1 className="text-xl md:text-3xl font-vollkorn font-bold text-center mb-4 py-6 text-blue">
                Anjana Enterprise offers a comprehensive range of products
and services 
            </h1>
        </div>


      {categories.map((item, index) => (
          <section
          key={item.id}
          className=" flex items-center bg-gray-100 py-0"
          >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center">

            {/* IMAGE */}
            <div
              className={`w-full ${
                  index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-lg md:rounded-lg shadow-lg w-full h-[380px] object-cover"
                data-aos="fade-up-right"
                />
            </div>

            {/* CONTENT BOX */}
            <div
              className={`bg-white mb-6 md:mb-0 rounded-b-lg md:rounded-lg shadow-lg p-10 relative border ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
                data-aos="fade-up-left"
                >
              {/* NUMBER */}
              <h3 className="absolute top-4 right-6 text-4xl font-bold text-red/30">
                {item.id}
              </h3>

              <p className="uppercase text-sm tracking-widest text-gray-500">
                {item.subtitle}
              </p>

              <h2 className="text-2xl md:text-3xl font-vollkorn font-bold text-blue mt-2">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {item.description}
              </p>

              <button className="mt-6 bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/80 transition">
                View All Products
              </button>
            </div>
          </div>
        </section>
      ))}
      </div>
    </>
  );
};

export default CategoriesFullSection;
