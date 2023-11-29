export default function dealCard(props) {
  return props.deals.map((deal, index) => (
    <div 
      key={deal.id}
      className="deal-card"
    >
      <h3>{deal.name}</h3>
      <p>${deal.price}</p>
      <p>{deal.description}</p>
    </div>
  ));  
}