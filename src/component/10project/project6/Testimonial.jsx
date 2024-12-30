import React, { useState } from "react";
import "./style.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = [
    {
      quote:
        "I absolutely loved the seafood dishes! The flavors were incredible, and the presentation was top-notch. I can't wait to come back for more!",
      name: "John Doe",
    },
    {
      quote:
        "The best seafood restaurant I've ever been to! The staff was friendly, and the atmosphere was perfect for a cozy dinner. Highly recommend the grilled shrimp!",
      name: "Jane Smith",
    },
    {
      quote:
        "A delightful experience! The variety of meals offered is impressive, and everything we tried was delicious. The calamari was a standout!",
      name: "Emily Johnson",
    },
    {
      quote:
        "I was blown away by the freshness of the ingredients. Each dish was bursting with flavor. The lobster bisque is a must-try!",
      name: "Michael Brown ",
    },
  ];
  const handlePrevButton = () => {
    setCurrentIndex(
      (currentIndex + testimonial.length - 1) % testimonial.length
    );
  };
  const handleNextButton = () => {
    setCurrentIndex((currentIndex + 1) % testimonial.length);
  };
  return (
    <>
      <div className="testimonial">
        <div className="testimonial-quote">
          "{testimonial[currentIndex].quote}"
        </div>
        <div className="author-name">"...{testimonial[currentIndex].name}"</div>
      </div>
      <div className="button">
        <button className="prevButton btn" onClick={handlePrevButton}>
          Prev
        </button>
        <button className="nextButton btn" onClick={handleNextButton}>
          Next
        </button>
      </div>
    </>
  );
};

export default Testimonial;

//testimonial formula:(currentIndex + testimonial.length - 1) % testimonial.length
