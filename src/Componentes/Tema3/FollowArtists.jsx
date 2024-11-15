import React, { useState } from "react";
import { Tabs, Card, Divider } from "antd";
import "./FollowArtists.css";

const FollowArtists = () => {
  const [activeTab, setActiveTab] = useState("1");

  const items = [
    {
      key: "1",
      label: `Buscar Nuevos Artistas`,
      children: (
        <Card>
          <h2>1. Buscar Nuevos Artistas</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Dirígete a la barra de búsqueda en la parte superior de la aplicación y escribe el nombre del artista que deseas seguir.
            Esto te permitirá encontrar nuevos artistas que puedan interesarte.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/BuscarArtista.gif"
                  className="img"
                  alt="Buscar artista"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      label: `Explorar Artistas Sugeridos`,
      children: (
        <Card>
          <h2>2. Explorar Artistas Sugeridos</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Si no tienes un artista específico en mente, dirígete al buscador y escribe la palabra 'Artista'. Luego, selecciona la opción 'Artistas', donde encontrarás una lista de sugerencias basadas en tus gustos musicales. Solo tienes que hacer clic en el nombre del artista que te interese para conocer más sobre él y disfrutar de su música.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/ExplorarArtistas.gif"
                  className="img"
                  alt="Explorar artistas"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      label: `Seguir al Artista`,
      children: (
        <Card>
          <h2>3. Seguir al Artista</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Una vez que hayas encontrado al artista que te gusta, puedes seguirlo para recibir sus últimas canciones y novedades.
            Solo haz clic en el botón de "Seguir" en su perfil.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/SeguirArtista.gif"
                  className="img"
                  alt="Seguir artista"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "4",
      label: `Escuchar y Descubrir Más`,
      children: (
        <Card>
          <h2>4. Escuchar y Descubrir Más</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Ahora que sigues al artista, puedes escuchar su música, ver sus playlists recomendadas y descubrir más canciones de su discografía.
            Además, podrás recibir sugerencias personalizadas basadas en el estilo del artista.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/ExplorarArtista.gif"
                  className="img"
                  alt="Descubrir artista"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <Tabs
      activeKey={activeTab}
      onChange={setActiveTab}
      items={items}
      tabPosition="top"
      tabBarStyle={{ color: "white" }}
      className="custom-tabs"
    />
  );
};

export default FollowArtists;
