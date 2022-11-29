import React from "react";
import Item from './Item'
import icono from '../assets/icono.png'

const Navbar = () => {
    let home = "home";
    let categoria1 = "Titlo cat 1";
    let categoria2 = "Titulo cat 2";
    let categoria3 = "Titulo cat 3";

    return <>
        <nav>
            <div className="brand">
                <img src={icono} alt="Logo Image"/>
            </div>
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <Item title={home}/>
                <Item title={categoria1}/>
                <Item title={categoria2}/>
                <Item title={categoria3}/>
            </ul>
            <div className="add-container">
                <svg className="carrito" width="24" height="24" viewBox="0 0 24 24" fill="#f2f5f7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.25 17.25H6.54375L3.92813 2.86875C3.89752 2.69653 3.80768 2.54042 3.67415 2.42743C3.54062 2.31444 3.37179 2.25168 3.19687 2.25H1.5" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7.5 21C8.53553 21 9.375 20.1605 9.375 19.125C9.375 18.0895 8.53553 17.25 7.5 17.25C6.46447 17.25 5.625 18.0895 5.625 19.125C5.625 20.1605 6.46447 21 7.5 21Z" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M17.25 21C18.2855 21 19.125 20.1605 19.125 19.125C19.125 18.0895 18.2855 17.25 17.25 17.25C16.2145 17.25 15.375 18.0895 15.375 19.125C15.375 20.1605 16.2145 21 17.25 21Z" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.85938 13.5H17.6344C17.985 13.5011 18.3247 13.3785 18.5939 13.1539C18.8631 12.9293 19.0445 12.617 19.1063 12.2719L20.25 6H4.5" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span className="number_carrito">1</span>
            </div>
        </nav>
    </>
}

export default Navbar;