import React from 'react'
import './style.scss'

function ProductOverView() {
  return (
    <div className='ProductOverView'>
        <div className='productOverViewNav'>
                <div className='overviewH2'>
                    <h2>PRODUCT OVERVIEW</h2>
                    </div>
         <div className="overWievNav">
         <div className="productOverViewLeft">
                <ul className='allCategory'>
                    <li>All Products</li>
                    <li>Women</li>
                    <li>Bag</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                    </ul>
            </div>
        <div className='productOverViewRight'>
                <div className='button'>
                    <button><i class="fa-solid fa-filter"></i>Filter</button>
                    <button><i class="fa-solid fa-magnifying-glass"></i>search</button>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default ProductOverView