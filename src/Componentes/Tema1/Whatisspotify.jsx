import React, { useState } from "react";
import { Card, Divider, Row, Col, Image, Carousel } from "antd";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./WhatIsSpotify.css";

const WhatIsSpotify = () => {


  const images = [
    {
      src: "https://i.pinimg.com/736x/1d/a8/23/1da82325c3690ab14fbf1c9384c0681b.jpg",
      alt: "Interfaz de Spotify",
    },
    {
      src: "https://i.pinimg.com/736x/15/da/93/15da93a18eba48f489ce855f0cd0da39.jpg",
      alt: "Ejemplo de Ant Design",
    },
    {
      src: "https://i.pinimg.com/736x/59/82/a8/5982a81bfb362a65279e5553e1feaeb1.jpg",
      alt: "Ejemplo de Ant Design",
    },
    {
      src: "https://i.pinimg.com/736x/6d/a1/d0/6da1d04a93a160c7c1229214ccc248e3.jpg",
      alt: "Ejemplo de Ant Design",
    }, {
      src: "https://i.pinimg.com/736x/88/10/2f/88102f995aeb66262c317bef9dc96ae9.jpg",
      alt: "Ejemplo de Ant Design",
    }, {
      src: "https://i.pinimg.com/736x/e5/05/0d/e5050d6c26f1f43239947fbf4f7408ac.jpg",
      alt: "Ejemplo de Ant Design",
    }, {
      src: "https://i.pinimg.com/736x/15/36/b0/1536b052f35d7f710486c407b9937093.jpg",
      alt: "Ejemplo de Ant Design",
    }
  ];

  return (
    <Card className="spotify-card" bordered={false}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="title">¿Qué es Spotify?</h2>
          <Divider style={{ borderColor: "#1DB954" }} />
        </Col>
        <Col span={24}>
          <p className="description">
            Spotify es una plataforma de streaming de música, podcasts y videos
            que permite a los usuarios acceder a millones de canciones y episodios
            desde cualquier dispositivo conectado a Internet. Ofrece la posibilidad
            de escuchar contenido gratuito con publicidad o suscribirse a un plan
            premium para una experiencia sin anuncios, con opciones de descarga
            y calidad de audio mejorada.
          </p>
        </Col>
        <Col span={24}>
          <Carousel autoplay arrows infinite={true} slidesToShow={4} slidesToScroll={1} style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {images.map((image, index) => (
              <div key={index} className="media-container">
                <Image
                  width={200}
                  height={200}
                  src={image.src}
                  alt={image.alt}
                  preview={{ src: image.src }}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}

                />
              </div>
            ))}
          </Carousel>
          <div style={{
            backgroundColor: '#1c1c1c',  
            padding: '10px',
            borderRadius: '12px',
            position: 'relative',
            top: '20px',
            width: '100%',
            height: 'auto'
          }}>
            <iframe
              style={{
                borderRadius: '12px',  
              }}
              src="https://open.spotify.com/embed/playlist/1pj12J0Wtdk63oag27yL8e?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="1"
              allowFullScreen
              allow="autoplay; clipboard-write;"
              loading="lazy"
              title="Spotify Player"
            />
          </div>



        </Col>
      </Row>
    </Card>
  );
};

export default WhatIsSpotify;
