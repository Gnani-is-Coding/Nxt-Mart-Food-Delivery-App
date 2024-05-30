import {useState, useEffect} from 'react'

import LoadingView from '../LoadingView'
import {useCart} from '../Context'
import MobileNavigationContainer from '../../Components/MobileNavigationContainer'
import Footer from '../../Components/FooterSection'

import './index.css'

const viewsObject = {
  loadingView: 'LOADING',
  successView: 'SUCCESS',
  paymentView: 'PAYMENT',
  emptyCartView: 'EMPTYCART',
}

function Cart() {
  const [currentView, setCurrentView] = useState(viewsObject.loadingView)
  const [cartProductsData, setCartProducts] = useState([])
  const {decreaseQuantity, increaseQuantity, cartProducts} = useCart()

  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem('cartData'))
    console.log(storedCartData, 'stored')
    setCartProducts(storedCartData)
    setCurrentView(
      storedCartData.length < 0
        ? viewsObject.emptyCartView
        : viewsObject.successView,
    )
  }, [cartProducts])

  const renderSuccessView = () => (
    <div>
      <div className="cart-header-container">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="checkout-icon"
        >
          <path
            d="M7.97501 4.94189L2.91667 10.0002L7.97501 15.0586"
            stroke="#292D32"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 10H3.05833"
            stroke="#292D32"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h4 className="cart-heading">Checkout</h4>
        <p />
      </div>

      <div className="items-container">Items ({cartProductsData.length})</div>

      <ul className="cart-product-items-container">
        {cartProductsData.map(productObj => (
          <li key={productObj.id} className="cart-product-item-container">
            <div className="cart-item-image-content-container">
              <img
                src={productObj.image}
                alt={productObj.name}
                className="product-image"
              />

              <div className="product-details">
                <h4 className="product-heading">{productObj.name}</h4>
                <p className="product-price">{productObj.weight}</p>
                <div className="price-add-container">
                  <p>{productObj.price}</p>
                </div>
              </div>
            </div>

            <button type="button" className="add-btn">
              <div className="add-btn-container">
                <svg
                  onClick={() => decreaseQuantity(productObj.name)}
                  className="plus-btn"
                  width="10"
                  height="2"
                  viewBox="0 0 10 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H9"
                    stroke="#088C03"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span style={{cursor: 'text'}}>{productObj.quantity}</span>

                <svg
                  onClick={() => increaseQuantity(productObj.name)}
                  className="plus-btn"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H9"
                    stroke="#088C03"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 9V1"
                    stroke="#088C03"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="checkout-btn-container">
        <p>Total ({cartProductsData.length} items) : ₹ 300</p>
        <button type="button" className="checkout-btn">
          Checkout
        </button>
      </div>

      <Footer />

      <MobileNavigationContainer />
    </div>
  )

  const renderCartView = () => {
    switch (currentView) {
      case viewsObject.loadingView:
        return <LoadingView />
      case viewsObject.successView:
        return renderSuccessView()
      default:
        return null
    }
  }

  return <div>{renderCartView()}</div>
}

export default Cart
