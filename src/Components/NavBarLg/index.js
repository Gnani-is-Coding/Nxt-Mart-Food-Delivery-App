import {Link, useLocation, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import {LogOut} from 'lucide-react'

import loginLogo from '../../Images/loginLogo.png'

import './index.css'

function NavbarLg() {
  const location = useLocation()
  const history = useHistory()

  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <Link to="/">
        <img src={loginLogo} alt="website logo" className="logo-img" />
      </Link>

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

        <button
          className="nav-links logout-nav-link-lg"
          style={{
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          type="button"
          onClick={onClickLogOut}
        >
          <LogOut />
          Logout
        </button>
      </div>
    </nav>
  )
}

export default NavbarLg
