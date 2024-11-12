import React from 'react';
import Whatisspotify from '../Componentes/Tema1/Whatisspotify';
import SpotifyLibrary from '../Componentes/Tema4/SpotifyLibrary';
import './Home.css';

const Home = ({ content }) => {
  const renderContent = () => {
    switch (content) {
      case "1":
        return <Whatisspotify key="1" />;  // Asegura el cambio con la prop `key`
      case "2":
        return <SpotifyLibrary key="2" />;
      case "3":
        return <Whatisspotify key="3" />;
      case "4":
        return <Whatisspotify key="4" />;
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
