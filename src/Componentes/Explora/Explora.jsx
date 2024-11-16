import React, { useState } from "react";
import { Tabs, Button, Card, Divider } from "antd";
import "./Explora.css";

const Explora = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleNextTab = () => {
    const nextTab = (parseInt(activeTab) + 1).toString();
    setActiveTab(nextTab);
  };

  const items = [
    {
      key: "1",
      label: `Buscar Contenido`,
      children: (
        <Card>
          <h2>Buscar Contenido</h2>
          <Divider style={{ borderColor: "white" }} />
          <h3>
            1. Dirígete a la parte superior de la aplicación y da clic en "¿Qué
            quieres reproducir?"{" "}
          </h3>
          <h3>
            2. Ingresa el nombre de la canción, artista, podcast o playlist que
            quieras buscar
          </h3>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Buscar.gif"
                  className="img"
                  alt="Imagen centrada"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      label: `Explorar Tu Spotify`,
      children: (
        <Card>
          <h2>Explorar Tu Spotify</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Para explorar música, playlists y podcasts que se adapten a tus
            gustos, da clic en el ícono de "Inicio" en la parte superior de la
            aplicación.
          </p>

          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/TuSpotify.gif"
                  className="img"
                  alt="Imagen centrada"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      label: `Explora nueva música`,
      children: (
        <Card>
          <h2>Explora nueva música</h2>
          <Divider style={{ borderColor: "white" }} />
          <div className="sub-step-container">
            <p>
            Explora nueva música dando clic al ícono de "Explorar"; encontrarás muchos géneros para escoger.
            </p>
            <div className="img-container">
              <img
                src="/img/explore.gif"
                className="img"
                alt="Imagen centrada"
              />
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "4",
      label: `Podcasts`,
      children: (
        <Card>
          <h2>Podcasts</h2>
          <Divider style={{ borderColor: "white" }} />
          <div className="sub-step-container">
            <p>
              Dirígete a la sección de Podcasts en el Inicio de la aplicación;
              encontrarás podcasts de diferentes temas, que hayas escuchado
              recientemente, así como recomendaciones personalizadas.
            </p>
            <div className="img-container">
              <img
                src="/img/Podcasts.gif"
                className="img"
                alt="Imagen centrada"
              />
            </div>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={items}
        tabPosition="top"
        tabBarStyle={{ color: "white" }}
        className="custom-tabs"
      />
      {activeTab !== "4" && (
        <Button
          className="spotify-button"
          onClick={handleNextTab}
        >
          Siguiente
        </Button>
      )}
    </div>
  );
};

export default Explora;
