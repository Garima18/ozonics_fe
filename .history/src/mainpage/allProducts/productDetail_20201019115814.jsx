import React, { useState } from 'react'
import './allProducts.scss';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ detailselected }) {
    let { id } = useParams();
    console.log({ id });
    const arr1=[];

    if(detailselected==="mechanical"){
        arr1.push('Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes','Costing', 'BOM');
    }
    else if(detailselected==="electronics"){
        arr1.push('Gerber files', 'Schematics', 'Firmware Source Code & HEX Files', 'Inline Changes','Costing', 'BOM');
    }
    else if(detailselected ==="electrical"){
        arr1.push('In-house Designs', 'Externally sourced', 'New Component Dev', 'Inline Changes','Costing', 'BOM');
    }
    else if(detailselected ==="testing"){
        arr1.push('Testing Protocols', 'Testing Setup', 'Testing Equipment', 'Testing  Process Changes','Test Results', 'Field Inputs');
    }
    else if(detailselected ==="peripherals"){
        arr1.push('Battery Pack', 'Battery Charger', 'Bags & Packs', 'Mounting Accessories','Apparel', 'Miscellaneous');
    }
    const [inDetailClicked, setInDetailClicked] = useState(false);
    const [detailValue, setDetail] = useState('');

    const onDetailClicked = (event) => {
        setInDetailClicked(true);
        setDetail(event.target.value);
        console.log("details:"+detailValue);
    }

    return (
        <div>
            <p>{detailselected}</p>
            {arr1.map(cat=>{
                return(
                    <div><button className="category-inner" value={cat} onClick={onDetailClicked}>{cat}</button></div>
                )
            })}
              <div className="sub-ca-outer">
                    {inDetailClicked && <div>Yess</div>}
                </div>
        </div>
    )
}