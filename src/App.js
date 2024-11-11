import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar" />
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Home className="Home" />
      </div>
    </div>
  );
}

export default App;
