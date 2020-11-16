import React, { useState } from 'react'


export default function SubCategory({ subCategorySelected, detailSelected }) {

    const [isButtonClicked, setButtonClicked] = useState(true);
    const [buttonValue, setButtonValue] = useState('');

    const onSubCategoryClicked = (event) => {
        setButtonClicked(false);
        set
    }
    let btn_class = isButtonClicked ? "sub-category-inner":"clicked-button";
        const arr1 = [];
    if ((detailSelected === "mechanical") && (subCategorySelected === "product drawing")) {
        arr1.push('3D Drawings', '2D Drawings');
    }

    return (
        <div>
            <div className="prodDetail-outer">
                <p>{subCategorySelected} >> {detailSelected}</p>

                {arr1.map(cat => {
                    return (
                        <button className={btn_class} value = {cat} onClick={onSubCategoryClicked}>{cat}</button>
                    )
                })}
            </div>

        </div>
    )
}
