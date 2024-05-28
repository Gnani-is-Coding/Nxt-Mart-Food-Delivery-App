import {useState, useEffect} from 'react'
import {Home, ShoppingCart, LogOut} from 'lucide-react'

import allFoods1 from '../../Images/allFoods1.png'
import frozenFoods from '../../Images/frozenFoods.png'
import vegetablesIcon from '../../Images/vegetablesIcon.png'
import preparedFoods from '../../Images/preparedFoods.png'
import cannedFoods from '../../Images/cannedFoods.png'
import LoadingView from '../LoadingView/index'
import FailureView from '../../Components/Failure'
import NotFoundRoute from '../NotFoundRoute'
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
    name: 'Prepared Foods',
    categoryIcon: preparedFoods,
  },
  {
    id: 3,
    name: 'Canned Foods',
    categoryIcon: cannedFoods,
  },
  {
    id: 4,
    name: 'Frozen Foods',
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

  const getDataFromApi = async () => {
    setCurrentView(viewsObject.loadingView)
    const endPoint =
      'https://run.mocky.io/v3/8177da5e-b2fd-4474-9bb7-457f4099ae4e'

    const response = await fetch(endPoint)
    const data = await response.json()
    console.log(data.categories[0])
    setCurrentView(viewsObject.successView)
    setApiData(data.categories[0])
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  const renderSuccessView = () => (
    <div>
      <ul className="categories-container">
        {categoriesList.map(obj => (
          <li key={obj.id} className="category-items">
            <div className="cat-icon-container">
              <img src={obj.categoryIcon} alt="veg" />
            </div>
            <p className="cat-para">{obj.name}</p>
          </li>
        ))}
      </ul>

      <div className="products-items-container">
        <div className="products-heading-container">
          <h4 className="fruits-heading">
            {apiData.name}
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
          {apiData?.products?.map(obj => (
            <li key={obj.id} className="product-item-container">
              <img src={obj.image} alt={obj.name} className="product-image" />

              <div className="product-details">
                <h4 className="product-heading">{obj.name}</h4>
                <p className="product-price">{obj.weight}</p>
                <div className="price-add-container">
                  <p>{obj.price}</p>
                  <button type="button" className="add-btn">
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="products-heading-container">
          <h4 className="fruits-heading">
            {apiData.name}
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
        <ul className="products-container">
          {apiData?.products?.map(obj => (
            <li key={obj.id} className="product-item-container">
              <img src={obj.image} alt={obj.name} className="product-image" />

              <div className="product-details">
                <h4 className="product-heading">{obj.name}</h4>
                <p className="product-price">{obj.weight}</p>
                <div className="price-add-container">
                  <p>{obj.price}</p>
                  <button type="button" className="add-btn">
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="products-heading-container">
          <h4 className="fruits-heading">
            {apiData.name}
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
        <ul className="products-container">
          {apiData?.products?.map(obj => (
            <li key={obj.id} className="product-item-container">
              <img src={obj.image} alt={obj.name} className="product-image" />

              <div className="product-details">
                <h4 className="product-heading">{obj.name}</h4>
                <p className="product-price">{obj.weight}</p>
                <div className="price-add-container">
                  <p>{obj.price}</p>
                  <button type="button" className="add-btn">
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="products-heading-container">
          <h4 className="fruits-heading">
            {apiData.name}
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
          {apiData?.products?.map(obj => (
            <li key={obj.id} className="product-item-container">
              <img src={obj.image} alt={obj.name} className="product-image" />

              <div className="product-details">
                <h4 className="product-heading">{obj.name}</h4>
                <p className="product-price">{obj.weight}</p>
                <div className="price-add-container">
                  <p>{obj.price}</p>
                  <button type="button" className="add-btn">
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="products-heading-container">
          <h4 className="fruits-heading">
            {apiData.name}
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
          {apiData?.products?.map(obj => (
            <li key={obj.id} className="product-item-container">
              <img src={obj.image} alt={obj.name} className="product-image" />

              <div className="product-details">
                <h4 className="product-heading">{obj.name}</h4>
                <p className="product-price">{obj.weight}</p>
                <div className="price-add-container">
                  <p>{obj.price}</p>
                  <button type="button" className="add-btn">
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  const renderHomeView = () => {
    switch (currentView) {
      case viewsObject.loadingView:
        return <LoadingView />
      case viewsObject.failureView:
        return <FailureView />
      case viewsObject.notFoundView:
        return <NotFoundRoute />
      case viewsObject.successView:
        return renderSuccessView()
      default:
        return null
    }
  }

  return (
    <div className="home-container">
      {renderHomeView()}
      <ul className="mobile-navigation-container">
        <li className="nav-item-container">
          <div className="nav-icons">
            <Home />
          </div>
          <p className="nav-para">Home</p>
        </li>

        <li className="nav-item-container">
          <div className="nav-icons">
            <ShoppingCart />
          </div>
          <p className="nav-para">Cart</p>
        </li>

        <li className="nav-item-container">
          <div className="nav-icons">
            <LogOut />
          </div>
          <p className="nav-para">Logout</p>
        </li>
      </ul>
    </div>
  )
}

export default HomeRoute
