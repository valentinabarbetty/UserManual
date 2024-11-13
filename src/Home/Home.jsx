import React from 'react';
import Whatisspotify from '../Componentes/Tema1/Whatisspotify';
import SpotifyLibrary from '../Componentes/Tema4/SpotifyLibrary';
import { Row, Col } from 'antd';
import './Home.css';

import IniciaSesion from '../Componentes/Cuenta/IniciaSesion/IniciaSesion';
import Registro from '../Componentes/Cuenta/Registro';
import Explora from '../Componentes/Explora/Explora';

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
        return <Registro key="6" />;
      case "8":
        return <Registro key="8" />;
      case "9":
        return <IniciaSesion key="9" />;
      case "10":
        return <Explora key="10" />;
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
