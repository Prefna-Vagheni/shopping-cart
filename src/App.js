import { useState } from 'react';

const items = [
  {
    id: crypto.randomUUID(),
    name: 'Shoe',
    color: 'black',
    price: 200,
    image: 'https://i.pravatar.cc/48',
  },
  {
    id: crypto.randomUUID(),
    name: 'Iphone',
    color: 'gold',
    price: 900,
    image: 'https://i.pravatar.cc/48',
  },
  {
    id: crypto.randomUUID(),
    name: 'Canon EOS 5D',
    color: null,
    price: 730,
    image: 'https://i.pravatar.cc/48',
  },
  {
    id: crypto.randomUUID(),
    name: 'Shoe',
    color: 'black',
    price: 200,
    image: 'https://i.pravatar.cc/48',
  },
  {
    id: crypto.randomUUID(),
    name: 'Iphone',
    color: 'gold',
    price: 900,
    image: 'https://i.pravatar.cc/48',
  },
  {
    id: crypto.randomUUID(),
    name: 'Canon EOS 5D',
    color: null,
    price: 730,
    image: 'https://i.pravatar.cc/48',
  },
];

// const cart = [
//   {
//     id: crypto.randomUUID(),
//     name: 'Canon EOS 5D',
//     color: null,
//     price: 730,
//     image: 'https://i.pravatar.cc/48',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Canon EOS 5D',
//     color: 'Red',
//     price: 730,
//     image: 'https://i.pravatar.cc/48',
//   },
// ];

export default function App() {
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  // const itemToCart = {
  //   name: '',
  //   image: '',
  //   color: null,
  //   price: 0,
  // };

  function handleAddToCart(item) {
    const quantity = quantities[item.id] || 1;

    setCart((prevItem) => [...prevItem, { ...item, quantity }]);
    setQuantities('');
  }

  function handleCheckoutCart() {
    setCart([]);
  }

  return (
    <div className="app">
      <ItemsList
        items={items}
        quantities={quantities}
        setQuantities={setQuantities}
        onAddToCart={handleAddToCart}
      />
      <ShoppingCart onCheckout={handleCheckoutCart} cart={cart} />
    </div>
  );
}

function ItemsList({ quantities, setQuantities, onAddToCart, items }) {
  function handleQuantityChange(id, value) {
    setQuantities((item) => ({ ...item, [id]: value }));
  }

  return (
    <div>
      <h2>Shopping List Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <p className="blue">{item.name}</p>
              <p>{item.color ?? ''}</p>
            </div>
            <p>{`${item.price}$`}</p>
            <input
              type="text"
              placeholder="0"
              value={quantities[item.id] || ''}
              onChange={(e) =>
                handleQuantityChange(item.id, Number(e.target.value))
              }
            />
            <Button onClick={() => onAddToCart(item)}>Add Cart</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingCart({ cart, onCheckout }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p className="cart-container">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total without VAT</span>
        <span>Total</span>
        <span>Delete</span>
      </p>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          <ul>
            <AddToCart cart={cart} />
          </ul>
        </>
      )}
      {cart.length > 0 && (
        <div className="flex-right">
          <Button>Update</Button>
          <Total cart={cart} />
        </div>
      )}

      <div className="buttons-flex">
        <Button>Continue Shopping</Button>
        <Button onClick={onCheckout}>Checkout</Button>
      </div>
    </div>
  );
}

function AddToCart({ cart }) {
  return cart.map((item, i) => (
    <li className="cart-container" key={i}>
      <img src={item.image} alt={item.name} />
      <div>
        <h3 className="blue">{item.name}</h3>
        <p>{item.color ?? ''}</p>
      </div>
      <p>{`$${item.price}`}</p>
      <div className="flex">
        <input type="text" value={item.quantity} onChange={() => 4} disabled />
        <span>pcs</span>
      </div>
      <p>${item.price * item.quantity}</p>
      <Button>X</Button>
    </li>
  ));
}

function Total({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * Number(item.quantity),
    0
  );
  return (
    <h3>
      Total: <span className="red">${total.toFixed(2)}</span>
    </h3>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={children === 'Update' ? 'button orange' : 'button'}
    >
      {children}
    </button>
  );
}

// function Item(){
//   return items.map(item => )
// }
