import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar(){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-text mx-3">Chubacha</div>
        </a>


        <hr className="sidebar-divider my-0" />

        
        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
            <Link className="nav-link" to="/products">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Products</span></Link>
        </li>


        <li className="nav-item">
            <Link className="nav-link" to="/users">
                <i className="fas fa-fw fa-table"></i>
                <span>Users</span></Link>
        </li>


        <hr className="sidebar-divider d-none d-md-block"/>
    </ul>
    )
}

export default Sidebar;