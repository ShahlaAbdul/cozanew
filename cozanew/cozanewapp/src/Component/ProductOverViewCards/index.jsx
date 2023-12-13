import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { wishlistContext } from '../../Context/wishlistContext'
import { BasketContext } from '../../Context/basketContext'


function ProductOverViewCards() {
  const [fetchData, setFetchData] = useState([])
  const {addWishlist} = useContext(wishlistContext)
 const  {addBasket}=useContext(BasketContext)

  useEffect(() => {
    fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
      .then((res) => res.json())
      .then((data) => setFetchData(data))
  }, [])



  return (
    <div>

      <div className="productOverViewCardContainer">
        {
          console.log(fetchData)
        }
        {fetchData.map((x) =>
          <div className='cardc'>
            <ul className="productOverViewCard" >
              <img src={x.thumbnail} alt="" />
              <li className='productCardText'>
                <li>
                  <li className='grayname'>{x.name.slice(0,16)}</li>
                  <li className=''>{x.price}</li>
                </li>

                <li>
                  <button><i onClick={()=>addWishlist(x)} class="fa-regular fa-heart"></i></button>
                </li>
                <li><button onClick={()=>addBasket(x)}> add</button></li>
              </li>


            </ul>
          </div>

        )}

      </div>

    </div>
  )
}

export default ProductOverViewCards