import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faGripVertical, faGrip, faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';

export default function DisplayFilter({setFilter, filter, filterOptions}) {
  const [isActive, setIsActive] = useState(filter);

  useEffect(() => {
    setIsActive(filter)
  }, [filter])

  return (
    <div className="filter-container">
      <button className={`${isActive === filterOptions[0] ? 'selected-filter' : 'filter-choice'} ${filter === filterOptions[0] ? 'active' : ''}`} onClick={() => setFilter(filterOptions[0])}>
        <FontAwesomeIcon className='' icon={faSquare} />
      </button>
      <button className={`${isActive === filterOptions[1] ? 'selected-filter' : 'filter-choice'} ${filter === filterOptions[1] ? 'active' : ''}`} onClick={() => setFilter(filterOptions[1])}>
        <FontAwesomeIcon className='' icon={faGripVertical} />
      </button>
      <button className={`${isActive === filterOptions[2] ? 'selected-filter' : 'filter-choice'} ${filter === filterOptions[2] ? 'active' : ''}`} onClick={() => setFilter(filterOptions[2])}>
        <FontAwesomeIcon className='' icon={faGrip} />
      </button>
    </div>
  ) 
}