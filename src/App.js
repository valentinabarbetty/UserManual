import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";  // Importa el Footer

function App() {
  const [selectedContent, setSelectedContent] = useState("Bienvenido a Spotify");

  const handleMenuClick = (content) => {
    setSelectedContent(content);
   
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div style={{ gridArea: 'sidebar' }}>
        <Sidebar onMenuClick={handleMenuClick} />  {/* Pasa la función de click al Sidebar */}
      </div>
      <div style={{ gridArea: 'home' }}>
        <Home content={selectedContent} />  {/* Pasa el contenido seleccionado a Home */}
      </div>
      <div style={{ gridArea: 'footer' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
