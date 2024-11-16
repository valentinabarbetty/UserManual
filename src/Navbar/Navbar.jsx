import React, { useState } from 'react';
import { Layout, Input, AutoComplete } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;

const Navbar = ({onSearch}) => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState([]);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  const handleSearchChange = (value) => {
    const filteredOptions = Object.keys(keywordMap)
      .filter((key) => key.toLowerCase().includes(value.toLowerCase()))
      .map((key) => ({ value: key }));
    setOptions(filteredOptions);
  };

  const handleSelect = (value) => {
    onSearch(value); // Llama a la función de búsqueda con el valor seleccionado
  };


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
  return (
    <Header className="navbar">
      <div className="navbar-logo">
        <a href="https://support.spotify.com/co-es/" target="_blank" rel="noopener noreferrer">
          <img
            className="navbar-logo-icon"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
            alt="Spotify Logo"
          />
        </a>
        <span className="navbar-logo-text">Spotify</span>
      </div>
      <div className="navbar-options">
      <AutoComplete
          className="navbar-search"
         
          options={options}
          onSearch={handleSearchChange} // Muestra sugerencias
          onSelect={handleSelect} // Selecciona la opción
        >
        <Input
          className="navbar-search"
          placeholder="Buscar"
          prefix={<SearchOutlined />}
        /></AutoComplete>
      </div>
     
      <div className="navbar-mobile-menu" onClick={handleMenuClick}>
        <MenuOutlined style={{ color: 'white', fontSize: '24px' }} />
      </div>
    </Header>
  );
};

export default Navbar;
