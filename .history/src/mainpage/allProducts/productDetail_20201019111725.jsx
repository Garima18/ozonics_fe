import React from 'react'
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
        arr1.push('In-house Designs', 'Externally sourced', 'New Component Dev', '
    }
    return (


        <div>
            <h3>{detailselected}</h3>

            {arr1.map(cat=>{
                return(
                    <div className="category-inner">{cat}</div>
                )
            })}
            {/* {detailselected === "mechanical" &&
                arr1.map(cat => {
                    return (
                    )
                })
            } */}
        </div>
    )
}
