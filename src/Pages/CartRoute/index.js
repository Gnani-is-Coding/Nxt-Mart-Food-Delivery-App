import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import LoadingView from '../LoadingView'
import {useCart} from '../Context'
import MobileNavigationContainer from '../../Components/MobileNavigationContainer'
import Footer from '../../Components/FooterSection'

import './index.css'
import NavbarLg from '../../Components/NavBarLg'

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
  const [checkoutPrice, setCheckoutPrice] = useState(0)
  const history = useHistory()

  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem('cartData'))
    const TotalPrice = storedCartData.reduce(
      (acc, obj) => acc + obj.quantity * parseInt(obj.price.slice(1)),
      0,
    )

    setCartProducts(storedCartData)
    setCurrentView(
      storedCartData.length > 0
        ? viewsObject.successView
        : viewsObject.emptyCartView,
    )

    setCheckoutPrice(TotalPrice)
  }, [cartProducts])

  const renderSuccessView = () => (
    <div>
      <NavbarLg />
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
        <p>
          Total ({cartProductsData.length} items) : ₹ {checkoutPrice}
        </p>
        <button
          type="button"
          className="checkout-btn"
          onClick={() => setCurrentView(viewsObject.paymentView)}
        >
          Checkout
        </button>
      </div>

      <Footer />

      <MobileNavigationContainer />
    </div>
  )

  const renderEmptyView = () => (
    <div>
      <NavbarLg />
      <div className="empty-view-container">
        <svg
          width="52"
          height="42"
          viewBox="0 0 52 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8064 5.32666C10.8049 5.40327 10.7997 5.48039 10.7907 5.55793L8.75264 23.2764C8.40887 26.1761 11.5765 28.6667 15.6035 28.6667H41.7547C45.2906 28.6667 48.3845 26.5675 48.6546 24.0236L49.9806 10.6814C50.2752 7.72828 47.1813 5.32666 43.0806 5.32666H10.8064Z"
            fill="white"
          />
          <path
            d="M2 2H6.27259C8.92454 2 11.0117 3.65444 10.7907 5.55793M10.7907 5.55793L8.75264 23.2764C8.40887 26.1761 11.5765 28.6667 15.6035 28.6667H41.7547C45.2906 28.6667 48.3845 26.5675 48.6546 24.0236L49.9806 10.6814C50.2752 7.72828 47.1813 5.32666 43.0806 5.32666H10.8064C10.8049 5.40327 10.7997 5.48039 10.7907 5.55793Z"
            stroke="#088C03"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M39.6508 39.8411C41.5794 39.8411 43.1428 38.2776 43.1428 36.349C43.1428 34.4204 41.5794 32.8569 39.6508 32.8569C37.7221 32.8569 36.1587 34.4204 36.1587 36.349C36.1587 38.2776 37.7221 39.8411 39.6508 39.8411Z"
            stroke="#088C03"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3016 39.8411C19.2302 39.8411 20.7937 38.2776 20.7937 36.349C20.7937 34.4204 19.2302 32.8569 17.3016 32.8569C15.373 32.8569 13.8096 34.4204 13.8096 36.349C13.8096 38.2776 15.373 39.8411 17.3016 39.8411Z"
            stroke="#088C03"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="empty-para">Your cart is empty</p>
      </div>
      <MobileNavigationContainer />
      <Footer />
    </div>
  )

  const renderPaymentSuccessFull = () => (
    <div>
      <NavbarLg />
      <div className="empty-view-container">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="31.5" fill="white" stroke="#088C03" />
          <path
            d="M18.6511 31.9988L27.5653 40.913L45.3482 23.0845"
            stroke="#088C03"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="empty-para">Payment Successful</p>
        <p className="payment-para">
          Thank you for ordering. Your payment is successfully completed.
        </p>

        <button
          type="button"
          className="checkout-btn"
          style={{width: '200px'}}
          onClick={() => history.replace('/')}
        >
          Return to Homepage
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
      case viewsObject.emptyCartView:
        return renderEmptyView()
      case viewsObject.paymentView:
        return renderPaymentSuccessFull()
      default:
        return null
    }
  }

  return <div>{renderCartView()}</div>
}

export default Cart
