import {useState} from 'react'
import './index.css'

function Sidebar({categoriesList}) {
  const [currentCategory, setCurrentCat] = useState('All')

  return (
    <div className="sidebar-container">
      <h4 className="cat-heading">Categories</h4>

      <ul className="cat-items-container">
        <li
          key="All"
          className={
            currentCategory === 'All' ? 'active-cat-items' : 'cat-items'
          }
          onClick={() => setCurrentCat('All')}
        >
          All
        </li>
        {categoriesList.map(obj => (
          <li
            key={obj.name}
            className={
              currentCategory === obj.name ? 'active-cat-items' : 'cat-items'
            }
            onClick={() => setCurrentCat(obj.name)}
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
