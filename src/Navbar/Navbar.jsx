import React, { useState } from 'react';
import { Layout, Input, Menu, Dropdown } from 'antd';
import { SearchOutlined, UserOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  return (
    <Header className="navbar">
      <div className="navbar-logo">
        <a href="https://support.spotify.com/co-es/" target="_blank" rel="noopener noreferrer">
          <img
            className="navbar-logo-icon"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
            alt="Spotify Logo"
          />
        </a>
        <span className="navbar-logo-text">Spotify</span>
      </div>
      <div className="navbar-options">
        <Input
          className="navbar-search"
          placeholder="Buscar"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className={`navbar-links ${visible ? 'visible' : ''}`}>
        <span className="navbar-link">Profile</span>
        <span className="navbar-link">Settings</span>
      </div>
      <div className="navbar-mobile-menu" onClick={handleMenuClick}>
        <MenuOutlined style={{ color: 'white', fontSize: '24px' }} />
      </div>
    </Header>
  );
};

export default Navbar;
