import React, { useState } from "react";
import { Tabs, Card, Divider } from "antd";
import "./OfflineListening.css";

const OfflineListening = () => {
  const [activeTab, setActiveTab] = useState("1");

  const items = [
    {
      key: "1",
      label: `Seleccionar Canciones o Playlist`,
      children: (
        <Card>
          <h2>1. Seleccionar Canciones o Playlist</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Dirígete a la canción o playlist que te gustaría escuchar sin conexión.
            Puedes hacerlo desde tu biblioteca o buscando nuevas canciones.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/SeleccionarCanciones.gif"
                  className="img"
                  alt="Seleccionar canciones"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      label: `Activar la Opción de Descarga`,
      children: (
        <Card>
          <h2>2. Activar la Opción de Descarga</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Una vez que hayas seleccionado las canciones o playlists, busca el
            botón de "Descargar" o "Disponible sin conexión" y actívalo.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/ActivarDescarga.gif"
                  className="img"
                  alt="Activar descarga"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      label: `Verificar las Canciones Descargadas`,
      children: (
        <Card>
          <h2>3. Verificar las Canciones Descargadas</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Dirígete a la sección de "Biblioteca" y revisa que las canciones o
            playlists descargadas estén disponibles sin conexión. Deberías ver un ícono
            que indique que la descarga ha sido exitosa.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/VerificarDescarga.gif"
                  className="img"
                  alt="Verificar descarga"
                />
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "4",
      label: `Escuchar sin Conexión`,
      children: (
        <Card>
          <h2>4. Escuchar sin Conexión</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Ahora puedes disfrutar de tu música sin conexión. Abre la aplicación y
            selecciona las canciones o playlists descargadas para escucharlas en cualquier
            momento, sin necesidad de estar conectado a internet.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/EscucharSinConexion.gif"
                  className="img"
                  alt="Escuchar sin conexión"
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

export default OfflineListening;
