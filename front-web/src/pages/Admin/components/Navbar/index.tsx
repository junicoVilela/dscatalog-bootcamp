import React from "react";
import { NavLink } from "react-router-dom";
import './styles.scss';
import {isAllowedByRole} from "../../../../core/utils/auth";

const Navbar = () => (
    <nav className="admin-nav-container">
        <li>
            <NavLink to="/admin/products" className="admin-nav-item">Meus Produtos</NavLink>
        </li>
        <li>
            <NavLink to="/admin/categories" className="admin-nav-item">Minhas Categorias</NavLink>
        </li>
        {isAllowedByRole(['ROLE_ADMIN']) && (
            <li>
                <NavLink to="/admin/users" className="admin-nav-item">Meus Usuários</NavLink>
            </li>
        )}
    </nav>
);

export default Navbar;