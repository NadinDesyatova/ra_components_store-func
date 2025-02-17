Страница интернет-магазина
===

Создан React-компонент `ShopItemFunc` (функциональный компонент), с помощью которого можно реализовывать представление информации о товарах из каталога.

## Пример использования
```jsx
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// Внутри компонента App
return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
)
```

## Описание компонента

Компонент имеет один props `item`, в котором он ожидает объект с информацией о товаре со следующими свойствами:
- `brand` — название производителя товара;
- `title` — название товара;
- `description` — краткое описание товара;
- `descriptionFull` — подробное описание товара;
- `price` — цена товара;
- `currency` — валюта товара.

Компонент создаёт DOM элемент следующей структуры:
```html
<div class="main-content">
  <h2>Tiger of Sweden</h2>
  <h1>Leonard coat</h1>
  <h3>Minimalistic coat in cotton-blend</h3>
  <div class="description">
    Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
  </div>
  <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
  <div class="divider"></div>
  <div class="purchase-info">
    <div class="price">£399.00</div>
    <button>Добавить в корзину</button>
  </div>
</div>
```
