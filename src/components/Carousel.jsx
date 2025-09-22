import React from "react";

const Carousel = ({ images }) => (
  <div className="carousel">
    {/* Simple static carousel for placeholder */}
    {images && images.length > 0 && (
      <img src={images[0]} alt="Bakery Carousel" className="carousel-img" />
    )}
  </div>
);

export default Carousel;
