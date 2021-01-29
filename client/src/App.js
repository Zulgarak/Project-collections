import './App.css';
import 'materialize-css'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {useRoutes} from './routes'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import {logout, setCurrentUser} from "./redux/actions/auth";
import jwtDecode from 'jwt-decode'


if (localStorage.access_token) {
  const { access_token } = localStorage
  setAuthToken(access_token)
  const decoded = jwtDecode(access_token)
  store.dispatch(setCurrentUser(decoded))
  console.log(decoded);
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logout())
    window.location.href = '/login'
  }
}

function App() {
  const routes = useRoutes()
  return (
    <Provider store={store}>
      <div className="App">
        {/*<Navbar />*/}
        <BrowserRouter>
          <Navbar />
          <main className="main">
            {routes}
          </main>
        </BrowserRouter>
        <Footer />
      </div>

    </Provider>
  );
}

export default App;
