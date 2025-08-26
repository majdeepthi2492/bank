import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, addToCart, removeFromCart } from "./store";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Headphones", price: 199 }
];

function ProductList() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div className="card" key={p.id}>
          <span>
            {p.name} - ${p.price}
          </span>
          <button onClick={() => dispatch(addToCart(p))}>Add</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div className="card" key={item.id}>
          <span>
            {item.name} - ${item.price}
          </span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <p className="cart-summary">
        Total: ${cart.reduce((sum, i) => sum + i.price, 0)}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <h1>Simple shopping cart application</h1>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}
