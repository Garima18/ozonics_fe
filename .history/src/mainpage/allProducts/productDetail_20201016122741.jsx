import React from 'react'
import './allProducts.scss';

export default function ProductDetail() {
    return (
        <div>
          
            <div className="category-inner"><button>Product Drawing</button></div>
            <div  className="category-inner"><button>Packaging</button></div>
            <div  className="category-inner"><button>Product Assembly</button></div>
            <div  className="category-inner"><button>inline changes</button></div>
            <div  className="category-inner"><button>Costing</button></div>
            <div  className="category-inner"><button>BOM</button></div>
        </div>
    )
}