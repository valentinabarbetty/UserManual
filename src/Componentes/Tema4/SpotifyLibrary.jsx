import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { AppstoreOutlined, SearchOutlined, PlayCircleOutlined } from '@ant-design/icons';
import './SpotifyLibrary.css';  

const { Title, Text } = Typography;

const SpotifyLibrary = () => {
  return (
    <div className="spotify-library-container">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="album" src="https://i.scdn.co/image/ab67616d0000b273b9e3a242508503b8d43b079a" />}
            style={{ borderRadius: '8px', backgroundColor: '#121212' }}
          >
            <Title level={4} style={{ color: '#fff' }}>Mi Biblioteca</Title>
            <Text style={{ color: '#b3b3b3' }}>Tus canciones, artistas y álbumes favoritos</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="playlist" src="https://i.scdn.co/image/ab67616d0000b27321b5242c89bb273d6b220459" />}
            style={{ borderRadius: '8px', backgroundColor: '#121212' }}
          >
            <Title level={4} style={{ color: '#fff' }}>Listas de Reproducción</Title>
            <Text style={{ color: '#b3b3b3' }}>Explora tus listas de reproducción</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="artist" src="https://i.scdn.co/image/ab67616d0000b27363d22f2d50bfae97e93fa87f" />}
            style={{ borderRadius: '8px', backgroundColor: '#121212' }}
          >
            <Title level={4} style={{ color: '#fff' }}>Artistas</Title>
            <Text style={{ color: '#b3b3b3' }}>Descubre nuevos artistas</Text>
          </Card>
        </Col>
      </Row>

      <div className="actions">
        <Title level={4} style={{ color: '#fff', marginTop: '40px' }}>Explora más</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              className="action-card"
              style={{ backgroundColor: '#1db954', borderRadius: '8px', textAlign: 'center' }}
            >
              <PlayCircleOutlined style={{ fontSize: '30px', color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Escuchar</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              className="action-card"
              style={{ backgroundColor: '#1db954', borderRadius: '8px', textAlign: 'center' }}
            >
              <AppstoreOutlined style={{ fontSize: '30px', color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Ver más</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              className="action-card"
              style={{ backgroundColor: '#1db954', borderRadius: '8px', textAlign: 'center' }}
            >
              <SearchOutlined style={{ fontSize: '30px', color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Buscar</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SpotifyLibrary;
