export default function ProductCard(props) {
  return props.products.map((product, index) => (
    <div 
      key={product.id}
      className={`
      product-card
      ${props.filter === props.filterOptions[0] ? 'single' : ''}
      ${props.filter === props.filterOptions[1] ? 'double' : ''}
      ${props.filter === props.filterOptions[2] ? 'triple' : ''}
      `}
    >
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  ));  
}