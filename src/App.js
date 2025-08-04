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

export default function App() {
  return (
    <div className="app">
      <ItemsList />
    </div>
  );
}

function ItemsList() {
  return (
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
  );
}

// function Item(){
//   return items.map(item => )
// }
