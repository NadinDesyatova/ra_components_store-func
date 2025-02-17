import './App.css'


class Item {
  constructor(
    brand, 
    title, 
    description, 
    descriptionFull, 
    price, 
    currency
  ) {
    this.brand = brand; 
    this.title = title; 
    this.description = description; 
    this.descriptionFull = descriptionFull; 
    this.price = price; 
    this.currency = currency;
  }
}

function ShopItemFunc({item}) {
  const {
    brand, 
    title, 
    description, 
    descriptionFull, 
    price, 
    currency
  } = item;

  return (
    <div class="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div class="description">{descriptionFull}</div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{currency}{price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

const item = new Item(
  'Tiger of Sweden',
  'Leonard coat',
  'Minimalistic coat in cotton-blend',
  'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  399,
  '£'
)

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  )
}

export default App
