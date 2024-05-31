import {createContext, useState, useContext, useEffect} from 'react'

const ContextObject = createContext({})

export const ContextProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])
  console.log(cartProducts)

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartProducts))
  }, [cartProducts])

  const addToCart = obj => {
    setCartProducts(prevProducts => {
      const productExist = prevProducts.find(prods => prods.name === obj.name)
      if (productExist) {
        return prevProducts.map(prods =>
          prods.name === obj.name
            ? {...prods, count: prods.count + 1}
            : {...prods},
        )
      }
      return [...prevProducts, {...obj, count: 1}]
    })
    console.log(cartProducts, 'cart')
  }

  const increaseQuantity = prodName => {
    setCartProducts(prevProducts =>
      prevProducts.map(obj => {
        if (obj.name === prodName) {
          return {...obj, count: obj.count + 1}
        }
        return obj
      }),
    )
  }

  const removeFromCart = prodName => {
    setCartProducts(prevProducts =>
      prevProducts.filter(product => product.name !== prodName),
    )
  }

  const decreaseQuantity = prodName => {
    setCartProducts(prevProducts =>
      prevProducts.map(obj => {
        if (obj.name === prodName) {
          if (obj.count > 1) {
            return {...obj, count: obj.count - 1}
          }
          removeFromCart(obj.name)
          return {...obj, count: 0}
        }
        return obj
      }),
    )
  }

  const clearCart = () => {
    setCartProducts([])
  }

  return (
    <ContextObject.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ContextObject.Provider>
  )
}

// CUSTOM Hook
export const useCart = () => useContext(ContextObject)
