import Loader from 'react-loader-spinner'

import './index.css'
import NavbarLg from '../../Components/NavBarLg'

function LoadingView() {
  return (
    <div>
      <NavbarLg />
      <div className="loader-container">
        <Loader />
      </div>
    </div>
  )
}

export default LoadingView
