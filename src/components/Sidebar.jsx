// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const menuItems = [
    { name: 'Inicio', path: '/dashboard' },
    { name: 'Personajes', path: '/character' },
    { name: 'Wiki', path: '/wiki' },
    { name: 'Campañas', path: '/campaigns' },
];

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src="src/assets/Icon.png" alt="Logo" className="sidebar-logo" />
                <div className='sidebar-title'>
                    <p className='enfasis-text'>Mi dashboard</p>
                    <p className='text'>Panel de control</p>
                </div>
            </div>
            <p className='text'>Menu principal</p>
            <nav>
                <ul>
                    {menuItems.map((item, idx) => (
                        <li key={idx}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>

    );
}

export default Sidebar;
