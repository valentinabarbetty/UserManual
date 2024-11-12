import React from 'react';
import { Card, List, Row, Col } from 'antd';
import './WhatIsSpotify.css';

const WhatIsSpotify = () => {
  return ( <div className="spotify-library-container">
    <Row gutter={16} justify="center">
      <Col xs={24} sm={20} md={16} lg={12}> {/* Columna más ancha en pantallas grandes */}
        <Card title="¿Qué es Spotify?">
          <p>
            Spotify es un servicio de música, pódcasts y vídeos digitales que te da
            acceso a millones de canciones y a otro contenido de creadores de todo el
            mundo.
          </p>
          <p>
            Las funciones básicas, como escuchar música, son totalmente gratis, pero
            también tienes la opción de mejorar tu cuenta con Spotify Premium.
          </p>
          <p>
            Tanto si tienes Premium como si no, puedes hacer lo siguiente:
          </p>
          <List
            size="small"
            bordered={false}
            dataSource={[
              'Recibir recomendaciones basadas en tus gustos',
              'Crear colecciones de música y pódcasts',
              'Y mucho más',
            ]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
          <p>
            Spotify está disponible en una gran variedad de dispositivos, como
            ordenadores, teléfonos, tabletas, altavoces, televisores o coches, y
            puedes pasar fácilmente de uno a otro con Spotify Connect.
          </p>
          <h2>¿Puedo guardar la música de Spotify?</h2>
          <p>
            Solo es posible acceder a la música y a los pódcasts de Spotify desde las
            aplicaciones. Nuestra licencia implica que no hay ninguna forma de exportar
            nuestro contenido fuera de la aplicación.
          </p>
        </Card>
      </Col>
    </Row>
  </div>
)};

export default WhatIsSpotify;
