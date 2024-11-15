import React from "react";
import { Row, Col, Typography } from "antd";
import "./Footer.css"; // Asegúrate de importar el archivo de estilos

const { Text } = Typography;

const Footer = () => {
  return (
    <div className="footer">
      <Row justify="center" align="middle" style={{ width: "100%" }}>
        <Col xs={24} sm={12} md={8} lg={6} className="footer-column">
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "var(--font-family)",
              fontSize: "var(--font-size-body)",
            }}
          >
            © 2024 Spotify BV
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
