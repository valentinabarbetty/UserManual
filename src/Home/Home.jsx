import React from 'react';
import Whatisspotify from '../Componentes/Tema1/Whatisspotify';
import Playlist from '../Componentes/Tema2/Playlist';
import FollowArtists from '../Componentes/Tema3/FollowArtists';
import SpotifyLibrary from '../Componentes/Tema4/SpotifyLibrary';
import OfflineListening from '../Componentes/Tema5/OfflineListening';



import { Row, Col } from 'antd';
import './Home.css';

import IniciaSesion from '../Componentes/Cuenta/IniciaSesion/IniciaSesion';
import Registro from '../Componentes/Cuenta/Registro';
import Explora from '../Componentes/Explora/Explora';
import Sonido from '../Componentes/Sonido/Sonido';
import Comparte from '../Componentes/Comparte/Comparte';
import Premium from '../Componentes/Premium/Premium';

const Home = ({ content }) => {
  const renderContent = () => {
    switch (content) {
      case "1":
        return <Whatisspotify key="1" />;
      case "2":
        return <SpotifyLibrary key="2" />;
      case "3":
        return <Playlist key="3" />;
      case "4":
        return <FollowArtists key="4" />;
      case "5":
        return <OfflineListening key="5" />;
      case "6":
        return <Registro key="6" />;
      case "8":
        return <Registro key="8" />;
      case "9":
        return <IniciaSesion key="9" />;
      case "10":
        return <Explora key="10" />;
      case "11":
        return <Comparte key="11" />;
      case "12":
          return <Premium key="12" />;
      default:
        return <Whatisspotify key="default" />;
    }
  };

  return (
    <Row justify="center" className="home-container">
      <Col xs={24} sm={20} md={18} lg={16} xl={22} className="content-wrapper">
        {renderContent()}
      </Col>
    </Row>
  );
};

export default Home;
