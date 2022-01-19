import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return(
        <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
      </ul>
    </header>
    )
}