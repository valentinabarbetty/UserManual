import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
