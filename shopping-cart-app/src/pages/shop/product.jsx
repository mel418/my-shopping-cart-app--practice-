import React, { useContext } from "react";
import {ShopContext} from '../../context/shop-contex'

export const Product = (props) => {
    const { id, title, price, image } = props.data;
    const { addToCart } = useContext(ShopContext);
    return <div className="product">
        <img src={image} />
        <div className="description">
            <p>
                <b>{title}</b>
            </p>
            <p> ${price}</p>
        </div>
        <div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                {" "}
                Add to Cart
            </button>
        </div>
    </div>;
}