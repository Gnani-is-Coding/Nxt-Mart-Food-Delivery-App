import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './Pages/LoginRoute'
import Home from './Pages/HomeRoute'
import ProtectedRoute from './Components/ProtectedRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
