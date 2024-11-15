import React, { useState } from "react";
import { Tabs, Button, Card } from "antd";
import "./Premium.css";

const Premium = () => {
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
   
          <h3>
            1. Ingresa a {" "} &nbsp;
            <a
              href="https://www.spotify.com/co-es/premium/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.spotify.com/co-es/premium/
            </a>{" "}
          </h3>
        </Card>
      ),
    },
    {
      key: "2",
      label: `Paso 2`,
      children: (
        <Card>
          <h3>
            2. Da clic en "Ver Planes" aparecerán distintos planes con
            diferentes características.
          </h3>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Premium1.gif"
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
          <h3>
            3. Selecciona el plan que más se ajuste a tus necesidades, se te
            redireccionará a la página de pago.
          </h3>
          <p className="sub-step-container">
            Podrás visualizar la información del pago, como total a pagar, el
            plan que escogiste, y dessde cuando se empieza a cobrar.
          </p>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Premium2.gif"
                  className="img"
                  alt="Imagen centrada"
                />
              </div>
            </div>
          </div>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Premium5.png"
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
      key: "4",
      label: `Paso 4`,
      children: (
        <Card>
          <h3>4. Información del pago.</h3>
          <div className="step-container">
            <p>
              Selecciona el tipo de pago con el que deseas continuar tu compra
            </p>
          </div>
          <div className="step-container">
            <div className="sub-step-container">
              <div className="img-container">
                <img
                  src="/img/Premium3.png"
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
        key: "5",
        label: `Paso 5`,
        children: (
          <Card>
            <h3>5. Revisa la Información</h3>
            <div className="step-container">
              <p>
                Una vez añadido el método de pago, revisa la información de tu compra y el plan que escogiste.
              </p>
              <p>
                Da clic en continuar compra para finalizar el proceso.
              </p>
            </div>
            <div className="step-container">
              <div className="sub-step-container">
                <div className="img-container">
                  <img
                    src="/img/Premium4.png"
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

export default Premium;
