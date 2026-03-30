import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <div>
      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button
              className="get-started-btn"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
      {showProductList && (
        <ProductList onCartClick={handleCartClick} />
      )}
      {showCart && (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default App;
