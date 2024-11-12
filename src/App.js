import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";

function App() {
  const [selectedContent, setSelectedContent] = useState("Bienvenido a Spotify");

  // Función para actualizar el contenido
  const handleMenuClick = (e) => {
    setSelectedContent(e.item.props.label); // Usar la etiqueta del ítem como contenido
  };

  return (
    <div className="App" style={{ display: 'grid', gridTemplateColumns: '256px 1fr', gridTemplateRows: '60px 1fr', gridTemplateAreas: '"navbar navbar" "sidebar home"', height: '100vh' }}>
      <div style={{ gridArea: 'navbar' }}>
        <Navbar />
      </div>
      <div style={{ gridArea: 'sidebar' }}>
        <Sidebar onMenuClick={handleMenuClick} />
      </div>
      <div style={{ gridArea: 'home' }}>
        <Home content={selectedContent} />
      </div>
    </div>
  );
}

export default App;