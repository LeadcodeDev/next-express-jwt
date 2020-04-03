import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ActiveLinks from '../ActiveLinks/ActiveLinks';

const Navbar = ({ isAuth, logout }) => {
    const { pathname } = useRouter()
    const [showNavbar, setShowNavbar] = useState(false)
    const configuration = {
        navbarBrand: 'Navbar brand'
    }

    const toggleNavbar = () => {
        const sidebar = document.getElementById('sidebar-id')
        if (showNavbar == false) {
            sidebar.classList.add('active')
            setShowNavbar(true)
        } else {
            sidebar.classList.remove('active')
            setShowNavbar(false)
        }
    }


    const { navbarBrand } = configuration

    return (
        <div className="off-canvas">
            <header className="navbar sticky-top">
                <div className="container grid-xl">
                    <section className="navbar-section">
                        <div className="d-inline-flex py-2">
                            <a className="text-blue btn btn-link show-sm mr-4" onClick={toggleNavbar}><i className="ti-menu"></i></a>
                            <Link href="/"><a className="navbar-brand text-blue btn btn-link mr-2 active">{navbarBrand}</a></Link>
                        </div>
                        <div className="ml-auto hide-sm">
                            <Link href="/"><a className="text-blue btn btn-link">Item</a></Link>
                            <a href="https://github.com/LeadcodeDev" className="text-blue btn btn-link" target="_blank">Github</a>
                        </div>
                    </section>
                </div>
            </header>

            <div id="sidebar-id" className="off-canvas-sidebar show-sm">
                <ul className="nav">
                    <li className="nav-item active">
                        <a className="text-blue">{navbarBrand}</a>
                    </li>
                </ul>
                <ul className="nav">
                    <ActiveLinks target={"/"} navbar={showNavbar} toggle={toggleNavbar}>Accueil</ActiveLinks>
                    <li className={pathname == "" || pathname == "/documentation/creation-de-votre-site-web" ? "nav-item active" : "nav-item"}>
                        <a>Documentation</a>
                        <ul className="nav">
                            <ActiveLinks target={"/documentation/creation-de-votre-site-web"} navbar={showNavbar} toggle={toggleNavbar}>Votre site web</ActiveLinks>
                            <ActiveLinks target={"/documentation/creation-de-votre-site-web"} navbar={showNavbar} toggle={toggleNavbar}>Hébergement</ActiveLinks>
                            <ActiveLinks target={"/documentation/referencement-naturel"} navbar={showNavbar} toggle={toggleNavbar}>Référencement</ActiveLinks>
                        </ul>
                    </li>
                    <ActiveLinks target={"/contact"} navbar={showNavbar} toggle={toggleNavbar}>Me contacter</ActiveLinks>
                </ul>
            </div>

            <a className="off-canvas-overlay" onClick={toggleNavbar}></a>
        </div>
    )
}
 
export default Navbar;