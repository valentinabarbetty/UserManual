import React, { useState, useEffect } from 'react';
import { Row, Col, Modal, FloatButton, Divider } from 'antd';
import ReactPlayer from 'react-player';
import './Home.css';
import { YoutubeOutlined } from '@ant-design/icons';


import Whatisspotify from '../Componentes/Tema1/Whatisspotify';
import Playlist from '../Componentes/Tema2/Playlist';
import FollowArtists from '../Componentes/Tema3/FollowArtists';
import SpotifyLibrary from '../Componentes/Tema4/SpotifyLibrary';
import OfflineListening from '../Componentes/Tema5/OfflineListening';
import IniciaSesion from '../Componentes/Cuenta/IniciaSesion/IniciaSesion';
import Registro from '../Componentes/Cuenta/Registro';
import Explora from '../Componentes/Explora/Explora';
import Comparte from '../Componentes/Comparte/Comparte';
import Premium from '../Componentes/Premium/Premium';

const Home = ({ content }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);  
  const videoUrls = {
    "9": "https://youtu.be/QMiJFQeEjis",
    "8": "https://youtu.be/M-kNHUVc4sQ",
  };

  const showModal = () => {
    setIsModalVisible(true);
    setIsPlaying(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsPlaying(false);
  };

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

  useEffect(() => {
    if (!isModalVisible) {
      setIsPlaying(false);  
    } else {
      setIsPlaying(true);  
    }
  }, [isModalVisible]);

  // Determinar el URL del video según el valor de `content`
  const videoUrl = videoUrls[content] || videoUrls["1"];  // Si `content` no es válido, carga el video 1 por defecto.

  return (
    <Row justify="center" className="home-container">
      <Col xs={24} sm={20} md={18} lg={16} xl={22} className="content-wrapper">
        {renderContent()}
      </Col>

      <FloatButton
        shape="square"
        type="primary"
        style={{
          insetInlineEnd: 24,
          position: 'fixed',
          bottom: '100px',
          right: '50px',
          width: '60px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={showModal}
        icon={<YoutubeOutlined style={{ fontSize: '28px', }} />}
      />

      <Modal
        className="modal"
        title={<span>Tutorial</span>}
        open={isModalVisible}
        onCancel={handleCancel} 
        footer={null}
        width={800}
      >
        <Divider />
        <ReactPlayer
          url={videoUrl}  // URL del video determinado por `content`
          playing={isPlaying} 
          controls
          width="100%"
          height="100%"
        />
      </Modal>
    </Row>
  );
};

export default Home;
