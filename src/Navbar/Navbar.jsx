import React from 'react';
import { Layout, Input, Button, Menu, Dropdown } from 'antd';
import { SearchOutlined, GlobalOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Log out</Menu.Item>
    </Menu>
  );

  return (
    <Header className="navbar">
      <div className="navbar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify Logo" />
      </div>
      <Input
        className="navbar-search"
        placeholder="Buscar"
        prefix={<SearchOutlined />}
      />
      <div className="navbar-links">
        <span>Inicio</span>
        <span>Ayuda con un dispositivo</span>
      </div>
      <div className="navbar-buttons">
        <Button className="premium-button">Explorar Premium</Button>
        <Button className="install-button">Instalar aplicación</Button>
      </div>
      <div className="navbar-icons">
        <GlobalOutlined />
        <Dropdown overlay={menu}>
          <Button icon={<UserOutlined />} className="account-button">
            Account <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
