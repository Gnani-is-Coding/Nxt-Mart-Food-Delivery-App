import {useLocation, Link} from 'react-router-dom'
import {Home, ShoppingCart, LogOut} from 'lucide-react'

import './index.css'

function MobileNavigationContainer() {
  const location = useLocation()
  return (
    <ul className="mobile-navigation-container">
      <Link to="/" className="nav-item-container">
        <div
          className={
            location.pathname === '/' ? 'active-nav-icons' : 'nav-icons'
          }
        >
          <Home />
        </div>
        <p
          className={location.pathname === '/' ? 'active-nav-para' : 'nav-para'}
        >
          Home
        </p>
      </Link>

      <Link to="/cart" className="nav-item-container">
        <div
          className={
            location.pathname === '/cart' ? 'active-nav-icons' : 'nav-icons'
          }
        >
          <ShoppingCart />
        </div>
        <p
          className={location.pathname === '/' ? 'active-nav-para' : 'nav-para'}
        >
          Cart
        </p>
      </Link>

      <Link to="/login" className="nav-item-container">
        <div className="nav-icons">
          <LogOut />
        </div>
        <p className="nav-para">Logout</p>
      </Link>
    </ul>
  )
}

export default MobileNavigationContainer
