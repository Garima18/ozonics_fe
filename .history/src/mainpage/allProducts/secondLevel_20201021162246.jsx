import React from 'react'

export default function secondLevel({detailSelected, subCategorySelected, secondLevelSelected}) {

    const arr1=[];

    if((secondLevelSelected === "3d drawings")||
    (secondLevelSelected === "2d drawings") ||
    (secondLevelSelected==="product assembly")||
    (secondLevelSelected==="product chassis")||
    (secondLevelSelected==="main product")
    )
    {
arr1.push
    }
    return (
        <div>
            <p>{detailSelected}/{subCategorySelected}/{secondLevelSelected}</p>
        </div>
    )
}

