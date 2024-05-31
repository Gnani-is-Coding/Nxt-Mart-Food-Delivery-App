import {useState, useEffect} from 'react'

import {useCart} from '../Context'

import NavbarLg from '../../Components/NavBarLg'
import allFoods1 from '../../Images/allFoods1.png'
import frozenFoods from '../../Images/frozenFoods.png'
import vegetablesIcon from '../../Images/vegetablesIcon.png'
import preparedFoods from '../../Images/preparedFoods.png'
import cannedFoods from '../../Images/cannedFoods.png'
import LoadingView from '../LoadingView/index'
import FailureView from '../../Components/Failure'
import Sidebar from '../../Components/Sidebar'
import MobileNavigationContainer from '../../Components/MobileNavigationContainer'
import Footer from '../../Components/FooterSection'
import './index.css'

const categoriesList = [
  {
    id: 0,
    name: 'All',
    categoryIcon: allFoods1,
  },
  {
    id: 1,
    name: 'Fruits & Vegetables',
    categoryIcon: vegetablesIcon,
  },
  {
    id: 2,
    name: 'Foodgrains, Oil & Masala',
    categoryIcon: preparedFoods,
  },
  {
    id: 3,
    name: 'Eggs, Meat & Fish',
    categoryIcon: cannedFoods,
  },
  {
    id: 4,
    name: 'Cleaning & Household',
    categoryIcon: frozenFoods,
  },
]

const viewsObject = {
  loadingView: 'LOADING',
  failureView: 'FAILURE',
  notFoundView: 'NOTFOUND',
  successView: 'SUCCESS',
}

function HomeRoute() {
  const [apiData, setApiData] = useState([])
  const [currentView, setCurrentView] = useState(viewsObject.loadingView)
  const [currentCategoryID, setCategoryID] = useState(0)

  const {
    addToCart,
    cartProducts,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  const getDataFromApi = async () => {
    setCurrentView(viewsObject.loadingView)
    const endPoint =
      'https://run.mocky.io/v3/8177da5e-b2fd-4474-9bb7-457f4099ae4e'

    const response = await fetch(endPoint)
    if (response.ok) {
      const data = await response.json()
      console.log(data.categories, 'api')
      setCurrentView(viewsObject.successView)
      setApiData(data.categories)
    } else {
      setCurrentView(viewsObject.failureView)
    }
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  const onClickAddProduct = (productCategory, productName) => {
    const productCategoryDetails = apiData.filter(
      obj => obj.name === productCategory,
    )
    const productDetails = productCategoryDetails[0].products.filter(
      obj => obj.name === productName,
    )
    addToCart(productDetails[0])
  }

  const findProductQuantity = productObj => {
    const product = cartProducts.find(obj => productObj.name === obj.name)
    return product ? product.count : 0
  }

  const renderSuccessView = () => (
    <div className="home-wrapper-lg">
      <NavbarLg />

      <ul className="categories-container">
        {categoriesList.map(obj => (
          <a
            key={obj.id}
            className="category-items"
            onClick={() => setCategoryID(obj.id)}
            href={obj.name === 'All' ? '#Fruits & Vegetables' : `#${obj.name}`}
          >
            <div
              className={
                currentCategoryID === obj.id
                  ? 'active-cat-icon-container'
                  : 'cat-icon-container'
              }
            >
              <img src={obj.categoryIcon} alt="veg" />
            </div>
            <p
              className={
                currentCategoryID === obj.id ? 'active-cat-para' : 'cat-para'
              }
            >
              {obj.name}
            </p>
          </a>
        ))}
      </ul>
      <div className="home-container-lg">
        <Sidebar categoriesList={apiData} />

        <div className="products-items-container">
          {apiData.map(obj => (
            <div id={obj.name} key={obj.name}>
              <div className="products-heading-container">
                <h4 className="fruits-heading">
                  {obj.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </h4>

                <p className="view-all-para">View all</p>
              </div>

              {/** #TODO change scroll bar next time */}
              <ul className="products-container">
                {obj.products?.map(productObj => {
                  const productQuantity = findProductQuantity(productObj)

                  return (
                    <li
                      key={productObj.id}
                      className="product-item-container"
                      data-testid="product"
                    >
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

                          {productQuantity !== 0 && (
                            <button type="button" className="add-btn">
                              <div className="add-btn-container">
                                <button
                                  type="button"
                                  className="dec-btn"
                                  alt="decrease button"
                                  data-testid="decrement-count"
                                >
                                  <svg
                                    onClick={() =>
                                      decreaseQuantity(productObj.name)
                                    }
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
                                </button>

                                <span
                                  style={{cursor: 'text'}}
                                  data-testid="active-count"
                                >
                                  {productQuantity}
                                </span>

                                <button
                                  type="button"
                                  alt="increase button"
                                  className="dec-btn"
                                  data-testid="increment-count"
                                >
                                  <svg
                                    onClick={() =>
                                      increaseQuantity(productObj.name)
                                    }
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
                                </button>
                              </div>
                            </button>
                          )}

                          {productQuantity === 0 && (
                            <button
                              type="button"
                              className="add-btn"
                              onClick={() =>
                                onClickAddProduct(obj.name, productObj.name)
                              }
                              data-testid="add-button"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )

  const renderHomeView = () => {
    switch (currentView) {
      case viewsObject.loadingView:
        return <LoadingView />
      case viewsObject.failureView:
        return <FailureView handleRetryClick={getDataFromApi} />
      case viewsObject.successView:
        return renderSuccessView()
      default:
        return null
    }
  }

  return (
    <div className="home-container">
      {renderHomeView()}
      <MobileNavigationContainer />
    </div>
  )
}

export default HomeRoute
