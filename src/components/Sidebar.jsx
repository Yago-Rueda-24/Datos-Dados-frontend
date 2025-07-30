// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const menuItems = [
  { name: 'Inicio', path: '/dashboard' },
  { name: 'Finanzas', path: '/dashboard/finanzas' },
  { name: 'Perfil', path: '/dashboard/perfil' },
];

function Sidebar() {
    return (
        <aside className="sidebar">
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
