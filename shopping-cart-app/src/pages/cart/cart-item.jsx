import React from "react";
import {ShopContext} from "../../context/shop-context"

export const CartItem = (props) => {
    const { id, title, price, image } = props.data;
    const roundedPrice = price.toFixed(2);

    return (
        <div className="cartItem">
            <img src={image} />
            <div className="description">
                <p>
                    <b>{title}</b>
                </p>
                <p> ${roundedPrice}</p>
            </div>
        </div>
    );
};