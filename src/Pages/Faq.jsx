import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  // Scroll to top when page loads (for proper navigation behavior)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is King Technology Tech LLP?",
      answer:
        "King Technology Tech LLP is a forward-thinking IT services and consulting company headquartered in Rajkot, India. Since our founding in 2015, we have been dedicated to helping businesses leverage technology for growth and innovation. Our core expertise lies in custom software development, web and mobile app creation, UI/UX design, and digital solutions.",
    },
    {
      question: "How long has King Technology been in business?",
      answer:
        "King Technology was founded in 2015 and has been serving clients globally with innovative digital solutions for several years.",
    },
    {
      question:
        "What makes King Technology different from other IT companies?",
      answer:
        "Our client-centric approach, transparent communication, and commitment to innovation set us apart from others.",
    },
    {
      question: "Where are King Technology’s offices located?",
      answer:
        "Our headquarters is located in Rajkot, India, serving clients worldwide.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve industries including healthcare, fintech, e-commerce, education, manufacturing, and startups.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-left mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 border dark:border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg md:text-xl font-semibold text-black dark:text-white">
                  {faq.question}
                </span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-black dark:text-white text-xl transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}