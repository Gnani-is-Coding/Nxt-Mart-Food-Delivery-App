import {useState, useEffect} from 'react'
import {Home, ShoppingCart, LogOut} from 'lucide-react'
import {Link} from 'react-router-dom'

import allFoods1 from '../../Images/allFoods1.png'
import frozenFoods from '../../Images/frozenFoods.png'
import vegetablesIcon from '../../Images/vegetablesIcon.png'
import preparedFoods from '../../Images/preparedFoods.png'
import cannedFoods from '../../Images/cannedFoods.png'
import LoadingView from '../LoadingView/index'
import FailureView from '../../Components/Failure'
import NotFoundRoute from '../NotFoundRoute'
import loginLogo from '../../Images/loginLogo.png'
import Sidebar from '../../Components/Sidebar'
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

  const renderSuccessView = () => (
    <div>
      <nav className="header-container">
        <img src={loginLogo} alt="logo" className="logo-img" />

        <div className="header-nav-links-container">
          <Link to="/" className="nav-links active-nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-links">
            Cart
          </Link>
          <Link to="/" className="nav-links logout-nav-link-lg">
            <LogOut />
            Logout
          </Link>
        </div>
      </nav>

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

      <div className="home-container-lg">
        <Sidebar categoriesList={apiData} />

        <div className="products-items-container">
          <div>
            <div className="products-heading-container">
              <h4 className="fruits-heading">
                {apiData[0]?.name}
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
              {apiData[0]?.products?.map(obj => (
                <li key={obj.id} className="product-item-container">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    className="product-image"
                  />

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

          <div>
            <div className="products-heading-container">
              <h4 className="fruits-heading">
                {apiData[0]?.name}
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
              {apiData[0]?.products?.map(obj => (
                <li key={obj.id} className="product-item-container">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    className="product-image"
                  />

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

          <div>
            <div className="products-heading-container">
              <h4 className="fruits-heading">
                {apiData[0]?.name}
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
              {apiData[0]?.products?.map(obj => (
                <li key={obj.id} className="product-item-container">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    className="product-image"
                  />

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

          <div>
            <div className="products-heading-container">
              <h4 className="fruits-heading">
                {apiData[0]?.name}
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
              {apiData[0]?.products?.map(obj => (
                <li key={obj.id} className="product-item-container">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    className="product-image"
                  />

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
      </div>

      <div className="footer-lg">
        <div className="footer-card">
          <div className="footer-content-container">
            <h4 className="footer-heading">
              For any queries, contact +91-9876543210  or mail us
              help@nxtmart.co.in
            </h4>

            <div className="social-media-icons">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="media-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.4687 0C36.25 0 40 3.74994 40 9.53112V30.4683C40 36.2494 36.25 39.9994 30.4687 39.9994H9.53127C3.75 39.9994 0 36.2494 0 30.4683V9.53112C0 3.74994 3.75 0 9.53127 0H30.4687Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9238 39.8018V24.3091H15.8906V18.7379H20.9238V14.6527C20.9238 14.6527 20.5617 6.16113 27.9104 6.16113H33.8548V11.8374H30.1508C30.1508 11.8374 27.4248 11.6895 27.3951 14.5029V18.7379H33.3875L32.5233 24.3091H27.3358V39.9998H20.9238V39.8018Z"
                  fill="#003F00"
                />
              </svg>

              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="media-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.4687 0C36.25 0 40 3.75 40 9.53127V30.4687C40 36.25 36.25 40 30.4687 40H9.53127C3.75 40 0 36.25 0 30.4687V9.53127C0 3.75 3.75 0 9.53127 0H30.4687Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.4687 0C36.25 0 40 3.75 40 9.53127V30.4687C40 36.25 36.25 40 30.4687 40H9.53127C3.75 40 0 36.25 0 30.4687V9.53127C0 3.75 3.75 0 9.53127 0H30.4687Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1905 29.6809L15.8371 22.7817C15.8371 22.7817 16.0038 21.9484 15.5781 21.2045C15.5781 21.2045 14.6301 18.8349 16.5035 16.8259C16.5035 16.8259 18.0381 15.0879 20.0018 16.3972C20.0018 16.3972 
                  21.1218 17.2784 20.6705 18.9484L19.3371 23.1151C19.3371 23.1151 18.5228 26.2817 21.5365 26.5539C21.5365 26.5539 24.7191 26.9825 26.2538 22.6715C27.7885 18.3609 26.0038 15.6151 26.0038 15.6151C26.0038 15.6151 23.7085 
                  11.5853 18.5228 12.4335C13.3371 13.2817 12.6815 18.2289 12.6815 18.2289C12.6815 18.2289 12.2921 21.2755 13.9185 23.4972L13.1398 26.1545C13.1398 26.1545 9.17047 23.6151 9.33714 19.0535C9.33714 19.0535 9.5038 11.4484 17.2825 9.61506C17.2825 9.61506 24.3282 7.84073 
                  28.4987 13.5007C30.832 16.6673 30.6654 20.1151 30.1654 22.6715C29.6654 25.228 27.7768 26.8645 27.7768 26.8645C27.7768 26.8645 22.6705 32.2817 18.2285 27.5009L17.2825 31.1452C17.2825 31.1452 16.1725 35.0937 14.6705 36.115L13.9798 35.9383C13.9798 35.9383 13.6361 31.5399 14.1905 29.6809Z"
                  fill="#003F00"
                />
              </svg>

              <svg
                width="46"
                height="37"
                viewBox="0 0 46 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="media-icon"
              >
                <g clipPath="url(#clip0_312_9005)">
                  <path
                    d="M40.0231 8.54353L39.6195 8.83613L39.642 9.33412C39.6592 9.71624 39.6671 10.1014 39.6671 10.4899C39.6671 22.3362 30.6817 35.9233 14.3102 35.9233C10.5982 35.9233 7.07764 35.119 3.90271 33.6795C7.84568 33.3697 11.4608
                     31.8865 14.3988 29.5769L16.4392 27.9729L13.8443 27.9248C10.7319 27.8671 8.03313 26.0931 6.65655 23.5034C6.7487 23.5059 6.84121 23.5072 6.93409 23.5072C7.86053 23.5072 8.75926 23.3821 9.6138 23.1485L12.9765 22.229L9.60033 
                     21.3604C8.36533 21.0427 6.66014 20.0111 5.25867 18.4915C4.20038 17.344 3.38172 15.9911 3.04773 14.5615C4.01129 14.9046 5.04247 15.1065 6.11529 15.1397L9.33737 15.2395L6.65845 13.4464C4.42578 11.952 2.95832 9.39806 2.95832 
                     6.50368C2.95832 5.45427 3.15233 4.45082 3.50517 3.52586C8.19137 8.70877 14.8398 12.0751 22.2778 12.4505L23.5047 12.5124L23.2251 11.3162C23.0832 10.7088 23.0099 10.0724 23.0099 9.41433C23.0099 4.80859 26.7349 1.07637 31.3228 
                     1.07637C33.7133 1.07637 35.8719 2.08847 37.3901 3.71041L37.7411 4.08536L38.245 3.98568C39.1688 3.80291 40.0692 3.555 40.9411 3.24697C40.8324 3.35394 40.7239 3.45941 40.6165 3.56298C40.4965 3.67877 40.3754 3.79453 40.2563 3.9083C39.8798 
                     4.26812 39.5241 4.60795 39.2909 4.86553C39.2099 4.95499 39.1274 5.05187 39.0564 5.15014C38.9971 5.23224 38.8932 5.38537 38.8357 5.57932C38.7757 5.78168 38.7102 6.29313 39.1616 6.65392C39.4778 6.90665 39.8373 6.88299 39.9318 6.87658L39.9555 6.87496L39.9792 6.87213C40.8244 6.77081 41.653 6.61623 
                     42.4617 6.41099C41.7152 7.19394 40.8983 7.90898 40.0231 8.54353ZM40.548 6.24544C40.5478 6.24547 40.5495 6.24269 40.5536 6.23694C40.5502 6.24252 40.5481 6.24541 40.548 6.24544Z"
                    fill="white"
                    stroke="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_312_9005">
                    <rect width="45.325" height="37" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="media-icon"
              >
                <path
                  d="M19.5 9.70162C24.8967 9.70162 29.3512 14.1561 29.3512 19.5528C29.3512 25.0352 24.8967 29.404 19.5 29.404C14.0176 29.404 9.64881 25.0352 9.64881 
                  19.5528C9.64881 14.1561 14.0176 9.70162 19.5 9.70162ZM19.5 25.9775C23.0122 25.9775 25.839 23.1506 25.839 19.5528C25.839 16.0406 23.0122 13.2138 19.5 13.2138C15.9022 13.2138 13.0753 16.0406 13.0753 
                  19.5528C13.0753 23.1506 15.9878 25.9775 19.5 25.9775ZM32.0067 9.35897C32.0067 10.6439 30.9788 11.6719 29.6938 11.6719C28.4089 11.6719 27.3809 10.6439 27.3809 9.35897C27.3809 8.07403 28.4089 7.04608 29.6938 
                  7.04608C30.9788 7.04608 32.0067 8.07403 32.0067 9.35897ZM38.5171 11.6719C38.6884 14.8414 38.6884 24.3499 38.5171 27.5194C38.3457 30.6033 37.6604 33.2588 35.4332 35.5717C33.206 37.7989 30.4648 38.4842 27.3809
                   38.6555C24.2114 38.8269 14.7029 38.8269 11.5334 38.6555C8.44954 38.4842 5.794 37.7989 3.48112 35.5717C1.25389 33.2588 0.568591 30.6033 0.397266 27.5194C0.225941 24.3499 0.225941 14.8414 0.397266 11.6719C0.568591 
                   8.58801 1.25389 5.84681 3.48112 3.61958C5.794 1.39236 8.44954 0.707057 11.5334 0.535732C14.7029 0.364407 24.2114 0.364407 27.3809 0.535732C30.4648 0.707057 33.206 1.39236 35.4332 3.61958C37.6604 5.84681 38.3457 8.58801 38.5171
                    11.6719ZM34.4053 30.8603C35.4332 28.376 35.1762 22.3797 35.1762 19.5528C35.1762 16.8116 35.4332 10.8152 34.4053 8.24536C33.72 6.61777 32.435 5.24717 30.8074 4.64753C28.2376 3.61958 22.2412 3.87657 19.5 3.87657C16.6731 3.87657
                     10.6768 3.61958 8.19255 4.64753C6.4793 5.33283 5.19437 6.61777 4.50907 8.24536C3.48112 10.8152 3.7381 16.8116 3.7381 19.5528C3.7381 22.3797 3.48112 28.376 4.50907 30.8603C5.19437 32.5735 6.4793 33.8584 8.19255 34.5437C10.6768 
                     35.5717 16.6731 35.3147 19.5 35.3147C22.2412 35.3147 28.2376 35.5717 30.8074 34.5437C32.435 33.8584 33.8056 32.5735 34.4053 30.8603Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <p className="footer-para">
            Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  )

  const renderHomeView = () => {
    switch (currentView) {
      case viewsObject.loadingView:
        return <LoadingView />
      case viewsObject.failureView:
        return <FailureView handleRetryClick={getDataFromApi} />
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
