import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What products does Anjana Enterprise supply?",
      answer:
        "We supply industrial tools, machinery, hardware products, cutting tools, and safety equipment for workshops and factories.",
    },
    {
      question: "Do you provide fast delivery services?",
      answer:
        "Yes, we offer fast and reliable delivery to ensure uninterrupted workflow for all industrial clients.",
    },
    {
      question: "Can we order products in bulk?",
      answer:
        "Absolutely. We support bulk and wholesale orders for industries, contractors, and manufacturing units.",
    },
    {
      question: "Do you offer customer support for product selection?",
      answer:
        "Yes, our team helps customers choose the right tools and machinery based on their specific requirements.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are located in Gujarat and deliver our products across multiple regions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-vollkorn font-bold text-blue" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-grey font-montserrat" data-aos="fade-up">Answers to common queries about our services and products.</p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm hover:shadow-lg transition"
              data-aos-duration="3000" data-aos="zoom-out-up"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-xl font-semibold text-blue">
                  {item.question}
                </span>

                <i
                  className={`fa-solid ${
                    openIndex === index ? "fa-minus" : "fa-plus"
                  } text-red text-2xl transition`}
                ></i>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-grey  leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
