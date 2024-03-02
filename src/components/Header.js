import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order";

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((el) => {
    total += Number.parseFloat(el.price);
  });
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="total"> Total: {new Intl.NumberFormat().format(total)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>No items</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Furniture</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Account</li>
        </ul>
        <FaCartShopping
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart_button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
