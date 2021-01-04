import './App.css';
import 'materialize-css'
import {Navbar} from "./components/Navbar";
import {UsersList} from "./components/UsersList";
import {AuthPage} from "./pages/AuthPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<UsersList />*/}
      {/*<AuthPage />*/}
      <NotFoundPage />
      <Footer />

    </div>
  );
}

export default App;
