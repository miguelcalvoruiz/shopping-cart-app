import React from 'react';

const Header = ({ total }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-primary text-white shadow-lg rounded-md">
      <div className="text-3xl font-extrabold flex items-center space-x-3">
        <span role="img" aria-label="cart">🛒</span>
        <span>Shopping Cart</span>
      </div>
      <div className="text-2xl">
        Total: <span className="font-semibold text-accent">{total.toFixed(2)}€</span>
      </div>
    </header>
  );
}

export default Header;
