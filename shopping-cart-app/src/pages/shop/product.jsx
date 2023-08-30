import React from "react";

export const Product = (props) => {
    const {id, title, price, image} = props.data;
    return <div className="product">
        <img src={image} />
        <div className="description">
            <p>
                <b>{title}</b>
            </p>
            <p> ${price}</p>
        </div>
        <div>
            <button className="addToCartBttn">Add to Cart</button>
        </div>
    </div>;
}