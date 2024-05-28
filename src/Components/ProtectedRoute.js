import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = children => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken) {
    return <Route {...children} />
  }
  return <Redirect to="/login" />
}

export default ProtectedRoute
