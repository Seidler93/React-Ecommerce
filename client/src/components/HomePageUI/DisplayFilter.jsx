export default function DisplayFilter(props) {
  return (
    <div className="filter-container">
      <button onClick={() => props.setFilter(props.filterOptions[0])}>Single</button>
      <button onClick={() => props.setFilter(props.filterOptions[1])}>Double</button>
      <button onClick={() => props.setFilter(props.filterOptions[2])}>Triple</button>
    </div>
  ) 
}