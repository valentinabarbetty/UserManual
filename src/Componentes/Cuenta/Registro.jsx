import React, { useState } from "react";
import { Tabs, Button, Card } from "antd";
import "./Registro.css";

const Registro = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleNextTab = () => {
    const nextTab = (parseInt(activeTab) + 1).toString();
    setActiveTab(nextTab);
  };

  const items = [
    {
      key: "1",
      label: `Paso 1`,
      children: (
        <Card>
          <h3>1. Abre Spotify</h3>
          <div className="step-container">
            <div className="sub-step-container">
              <p>
                Abre la aplicación de Spotify en tu dispositivo móvil o
                computadora, o visita{" "}
                <a
                  href="https://www.spotify.com/co-es/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.spotify.com/co-es/signup
                </a>{" "}
                en un navegador web.
              </p>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      label: `Paso 2`,
      children: (
        <Card>
          <h3>2. Ingresa tu correo electrónico</h3>
          <div className="sub-step-container">
            <p>
              Ingresa tu dirección de correo electrónico y da clic en "Próximo".
            </p>
            <div className="img-container">
              <img
                src="/img/Registro.png"
                className="img"
                alt="Imagen centrada"
                style={{ width: "40%" }}
              />
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      label: `Paso 3`,
      children: (
        <Card>
          <h3>3. Agrega una nueva contraseña, recuerda que debe contener:</h3>
          <div className="sub-step-container">
            <ul>1. 1 letra</ul>
            <ul>2. 1 número o carácter especial (ejemplo: # ? ! &)</ul>
            <ul>3. 10 caracteres</ul>
            <p>Da clic en "Próximo".</p>
            <div className="img-container">
              <img
                src="/img/RegistroContrasena.png"
                className="img"
                alt="Imagen centrada"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "4",
      label: `Paso 4`,
      children: (
        <Card>
          <h3>4. Agrega tu información personal:</h3>
          <p>Da clic en "Próximo".</p>
          <div className="img-container">
            <img
              src="/img/ResgistroData.png"
              className="img"
              alt="Imagen centrada"
              style={{ width: "40%" }}
            />
          </div>
        </Card>
      ),
    },
    {
      key: "5",
      label: `Paso 5`,
      children: (
        <Card>
          <h3>4. Acepta los términos y condiciones:</h3>
          <p>Da clic en "Próximo".</p>
          <div className="img-container">
            <img
              src="/img/RegistroTyC.png"
              className="img"
              alt="Imagen centrada"
              style={{ width: "50%" }}
            />
          </div>
          <p>Felicidades, haz creado tu cuenta de Spotify.</p>
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
        tabBarStyle={{ color: "white" }} // Cambiar color de la letra
        className="custom-tabs" // Añadido para más control sobre los estilos
      />
      {activeTab !== "5" && (
        <Button
          className="spotify-button" // Clase personalizada para el botón
          onClick={handleNextTab}
        >
          Siguiente
        </Button>
      )}
    </div>
  );
};

export default Registro;
