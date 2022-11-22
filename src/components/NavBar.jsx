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
                <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412544/E-commerce%20landing%20page/icons/shopping_cart_1x.png" className="carrito"/>
                <span className="number_carrito">1</span>
            </div>
        </nav>
    </>

}

export default Navbar;