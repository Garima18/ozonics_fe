import React from 'react'
import './allProducts.scss';
import { useParams } from 'react-router-dom';

export default function ProductDetail({detail-selected}) {
    let { id } = useParams();
    console.log({id});
    

    const category1 = ['Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes','Costing', 'BOM'];
    return (
        <div>
        if({id}===)
         { category1.map(cat=>{
             return(
                 <div className="category-inner">{cat}</div>
             )
         })}
           
        </div>
    )
}
