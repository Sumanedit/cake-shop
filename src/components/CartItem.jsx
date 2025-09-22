import React from "react";

const CartItem = ({ name, price, quantity, image }) => (
  <div className="cart-item">
    <img src={image} alt={name} className="cart-item-img" />
    <div className="cart-item-info">
      <h4>{name}</h4>
      <p>Qty: {quantity}</p>
      <span>${price}</span>
    </div>
  </div>
);

export default CartItem;
