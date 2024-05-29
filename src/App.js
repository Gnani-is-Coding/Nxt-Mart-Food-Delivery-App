import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './Pages/LoginRoute'
import Home from './Pages/HomeRoute'
import NotFoundRoute from './Pages/NotFoundRoute'
import ProtectedRoute from './Components/ProtectedRoute'
import {ContextProvider} from './Pages/Context'
import './App.css'

const App = () => (
  <BrowserRouter>
    <ContextProvider>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/notFound" component={NotFoundRoute} />
        <Redirect to="/notFound" />
      </Switch>
    </ContextProvider>
  </BrowserRouter>
)

export default App
