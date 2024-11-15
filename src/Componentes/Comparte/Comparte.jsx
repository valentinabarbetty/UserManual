import React, { useState } from "react";
import { Tabs, Button, Card, Divider } from "antd";
import "./Comparte.css";

const Comparte = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleNextTab = () => {
    const nextTab = (parseInt(activeTab) + 1).toString();
    setActiveTab(nextTab);
  };

  const items = [
    {
      key: "1",
      label: `Compartir Playlists o Canciones`,
      children: (
        <Card>
          <h2>Compartir Playlists o Canciones</h2>
          <Divider style={{ borderColor: "white" }} />
          <h3>
            1. Dirígete a la canción o playlist que deseas compartir{" "}
          </h3>
          <h3>
            2. Da clic en los 3 puntos que aparecen a la derecha de la playlist o canción
          </h3>
          <h3>
            3. Desplazate hacia abajo y selecciona la opción Compartir
          </h3>
          <h3>
            4. Da clic en "Copia enlace de la playlist" o "Copia enlace de la canción"
          </h3>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Compartir.gif"
                  className="img"
                  alt="Imagen centrada"
                />
              </div>
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
      {activeTab !== "1" && (
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

export default Comparte;
