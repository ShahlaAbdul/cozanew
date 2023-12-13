import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basketContext'
import './style.scss'

function BasketCard() {
    const { removeBasket, increaseCount, decreaseCount, basket } = useContext(BasketContext)

    return (
      <div className="basketcontainer">
        <div className="basketCard">
          <div className="baskethead">
            <p>Product</p>
            <div className="baskettitle">
              <p>price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
          </div>

          <div className="basketelement">
            
            {basket.map((x) => (
              <ul className="basketproduct">
                <li>{x.name.slice(0, 18)}</li>
                <li>{x.price}</li>
                <li>
                        <button onClick={() => increaseCount(x)}>+</button>
                        <button>{x.count}</button>
                  <button>-</button>
                  <li onClick={() => decreaseCount(x)}></li>
                </li>
                  <button onClick={() => removeBasket(x)}>remove</button>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
}

export default BasketCard