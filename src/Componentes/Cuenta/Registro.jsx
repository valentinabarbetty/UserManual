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
        </Card>
      ),
    },
    {
      key: "2",
      label: `Paso 2`,
      children: (
        <Card>
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
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      label: `Paso 3`,
      children: (
        <Card>
          <h3>2.1 Inicia sesión con tu número de teléfono</h3>
          <div className="sub-step-container">
            <p>
              Ingresa tu número de teléfono que tienes registrado en Spotify y
              da clic en "Próximo". Asegúrate de tener el código de tu país correctamente.
            </p>
            <div className="img-container">
              <img
                src="/img/ISnumero.png"
                className="img"
                alt="Imagen centrada"
              />
            </div>
            <p>
              Te llegará al número de teléfono que ingresaste un mensaje como el siguiente. Si no lo
              recibes, haz clic en "Obtener nuevo código".
            </p>
            <div className="img-container">
              <img
                src="/img/ISmnsj.jpg"
                className="img"
                alt="Imagen centrada"
              />
            </div>
            <p>
              Luego, ingresa el código de 6 dígitos que aparece en el mensaje y da clic en "Siguiente".
            </p>
            <div className="img-container">
              <img
                src="/img/IScodigo.png"
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
        tabBarStyle={{ color: "white" }} // Cambiar color de la letra
        className="custom-tabs" // Añadido para más control sobre los estilos
      />
      {activeTab !== "3" && (
      <Button
  
      className="spotify-button"  // Clase personalizada para el botón
      onClick={handleNextTab}
    >
      Siguiente
    </Button>
      )}
    </div>
  );
};

export default Registro;
