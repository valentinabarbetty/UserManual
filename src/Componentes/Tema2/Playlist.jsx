import React, { useState } from "react";
import { Tabs, Button, Card, Divider } from "antd";
import "./Playlist.css";

const Playlist = () => {
  const [activeTab, setActiveTab] = useState("1");

  const items = [
    {
      key: "1",
      label: `Buscar Contenido`,
      children: (
        <Card>
          <h2>1. Buscar contenido para tu Playlist</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Dirígete a la barra de búsqueda en la parte superior de la aplicación y haz clic en "¿Qué quieres reproducir?". Luego, ingresa el nombre de la canción, artista, podcast o lista de reproducción que desees agregar.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Buscar.gif"
                  className="img"
                  alt="Buscar contenido"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      label: `Seleccionar canciones o podcasts`,
      children: (
        <Card>
          <h2>2. Selecciona canciones o podcasts para tu Playlist</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Una vez encuentres el contenido, da clic en el botón de tres puntos al lado de la canción, artista o podcast que quieras agregar.
            Luego selecciona "Agregar a Playlist" o "Añadir a Playlist".
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/agregarPlay.gif"
                  className="img"
                  alt="Seleccionar contenido"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      label: `Crear nueva Playlist`,
      children: (
        <Card>
          <h2>3. Crear una nueva Playlist</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Si aún no tienes una playlist creada, puedes crear una nueva desde la sección de tu Biblioteca. Dirígete a "Tus playlists",
            da clic en "Crear nueva playlist" y asigna un nombre, descripción y una imagen si lo deseas.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/CrearPlaylist.gif"
                  className="img"
                  alt="Crear nueva playlist"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "4",
      label: `Escuchar y compartir tu Playlist`,
      children: (
        <Card>
          <h2>4. Escuchar y compartir tu Playlist</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Una vez hayas agregado tus canciones, puedes escuchar tu playlist directamente desde la aplicación. Además, puedes
            compartirla con tus amigos o en redes sociales. Solo da clic en "Compartir" y selecciona el método de envío.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/CompartirPlaylist.gif"
                  className="img"
                  alt="Compartir Playlist"
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

export default Playlist;
