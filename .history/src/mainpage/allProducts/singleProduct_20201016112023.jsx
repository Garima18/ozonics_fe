import React, { Component, useState } from 'react'
import Header from '../../shared/header/header';
import { useParams, Link } from 'react-router-dom';
import './allProducts.scss';
import productDetail from './'
export default function Products() {

    let { id } = useParams();
    const [inProductClicked, setInProductClicked] = useState(false);
    const onProductClicked = () => {
        setInProductClicked(true);
        console.log("id" + id);
    }

    return (

        <div className="bg-color">
            <Header />
            <div className="detail-outer">
                <h2><span>{id}</span></h2>
                <div style={{ marginTop: "30px" }}>
                    <div><Link to="/productDetail/{id}/Mechanical" onClick={onProductClicked}><button className="detail-button">Mechanical</button></Link></div>
                    <div><Link to="/productDetail/{id}/electronics" onClick={onProductClicked}><button className="detail-button">Electronics</button></Link></div>
                    <div><Link to="/productDetail/{id}/electrical" onClick={onProductClicked}><button className="detail-button">Electrical</button></Link></div>
                    <div><Link to="/productDetail/{id}/Testing" onClick={onProductClicked}><button className="detail-button">Testing</button></Link></div>
                    <div><Link to="/productDetail/{id}/peripherals" onClick={onProductClicked}><button className="detail-button">Product Accessories and Peripherals</button></Link></div>
                </div>
                {inProductClicked && <Products />}
            </div>
        </div>
    )
}

