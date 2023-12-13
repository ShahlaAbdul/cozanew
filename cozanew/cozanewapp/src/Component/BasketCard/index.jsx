import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basketContext'
import './style.scss'

function BasketCard() {
  const { removeBasket, increaseCount, decreaseCount, basket } = useContext(BasketContext)

  return (
    <div className="basketcontainer">
      <div className="basketCard">
        <table className='basketcontent'>
          <th className='baskethead'>
            <td className='first'>Product</td>
            <td className='second'>price</td>
            <td className='third'>Quantity</td>
            <td className='fourth'>Total</td>
          </th>
          <tr>
            {basket.map((x) => (
              <tr className='cardd'>
                <td className='first'>
                 <div> <img src={x.thumbnail} alt="" /></div>
                 <div>{x.name.slice(0, 18)}</div>

                  </td>
                
                <td className='second'>${x.price}</td>
                
                <td className='third'>
                  <button onClick={() => increaseCount(x)}>+</button>
                  <span>{x.count}</span>
                  <button onClick={() => decreaseCount(x)}>-</button>
                  <button onClick={() => removeBasket(x)}>remove</button>
                </td>
                <td className='fourth'>${(x.price*x.count).toFixed(1)}</td>
              </tr>
            ))}
          </tr>
        </table>
    

        {/* <div className="basketelement">

          {basket.map((x) => (
            <ul className="basketproduct">
              <li>{x.name.slice(0, 18)}</li>
              <li>{x.price}</li>
              <div className="basketbuttons">
                <button onClick={() => increaseCount(x)}>+</button>
                <p>{x.count}</p>
                <button onClick={() => decreaseCount(x)}>-</button>

              </div>
              <button onClick={() => removeBasket(x)}>remove</button>
            </ul>
          ))}
        </div> */}
      </div>
      <div className="cardTotal">
          <h2>Card Totals</h2>
          <div className="subtotal">
          <span>Subtotal:</span> 
          <span>$79.64</span>
          </div>
          <div className="shipping">
            <span>Shipping:</span>
           <div className='shippingright'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque molestias itaque eum? Deleniti eius laudantium consectetur?</p>
           <h5>CALCULATE SHIPPING</h5>
           
           <form className='basketform' action="" >
           <select name="" id="">
            <option value="">select a count</option>
            <option value="">USA</option>
            <option value="">UK</option>
           </select>
            <input type="text" placeholder='State / Country' />
            <input type="text" placeholder='Postcode /zip'/>
            <button className='formButton'>UPDATE TOTALS</button>
           </form>
          
       
           </div>
           
          </div>
          <div className="totalmain">
          <div className="basketBottomTotal">
            <span>Total:</span>
            <span>$878.4</span>
          </div>
          <div >
            <button className="basketBottomButton">PROCEED TO CHECKOUT</button>
          </div>
          </div>

      </div>
    </div>
  );
}

export default BasketCard