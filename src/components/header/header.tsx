import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    return(
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to="/" className="nav-link">Create</NavLink></li>
        <li className="nav-item"><NavLink to="/edit" className="nav-link">Edit</NavLink></li>
        <li className="nav-item"><NavLink to="/view" className="nav-link">View</NavLink></li>
      </ul>
    </header>
    )
}