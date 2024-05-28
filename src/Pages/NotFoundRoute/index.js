import notFoundRoute from '../../Images/notFoundRoute.png'
import './index.css'

function NotFoundRoute() {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <img src={notFoundRoute} alt="not found" className="image" />
        <h4 className="not-found-heading">Page Not Found</h4>
        <p className="paragraph">
          We are sorry, the page you requested could not be found
        </p>
      </div>
    </div>
  )
}

export default NotFoundRoute
