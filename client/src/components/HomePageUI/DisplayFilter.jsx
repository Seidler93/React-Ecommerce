import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faGripVertical, faGrip, faCheck } from "@fortawesome/free-solid-svg-icons"

export default function DisplayFilter({setFilter, filter, filterOptions}) {
  return (
    <div className="filter-container">
      <button className={`filter-choice ${filter === filterOptions[0] ? 'active' : ''}`} onClick={() => setFilter(filterOptions[0])}>
        <FontAwesomeIcon className='' icon={faSquare} />
      </button>
      <button className={`filter-choice ${filter === filterOptions[1] ? 'active' : ''}`} onClick={() => setFilter(filterOptions[1])}>
        <FontAwesomeIcon className='' icon={faGripVertical} />
      </button>
      <button className={`filter-choice ${filter === filterOptions[2] ? 'active' : ''}`} onClick={() => setFilter(filterOptions[2])}>
        <FontAwesomeIcon className='' icon={faGrip} />
      </button>
    </div>
  ) 
}