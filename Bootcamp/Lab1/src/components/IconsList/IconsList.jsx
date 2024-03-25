import React from "react";
import UserIcon from "..";
import LikeIcon from "..";
import Carticon from "..";

function IconsList() {
    const whiteIconStyle = { filter: "invert(100%)"}; // Estilo para hacer los iconos blancos

    return (
        <ul className="user-icons">
            <li className="user-icon">
                <img src={UserIcon} alt="" style={whiteIconStyle} />
            </li>
            <li className="like-icon">
                <img src={LikeIcon} alt="" style={whiteIconStyle} />
            </li>
            <li className="cart-icon">
                <img src={CartIcon} alt="" style={whiteIconStyle} />
            </li>
        </ul>
    );
}

export default IconsList;