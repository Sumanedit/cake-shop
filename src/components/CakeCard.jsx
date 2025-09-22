import React from "react";

const CakeCard = ({ name, description, price, image }) => (
  <div className="cake-card">
    <img src={image} alt={name} className="cake-card-img" />
    <h3>{name}</h3>
    <p>{description}</p>
    <span className="cake-card-price">${price}</span>
  </div>
);

export default CakeCard;
