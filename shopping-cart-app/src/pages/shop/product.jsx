import React, { useContext } from "react";
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const { id, title, price, image } = props.data;
    const { addToCart,cartItems } = useContext(ShopContext);
    
    const roundedPrice = price.toFixed(2);

    const cartItemAmount = cartItems[id];
    return <div className="product">
        <img src={image} />
        <div className="description">
            <p>
                <b>{title}</b>
            </p>
            <p> ${roundedPrice}</p>
        </div>
        <div>
            <button className="addToCartBttn" onClick={
                () => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    </div>;
}