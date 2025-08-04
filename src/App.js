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

const cart = [
  {
    id: crypto.randomUUID(),
    name: 'Canon EOS 5D',
    color: null,
    price: 730,
    image: 'https://i.pravatar.cc/48',
  },
  {
    id: crypto.randomUUID(),
    name: 'Canon EOS 5D',
    color: 'Red',
    price: 730,
    image: 'https://i.pravatar.cc/48',
  },
];

export default function App() {
  return (
    <div className="app">
      <ItemsList />
      <ShoppingCart />
    </div>
  );
}

function ItemsList() {
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  const itemToCart = {
    name: '',
    image: '',
    color: null,
    price: 0,
  };

  function handleQuantityChange(id, value) {
    setQuantities((item) => ({ ...item, [id]: value }));
  }

  function handleAddToCart() {
    setCart([...cart, itemToCart]);
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
            <Button>Add Cart</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingCart() {
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
      <ul>
        {cart.map((item) => (
          <li className="cart-container" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3 className="blue">{item.name}</h3>
              <p>{item.color ?? ''}</p>
            </div>
            <p>{`$${item.price}`}</p>
            <div className="flex">
              <input type="text" value={0} onChange={() => 4} />
              <span>pcs</span>
            </div>
            <p>$100</p>
            <Button>X</Button>
          </li>
        ))}
      </ul>
      <div className="flex-right">
        <Button>Update</Button>
        <Total />
      </div>
      <div className="buttons-flex">
        <Button>Continue Shopping</Button>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

function Total() {
  return (
    <h3>
      Total: <span className="red">$124.53</span>
    </h3>
  );
}

function Button({ children }) {
  return (
    <button className={children === 'Update' ? 'button orange' : 'button'}>
      {children}
    </button>
  );
}

// function Item(){
//   return items.map(item => )
// }
