import React from 'react';
import { SpotifyOutlined, UserOutlined, WifiOutlined, AudioOutlined, UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons'; // Importando los íconos
import { Menu } from 'antd';
import './Sidebar.css';

const items = [
  {
    key: '1',
    label: <span className="menu-label">¿Qué es Spotify?</span>,
    icon: <SpotifyOutlined className="menu-icon" />,
  },
  {
    key: '7',
    label: <span className="menu-label">Tu Cuenta</span>,
    icon: <UserOutlined className="menu-icon" />,
    
        children: [
          {
            key: '8',
            label: 'Regístrate',
          },
          {
            key: '9',
            label: 'Inicia Sesión',
          },
        ],
  },
  {
    key: '2',
    label: <span className="menu-label">Explora la Biblioteca</span>,
    icon: <AppstoreOutlined className="menu-icon" />,
  },
  {
    key: '3',
    label: <span className="menu-label">Crea Listas de Reproducción</span>,
    icon: <UnorderedListOutlined className="menu-icon" />,
  },
  {
    key: '4',
    label: <span className="menu-label">Sigue Nuevos Artistas</span>,
    icon: <UserOutlined className="menu-icon" />,
  },
  {
    key: '5',
    label: <span className="menu-label">Escucha sin Conexión</span>,
    icon: <WifiOutlined className="menu-icon" />,
  },
  {
    key: '6',
    label: <span className="menu-label">Personaliza la Calidad de Sonido</span>,
    icon: <AudioOutlined className="menu-icon" />,
  },
];

const Sidebar = ({ onMenuClick }) => {
  const handleClick = (e) => {
    onMenuClick(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      className="custom-menu"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
      theme="dark" 
    />
  );
};

export default Sidebar;
