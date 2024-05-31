import Loader from 'react-loader-spinner'

import './index.css'
import NavbarLg from '../../Components/NavBarLg'

function LoadingView() {
  return (
    <div>
      <NavbarLg />
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#263868" height={50} width={50} />
      </div>
    </div>
  )
}

export default LoadingView
