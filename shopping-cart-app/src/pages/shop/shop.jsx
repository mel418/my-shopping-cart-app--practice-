import React, { useState, useEffect } from 'react';
import { productList } from "../../products";
import { Product } from './product';
import "./shop.css";

export const Shop = () => {
    const [PRODUCTS, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const fetchedProducts = await productList();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Mock Shop</h1>
            </div>

            <div className='container'>
                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Product data={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
