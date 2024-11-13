import React, { useState } from "react";
import { Tabs, Button, Card, Divider } from "antd";
import "./Sonido.css";

const Sonido = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleNextTab = () => {
    const nextTab = (parseInt(activeTab) + 1).toString();
    setActiveTab(nextTab);
  };

  const items = [
    {
      key: "1",
      label: `Calidad del Sonido`,
      children: (
        <Card>
          <h2>Calidad de Sonido</h2>
          <Divider style={{ borderColor: "white" }} />
          <h3>
            1. Dirígete al ícono de Tu Perfil en la esquina superior derecha y da clic en este{" "}
          </h3>
          <h3>
            2. Del menú desplegable selecciona "Preferencias"
          </h3>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Sonido1.gif"
                  className="img"
                  alt="Imagen centrada"
                />
              </div>
            </div>
          </div>
          <h3>
            3. Cambia la calidad del sonido{" "}
          </h3>
          <div className="sub-step-container">
            <p>En el apartado "Calidad del audio", selecciona el tipo de calidad que desees:</p>
            <ul>1. Baja</ul>
            <ul>2. Normal</ul>
            <ul>3. Alta</ul>
            <ul>4. Muy Alta</ul>
          </div>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Sonido2.gif"
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
      label: `Opciones de Reproducción`,
      children: (
        <Card>
          <h2>Opciones de Reproducción</h2>
          <Divider style={{ borderColor: "white" }} />
          <p>
            Para editar las opciones de reproducción:
          </p>
          <h3>1. Dirígete a Tu Perfil.</h3>
          <h3>2. Selecciona "Preferencias" del menú desplegable.</h3>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Sonido1.gif"
                  className="img"
                  alt="Imagen centrada"
                />
              </div>
            </div>
          </div>
          <div className="step-container">
          <h3>3. Dirígete a la sección "Reproducción".</h3>
          <div className="sub-step-container">
          <div className="img-container">
                <img
                  src="/img/Sonido3.gif"
                  className="img"
                  alt="Imagen centrada"
                  style={{ width: "100%" }}
                />
              </div>
          </div>
            <div className="sub-step-container">
              <p>Encontrarás las siguientes opciones:</p>
              <ul>1. Hacer una trasición gradual entre canciones </ul>
              <div className="sub-step-container">
              <p className="sub-step-container">Al seleccionar esta opción, aparecerá una barra para que gradúes el tiempo que desees que se haga la transición entre canciones</p>
              </div>
              
              <div className="img-container">
                <img
                  src="/img/Reproduccion.gif"
                  className="img"
                  alt="Imagen centrada"
                  style={{ width: "100%" }}
                />
              </div>
              <ul>2. Automix: Permite transiciones sin interrupciones entre canciones de playlist selectas</ul>
              <ul>3. Audio mono: Hace que los parlantes izquierdo y derecho reproduzcan el mismo audio</ul>
              <ul>4. Ecualizador: Permite ajustar el sonido de la música que escuchas </ul>
              <ul style={{ margin: "20px" }}>Spotify ofrece un menú de valores predefinidos como "Pop", "Rock", "Clásico", "Dance" y "Bajo", cada uno diseñado para optimizar el sonido de ese estilo musical específico.</ul>
              <div className="img-container" style={{margin: "20px"}}>
                <img
                  src="/img/Ecualizador1.gif"
                  className="img"
                  alt="Imagen centrada"
                  style={{ width: "100%" }}
                />
              </div>
              <ul style={{ margin: "20px" }}>La gráfica de dB muestra el nivel de cada frecuencia en decibelios (dB), que indica la intensidad del sonido en ese rango. Subir o bajar cada barra ajusta la potencia de esa frecuencia: por ejemplo, aumentar los dB en las frecuencias bajas refuerza los graves, mientras que hacerlo en las frecuencias altas intensifica los agudos.</ul>
              <div className="img-container" style={{margin: "20px"}}>
                <img
                  src="/img/Ecualizador2.gif"
                  className="img"
                  alt="Imagen centrada"
                  style={{ width: "100%" }}
                />
              </div>
              <ul>Da clic en "Restablecer" para volver a los ajustes originales del ecualizador.</ul>
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
              Explora nueva música dando clic al ícono de Explorar, encontrarás
              muchos géneros para escoger.
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
              Dirígete a la sección de Podcasts en el Inicio de la aplición,
              encontraras podcasts de diferentes temas. que hayas escuchado
              recientementente, así como recomendaciones personalizadas.
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
        tabBarStyle={{ color: "white" }} // Cambiar color de la letra
        className="custom-tabs" // Añadido para más control sobre los estilos
      />
      {activeTab !== "4" && (
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

export default Sonido;
