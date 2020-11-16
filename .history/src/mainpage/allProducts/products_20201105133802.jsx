import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from "../../shared/header/header";
import CategoryList from "./productDetail";

export default function Products() {
    const [inProductClicked, setInProductClicked] = useState(false);
    const onProductClicked = () => {
        setInProductClicked(true);
        console.log("Product:" + inProductClicked);

    }

    return (


        <div className="bg-color">
            <Header />

            <div className="products-outer">
                <h2><span>Products</span></h2>
                <div className="products-inner"><Link to="/product/HR230" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">HR230</button></Link></div>
                <div className="products-inner"><Link to="/product/HR300" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">HR300</button></Link></div>
                <div className="products-inner"><Link to="/product/HR400" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">HR400/Orion</button></Link></div>
                <div className="products-inner"><Link to="/product/Orion2" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">Orion2</button></Link></div>
                <div className="products-inner"><Link to="/product/Pulse" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">Pulse</button></Link></div>

            </div>
            {inProductClicked && <CategoryList  detailselected={/>}

        </div>

    )
}


