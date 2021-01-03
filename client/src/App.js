import './App.css';
import 'materialize-css'
import {Navbar} from "./components/Navbar";
import {UsersList} from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UsersList />
    </div>
  );
}

export default App;
