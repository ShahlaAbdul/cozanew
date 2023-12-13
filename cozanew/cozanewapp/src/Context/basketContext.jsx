import React, { createContext, } from 'react'
import useLocalStorage from '../Hook/useLocalStorage'


export const BasketContext=createContext()
function  BasketProvider({children}) {
     const [basket, setBasket] = useLocalStorage("basket", []);

    function addBasket(item) {
        const index=basket.findIndex((x)=>x.id===item.id)
        if (index===-1) {
            setBasket([...basket,{...item,count:1}])
            return
        }
        else{
            basket[index].count++
            setBasket([...basket])
        } 
    }
    function removeBasket(item) {
        setBasket(basket.filter((x)=>x.id!==item.id))
    }
    function increaseCount(item){
        const index=basket.findIndex((x)=>x.id===item.id)
        basket[index].count++
        setBasket([...basket])

    }
    function decreaseCount(item) {
        const index=basket.findIndex((x)=>x.id===item.id)
        if (basket[index].count!==1) {
            basket[index].count--
            setBasket([...basket])
        }
        return
    }

   const data={addBasket,removeBasket,increaseCount,decreaseCount,basket}
  return (
    <BasketContext.Provider value={data}>
{children}
    </BasketContext.Provider>
  )
}

export default BasketProvider