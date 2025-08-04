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
            <button className="button">Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div>
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
            <p>{item.price}</p>
            <div>
              <input type="text" value={0} onChange={() => 4} />
              <span>pcs</span>
            </div>
            <button className="button">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function Item(){
//   return items.map(item => )
// }
