import {useState} from 'react'
import './index.css'

function Sidebar({categoriesList}) {
  const [currentCategory, setCurrentCat] = useState('All')

  return (
    <div className="sidebar-container">
      <h4 className="cat-heading">Categories</h4>

      <ul className="cat-items-container">
        <a
          key="All"
          className={
            currentCategory === 'All' ? 'active-cat-items' : 'cat-items'
          }
          onClick={() => setCurrentCat('All')}
          href="#Fruits & Vegetables"
        >
          All
        </a>
        {categoriesList.map(obj => (
          <a
            key={obj.name}
            className={
              currentCategory === obj.name ? 'active-cat-items' : 'cat-items'
            }
            onClick={() => setCurrentCat(obj.name)}
            href={`#${obj.name}`}
          >
            {obj.name}
          </a>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
