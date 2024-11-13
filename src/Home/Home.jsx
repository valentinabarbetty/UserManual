import React from 'react';
import Whatisspotify from '../Componentes/Tema1/Whatisspotify';
import SpotifyLibrary from '../Componentes/Tema4/SpotifyLibrary';
import './Home.css';

import IniciaSesion from '../Componentes/Cuenta/IniciaSesion/IniciaSesion';
import Registro from '../Componentes/Cuenta/Registro';
import Explora from '../Componentes/Explora/Explora';
import Sonido from '../Componentes/Sonido/Sonido';
import Comparte from '../Componentes/Comparte/Comparte';

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
        return <Registro key="5" />;
      case "6":
        return <Sonido key="6" />;
      case "8":  // Subitem "Regístrate"
        return <Registro key="8" />;
      case "9":  // Subitem "Inicia Sesión"
        return <IniciaSesion key="9" />;
      case "10":  // Subitem "Inicia Sesión"
        return <Explora key="10" />;
      case "11":
        return <Comparte key="11" />;
      default:
        return <Whatisspotify key="default" />;
    }
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
