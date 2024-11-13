import React from 'react';
import Whatisspotify from '../Componentes/Tema1/Whatisspotify';
import SpotifyLibrary from '../Componentes/Tema4/SpotifyLibrary';
import './Home.css';
import Cuenta from '../Componentes/Cuenta/Cuenta';
import IniciaSesion from '../Componentes/Cuenta/IniciaSesion/IniciaSesion';

const Home = ({ content }) => {
  const renderContent = () => {
    switch (content) {
      case "1":
        return <Whatisspotify key="1" />;
      case "2":
        return <SpotifyLibrary key="2" />;
      case "3":
        return <Whatisspotify key="3" />;
      case "4":
        return <Whatisspotify key="4" />;
      case "5":
        return <Cuenta key="5" />;
      case "6":
        return <Cuenta key="6" />;
      case "8":  // Subitem "Regístrate"
        return <Cuenta key="8" />;
      case "9":  // Subitem "Inicia Sesión"
        return <IniciaSesion key="9" />;
      default:
        return <Whatisspotify key="default" />;
    }
  };

  return (
    <div className="home-container">
      {renderContent()}
    </div>
  );
};

export default Home;
