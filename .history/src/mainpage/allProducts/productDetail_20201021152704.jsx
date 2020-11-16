import React, { useState } from 'react'
import './allProducts.scss';
import { useParams } from 'react-router-dom';
import SubCategory from './subCategory';
export default function ProductDetail({ detailselected }) {
    // let { id } = useParams();
    // console.log({ id });
    const arr1 = [];

    if (detailselected === "mechanical") {
        arr1.push('Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes', 'Costing', 'BOM');
    }
    else if (detailselected === "electronics") {
        arr1.push('Gerber files', 'Schematics', 'Firmware Source Code & HEX Files', 'Inline Changes', 'Costing', 'BOM');
    }
    else if (detailselected === "electrical") {
        arr1.push('In-house Designs', 'Externally sourced', 'New Component Dev', 'Inline Changes', 'Costing', 'BOM');
    }
    else if (detailselected === "testing") {
        arr1.push('Testing Protocols', 'Testing Setup', 'Testing Equipment', 'Testing  Process Changes', 'Test Results', 'Field Input');
    }
    else if (detailselected === "product accessories and peripherals") {
        arr1.push('Battery Pack', 'Battery Charger', 'Bags & Packs', 'Mounting Accessories', 'Apparel', 'Miscellaneous');
    }
    const [inDetailClicked, setInDetailClicked] = useState(false);
    const [subCategorySelected, setDetail] = useState('');
    const [buttonValue, setButtonValue] = useState('');

    const onDetailClicked = (event) => {
        setInDetailClicked(true);
        setDetail(event.target.value);
        setButtonValue(event.target.getAttribute("data-index"));

        console.log("details:" + subCategorySelected);
    }

    return (
        <div>
            <div >
                <p>{detailselected}</p>
                {arr1.map((cat, index) => {
                    return (
                        <button   data-index={index} className={ buttonValue.toString() === index.toString() ? 'category-inner-clicked':'category-inner'} value={cat.toLowerCase()}  onClick={onDetailClicked}>{cat}</button>
                   
                        // <button className="category-inner" value={cat.toLowerCase()} onMouseOver={onDetailClicked}>{cat}</button>
                    )
                })}
            </div>
            <div style={{height="20px"}}>ab</div>
            <div >
                {inDetailClicked && <SubCategory subCategorySelected={subCategorySelected} detailSelected={detailselected} />}
            </div>

        </div>
    )
}