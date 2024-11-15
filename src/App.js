import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function App() {
  const [selectedContent, setSelectedContent] = useState("Bienvenido a Spotify");
  const [openKeys, setOpenKeys] = useState([]);
  const handleMenuClick = (content) => {
    setSelectedContent(content);
  };

  const handleSearch = (query) => {
    const keywordMap = {
      "¿Qué es Spotify?": "1",
      "Tu Cuenta": "7",
      "Spotify Premium": "12",
      "Explora tu Spotify": "10",
      "Personaliza el Sonido": "6",
      "Comparte tu Música": "11",
      "Listas de Reproducción": "3",
      "Sigue Nuevos Artistas": "4",
      "Escucha sin Conexión": "5",
      "Regístrate": "8",
      "Inicia Sesión": "9"
    };
    const contentKey = Object.keys(keywordMap).find((key) =>
      key.toLowerCase().includes(query.toLowerCase())
    );

    if (contentKey) {
      const contentValue = keywordMap[contentKey];
      setSelectedContent(contentValue);
      if (contentValue === "8" || contentValue === "9") {
        setOpenKeys(["7"]); 
      } else {
        setOpenKeys([]); 
      }
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Navbar onSearch={handleSearch} /> 
      </div>
      <div style={{ gridArea: 'sidebar' }}>
        <Sidebar 
        onMenuClick={handleMenuClick}
        selectedContent={selectedContent}
        openKeys={openKeys}
        setOpenKeys={setOpenKeys}  />
      </div>
      <div style={{ gridArea: 'home' }}>
        <Home content={selectedContent} />
      </div>
      <div style={{ gridArea: 'footer' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
