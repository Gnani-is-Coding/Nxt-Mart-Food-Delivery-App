import loginLogo from '../../Images/loginLogo.png'
import './index.css'

function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <img src={loginLogo} alt="logo" className="logo-img" />

        <form onSubmit={() => console.log('hi')}>
          <label htmlFor="username" className="label">
            Username
          </label>
          <div className="input-container">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.20485 9.18945C9.15316 9.18207 9.0867 9.18207 9.02762 9.18945C7.72794 9.14514 6.69409 8.08176 6.69409 6.77469C6.69409 5.43808 7.77224 4.35254 9.11624 4.35254C10.4529 4.35254 11.5384 5.43808 11.5384 6.77469C11.531 8.08176 10.5045 9.14514 9.20485 9.18945Z"
                stroke="#64748B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0919 14.0661C12.7774 15.2697 11.0347 16.0008 9.11467 16.0008C7.19467 16.0008 5.45191 15.2697 4.13745 14.0661C4.2113 13.3719 4.65437 12.6925 5.44453 12.1608C7.4679 10.8168 10.7762 10.8168 12.7848 12.1608C13.575 12.6925 14.018 13.3719 14.0919 14.0661Z"
                stroke="#64748B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.11531 15.9992C13.1937 15.9992 16.4999 12.693 16.4999 8.61458C16.4999 4.53618 13.1937 1.22998 9.11531 1.22998C5.03691 1.22998 1.73071 4.53618 1.73071 8.61458C1.73071 12.693 5.03691 15.9992 9.11531 15.9992Z"
                stroke="#64748B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input id="username" className="input" type="text" />
          </div>

          <div style={{marginTop: '15px'}}>
            <label htmlFor="username" className="label">
              Password
            </label>
            <div className="input-container">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 7.33317V6.6665C6.5 5.55984 6.83333 4.6665 8.5 4.6665C10.1667 4.6665 10.5 5.55984 10.5 6.6665V7.33317"
                  stroke="#64748B"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.50008 9.73311C8.721 9.73311 8.90007 9.55402 8.90007 9.33311C8.90007 9.1122 8.721 8.93311 8.50008 8.93311C8.27917 8.93311 8.1001 9.1122 8.1001 9.33311C8.1001 9.55402 8.27917 9.73311 8.50008 9.73311Z"
                  stroke="#64748B"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1667 11.3335H6.83341C5.50008 11.3335 5.16675 11.0002 5.16675 9.66683V9.00016C5.16675 7.66683 5.50008 7.3335 6.83341 7.3335H10.1667C11.5001 7.3335 11.8334 7.66683 11.8334 9.00016V9.66683C11.8334 11.0002 11.5001 11.3335 10.1667 11.3335Z"
                  stroke="#64748B"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.49992 14.6668C12.1818 14.6668 15.1666 11.6821 15.1666 8.00016C15.1666 4.31826 12.1818 1.3335 8.49992 1.3335C4.81802 1.3335 1.83325 4.31826 1.83325 8.00016C1.83325 11.6821 4.81802 14.6668 8.49992 14.6668Z"
                  stroke="#64748B"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input id="username" className="input" type="password" />
            </div>
          </div>

          <div className="show-pass-container">
            <input type="checkbox" className="checkbox" />
            <p className="show-password">Show Password</p>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
