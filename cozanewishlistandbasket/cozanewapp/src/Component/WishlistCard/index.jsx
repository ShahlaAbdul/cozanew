import React, { useContext, useEffect, useState } from 'react'
import { wishlistContext } from '../../Context/wishlistContext'

function WishlistCard() {
    const { wishlist, removeWishlist } = useContext(wishlistContext)

    // useEffect(() => {
    //     fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
    //       .then((res) => res.json())
    //       .then((data) => setWihlistdata(data))
    //   }, [])
    //   console.log(setWihlistdata);



    return (
        <div>
            <div className="wishlistCard">
                <div className="wihlistelement">
                    {wishlist.map((x) => (
                        <ul>
                            <li>{ }</li>
                            <li>{x.price}</li>
                            <li><button onClick={() => removeWishlist(x)}>remove</button></li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WishlistCard