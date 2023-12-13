import React, {  createContext, useState } from 'react'

export const wishlistContext=createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([])

    function addWishlist(item) {
        const index=wishlist.findIndex((x)=>x.id===item.id)
        if (index===-1) {
            setWishlist([...wishlist, {...item}])
            return
        }
        else {
            removeWishlist(item)
         
        }
        
    }
    function removeWishlist(item) {
        setWishlist(wishlist.filter((x)=>x.id!==item.id))
    }
    const data ={addWishlist,removeWishlist,wishlist}
  return (
    <wishlistContext.Provider value={data}>
        {children}
    </wishlistContext.Provider>
    
  )
}

export default WishlistProvider