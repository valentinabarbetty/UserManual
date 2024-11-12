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
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="Spotify Logo" />
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
    
      
    </Header>
  );
};

export default Navbar;
