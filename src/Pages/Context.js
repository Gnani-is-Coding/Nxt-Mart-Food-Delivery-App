import {createContext, useState, useContext} from 'react'

const ContextObject = createContext({})

export const ContextProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])
  console.log(cartProducts)

  const addToCart = obj => {
    setCartProducts(prevProducts => {
      const productExist = prevProducts.find(prods => prods.name === obj.name)
      if (productExist) {
        return prevProducts.map(prods =>
          prods.name === obj.name
            ? {...prods, quantity: prods.quantity + 1}
            : {...prods},
        )
      }
      return [...prevProducts, {...obj, quantity: 1}]
    })
    console.log(cartProducts, 'cart')
  }

  const removeFromCart = id => {
    setCartProducts(prevProducts =>
      prevProducts.filter(product => product.id !== id),
    )
  }

  const clearCart = () => {
    setCartProducts([])
  }

  return (
    <ContextObject.Provider
      value={{cartProducts, addToCart, removeFromCart, clearCart}}
    >
      {children}
    </ContextObject.Provider>
  )
}

// CUSTOM Hook
export const useCart = () => useContext(ContextObject)
