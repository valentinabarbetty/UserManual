import React from 'react';
import { SpotifyOutlined, UserOutlined, WifiOutlined, UnorderedListOutlined, AppstoreOutlined, CreditCardOutlined, SoundOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Sidebar.css';

const items = [
  { key: '1', label: <span className="menu-label">¿Qué es Spotify?</span>, icon: <SpotifyOutlined className="menu-icon" /> },
  { key: '7', label: <span className="menu-label">Tu Cuenta</span>, icon: <UserOutlined className="menu-icon" />,
    children: [
      { key: '8', label: 'Regístrate' },
      { key: '9', label: 'Inicia Sesión' },
    ]
  },
  { key: '12', label: <span className="menu-label">Spotify Premium</span>, icon: <CreditCardOutlined className="menu-icon" /> },
  { key: '10', label: <span className="menu-label">Explora tu Spotify</span>, icon: <AppstoreOutlined className="menu-icon" /> },
  { key: '6', label: <span className="menu-label">Personaliza el Sonido</span>, icon: <SoundOutlined className="menu-icon" /> },
  { key: '11', label: <span className="menu-label">Comparte tu Música</span>, icon: <ShareAltOutlined className="menu-icon" /> },
  { key: '3', label: <span className="menu-label">Listas de Reproducción</span>, icon: <UnorderedListOutlined className="menu-icon" /> },
  { key: '4', label: <span className="menu-label">Sigue Nuevos Artistas</span>, icon: <UserOutlined className="menu-icon" /> },
  { key: '5', label: <span className="menu-label">Escucha sin Conexión</span>, icon: <WifiOutlined className="menu-icon" /> },
];

const Sidebar = ({ onMenuClick, selectedContent, openKeys, setOpenKeys  }) => {
  const handleClick = (e) => {
    onMenuClick(e.key);
  };

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <Menu
    onClick={handleClick}
    className="custom-menu"
    selectedKeys={[selectedContent]}
    openKeys={openKeys}
    onOpenChange={onOpenChange} // Controla el cambio de apertura
    mode="inline"
    items={items}
    theme="dark"
  />
  );
};

export default Sidebar;
