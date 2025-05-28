import React, { useState } from "react";
import "./App.css";

const initialProducts = [
  { id: "P001", name: "Blue Pen", price: 20 },
  { id: "P002", name: "Notebook", price: 50 },
  { id: "P003", name: "Eraser", price: 10 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [barcode, setBarcode] = useState("");

  const handleAddProduct = () => {
    const found = initialProducts.find(p => p.id === barcode);
    if (found) {
      setCart(prev => [...prev, found]);
    }
    setBarcode("");
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="App">
      <h1>Retail POS</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter or scan barcode"
          value={barcode}
          onChange={e => setBarcode(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAddProduct()}
        />
        <button onClick={handleAddProduct}>Add</button>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} - Ksh {item.price}
            </li>
          ))}
        </ul>
        <div className="total">Total: Ksh {getTotal()}</div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default App;
