import {Link, useLocation} from 'react-router-dom'

import {LogOut} from 'lucide-react'

import loginLogo from '../../Images/loginLogo.png'

import './index.css'

function NavbarLg() {
  const location = useLocation()

  return (
    <nav className="header-container">
      <img src={loginLogo} alt="logo" className="logo-img" />

      <div className="header-nav-links-container">
        <Link
          to="/"
          className={
            location.pathname === '/' ? 'active-nav-link' : 'nav-links'
          }
        >
          Home
        </Link>
        <Link
          to="/cart"
          className={
            location.pathname === '/cart' ? 'active-nav-link' : 'nav-links'
          }
        >
          Cart
        </Link>
        <Link to="/" className="nav-links logout-nav-link-lg">
          <LogOut />
          Logout
        </Link>
      </div>
    </nav>
  )
}

export default NavbarLg
