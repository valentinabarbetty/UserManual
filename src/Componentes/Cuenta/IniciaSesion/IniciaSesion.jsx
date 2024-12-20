import React, { useState } from "react";
import { Tabs, Button, Card, Divider } from "antd";
import "./IniciaSesion.css";

const IniciaSesion = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleNextTab = () => {
    const nextTab = (parseInt(activeTab) + 1).toString();
    setActiveTab(nextTab);
  };

  const items = [
    {
      key: "1",
      label: `Iniciar Sesión con Correo y Contraseña`,
      children: (
        <Card>
          <h2>Iniciar Sesión con Correo y Contraseña</h2>
          <Divider style={{ borderColor: "white" }} />
          <h3>1. Abre Spotify</h3>
          <div className="step-container">
            <div className="sub-step-container">
              <p>
                Abre la aplicación de Spotify en tu dispositivo móvil o
                computadora, o visita{" "}
                <a
                  href="https://accounts.spotify.com/en/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://accounts.spotify.com/en/login
                </a>{" "}
                en un navegador web.
              </p>
            </div>
          </div>
          <h3>2. Ingresa tus datos de acceso</h3>
          <div className="step-container">
            <div className="sub-step-container">
              <p>
                Ingresa el correo y contraseña con el que te registraste, o
                inicia sesión con Google, Facebook o Apple.
              </p>
              <div className="img-container">
                <img
                  src="/img/IniciaSesion.png"
                  className="img"
                  alt="Imagen centrada"
                />
              </div>
            </div>
            <p>Felicidades, haz iniciado sesión en Spotify.</p>
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      label: `Ingresa con Tu Número de Teléfono`,
      children: (
        <Card>
          <h2>Iniciar Sesión con Tu Número de Teléfono</h2>
          <Divider style={{ borderColor: "white" }} />
          <h3>1. Abre Spotify</h3>
          <div className="sub-step-container">
            <p>
              Abre la aplicación de Spotify en tu dispositivo móvil o
              computadora, o visita{" "}
              <a
                href="https://accounts.spotify.com/en/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://accounts.spotify.com/en/login
              </a>{" "}
              en un navegador web y da clic en "Continuar con el número de
              teléfono"
            </p>
          </div>
          <h3>2. Ingresa tu número de teléfono</h3>
          <div className="sub-step-container">
            <p>
              Ingresa tu número de teléfono que tienes registrado en Spotify y
              da clic en "Próximo". Asegúrate de tener el código de tu país
              correctamente.
            </p>
            <div className="img-container">
              <img
                src="/img/ISnumero.png"
                className="img"
                alt="Imagen centrada"
              />
            </div>
            <p>
              Te llegará al número de teléfono que ingresaste un mensaje como el
              siguiente. Si no lo recibes, haz clic en "Obtener nuevo código".
            </p>
            <div className="img-container">
              <img
                src="/img/ISmnsj.jpg"
                className="img"
                alt="Imagen centrada"
              />
            </div>
            <p>
              Luego, ingresa el código de 6 dígitos que aparece en el mensaje y
              da clic en "Siguiente".
            </p>
            <div className="img-container">
              <img
                src="/img/IScodigo.png"
                className="img"
                alt="Imagen centrada"
              />
            </div>
            <p>Felicidades, has iniciado sesión en Spotify.</p>
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
      {activeTab !== "3" && (
        <Button className="spotify-button" onClick={handleNextTab}>
          Siguiente
        </Button>
      )}
    </div>
  );
};

export default IniciaSesion;
