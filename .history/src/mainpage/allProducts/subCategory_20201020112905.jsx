import React, { useState } from 'react'


export default function SubCategory({ subCategorySelected, detailSelected }) {

    const [isButtonClicked, setButtonClicked] = useState(true);
    const [buttonValue, setButtonValue] = useState('');

    const onSubCategoryClicked = (event) => {
        
        setButtonValue(event.target.value);
        console.log("sub:" +buttonValue);
        
        
    }
        const arr1 = [];
    if ((detailSelected === "mechanical") && (subCategorySelected === "product drawing")) {
        arr1.push('3D Drawings', '2D Drawings');
    }
    else if
    return (
        <div>
            <div className="prodDetail-outer">
                <p>{subCategorySelected} >> {detailSelected}</p>

                {arr1.map(cat => {
                    return (
                        <div> 
                        <button className="sub-category-inner" value = {cat} onClick={onSubCategoryClicked}>{cat}</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}