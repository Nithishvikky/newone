import React, { useState } from 'react';

const COFFEE_ITEMS = [
  { name: 'Espresso', price: 2.5 },
  { name: 'Latte', price: 3.5 },
  { name: 'Cappuccino', price: 3.5 },
  { name: 'Americano', price: 3 },
];

const TEA_ITEMS = [
  { name: 'Green Tea', price: 2 },
  { name: 'Black Tea', price: 2 },
  { name: 'Earl Grey', price: 2.5 },
  { name: 'Chai Tea Latte', price: 4 },
];

const PASTRY_ITEMS = [
  { name: 'Croissant', price: 2 },
  { name: 'Blueberry Muffin', price: 2.5 },
  { name: 'Chocolate Chip Cookie', price: 1.5 },
  { name: 'Cinnamon Roll', price: 3 },
];

function MenuItem({ name, price, onAddToCart }) {
  return (
 
    <div className='note'>
      <h4>{name}</h4>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

function MenuSection({ title, items, onAddToCart }) {
  return (
 
    <div>
    
      {items.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          onAddToCart={() => onAddToCart(item)}
        />
      ))}
     </div>
  );
}

function CartItem({ name, price }) {
  return (
    <div>
      <span>{name}</span>
      <span>${price.toFixed(2)}</span>
    </div>
  );
}

function Cart({ items }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      {items.map(item => (
        <CartItem key={item.name} name={item.name} price={item.price} />
      ))}
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
}

function D3() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div>
      <header>
      <nav class="navbar  navbar-expand-lg navbar-primary ">
      <a class="navbar-brand">
        <h1>Coffee Shop</h1>
        <p>Welcome to our shop, where we serve the finest coffee, tea, and pastries.</p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#coffee">Coffee</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tea">Tea</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pastries" >Pastries</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
        <MenuSection id="coffee" items={COFFEE_ITEMS} onAddToCart={addToCart} />
        <MenuSection title="tea" items={TEA_ITEMS} onAddToCart={addToCart} />
        <MenuSection title="pastries" items={PASTRY_ITEMS} onAddToCart={addToCart} />
        <Cart items={cartItems} />  
    </div>
  );
}

export default D3;