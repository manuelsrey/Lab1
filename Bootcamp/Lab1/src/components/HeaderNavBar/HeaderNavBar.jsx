import React from "react";

function HeaderNavBar() {
    const menuOptions = ["Inicio", "Categorías", "Ofertas", "Contacto"];

    return (
        <>
        <div className="logo">MiTienda</div>
        <ul>
            {menuOptions.map((opt) => (
                <li key={opt}>{opt}</li>
            ))}
        </ul>
        <div className="search-bar">
            <input type="text" placeholder="Buscar productos" />
        </div>         
    </>
    );
}

export default HeaderNavBar;