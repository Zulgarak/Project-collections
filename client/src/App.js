import './App.css';
import 'materialize-css'
import {Navbar} from './components/Navbar'
// import {UsersList} from "./components/UsersList";
// import {AuthPage} from "./pages/AuthPage";
import {NotFoundPage} from './pages/NotFoundPage'
import {Footer} from './components/Footer'
import {useRoutes} from './routes'
import {BrowserRouter} from 'react-router-dom'

function App() {
  const routes = useRoutes()
  return (
    <div className="App">
      <Navbar />
      {/*<UsersList />*/}
      {/*<AuthPage />*/}
      <BrowserRouter>
        <main className="main">
          {routes}
        </main>
      </BrowserRouter>

      {/*<NotFoundPage />*/}
      <Footer />

    </div>
  );
}

export default App;
