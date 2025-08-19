// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { Dice1, Dice6 } from "lucide-react"

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
                <div className='dices'>
                    <Dice6 className='dice6' />
                    <Dice1 className='dice1' />
                </div>
                <p className='dashboard-title'>Datos&Dados</p>
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
