import failureImg from '../../Images/failureImg.png'
import './index.css'

function FailureView({handleRetryClick}) {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <img src={failureImg} alt="not found" className="failure-image" />
        <h4 className="heading">Oops! Something went wring</h4>
        <p className="paragraph">We are having some trouble</p>
        <button type="button" className="retry-btn" onClick={handleRetryClick}>
          Retry
        </button>
      </div>
    </div>
  )
}

export default FailureView
