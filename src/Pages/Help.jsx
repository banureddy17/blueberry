import React from "react";
import { useState } from "react";
import Nav from "../Component/Nav/Nav";
import Footer from "../Component/Footer/Footer";

const Help = () => {
  const faqData = [
    {
      question: "What is multi-vendor service?",
      answer:
        "Multi-vendor services allow multiple sellers to sell products on a single platform.",
    },
    {
      question: "How to buy multiple products at a time?",
      answer:
        "You can add multiple products to your cart and proceed to checkout.",
    },
    {
      question: "Refund policy for customers?",
      answer:
        "Customers can request a refund within 7 days of purchase under our policy.",
    },
    {
      question: "Exchange policy for customers?",
      answer:
        "Products can be exchanged within 14 days if they meet the exchange criteria.",
    },
  ];

  // State to manage active index
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Nav />
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Help;
