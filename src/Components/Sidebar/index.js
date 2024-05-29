import './index.css'

function Sidebar({categoriesList}) {
  return (
    <div className="sidebar-container">
      <h4 className="cat-heading">Categories</h4>

      <ul className="cat-items-container">
        <li key="-1" className="cat-items active-cat-items">
          All
        </li>
        {categoriesList.map(obj => (
          <li key={obj.id} className="cat-items">
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
