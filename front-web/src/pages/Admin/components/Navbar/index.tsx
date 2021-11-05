import React from "react";
import './styles.scss';

const Navbar = () => (
    <nav className="admin-nav-container">
        <li>
            <a href="link" className="admin-nav-item active">Meus Produtos</a>
        </li>
        <li>
            <a href="link" className="admin-nav-item">Minhas Categorias</a>
        </li>
        <li>
            <a href="link" className="admin-nav-item">Meus Usuários</a>
        </li>
    </nav>
);

export default Navbar;