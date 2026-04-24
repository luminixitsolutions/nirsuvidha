import Link from 'next/link'

export default function LoginPageForm() {
  return (
    <>
      <div className="text-center pb-2">
        <div className="mdl-thumb d-flex justify-content-center">
          <img
            src="/img/logo.png"
            className="img-fluid"
            style={{ maxWidth: 220, width: 'auto', height: 'auto' }}
            alt="NRI Suvidha"
          />
        </div>
        <h4 className="modal-header-title mb-0 mt-2">Welcome back</h4>
      </div>

      <div className="modal-login-form pt-2">
        <form>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="login-email"
              placeholder="name@example.com"
              autoComplete="email"
            />
            <label htmlFor="login-email">User Name</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="login-password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <label htmlFor="login-password">Password</label>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-main full-width font--bold btn-lg">
              Login
            </button>
          </div>

          <div className="modal-flex-item mb-3">
            <div className="modal-flex-first">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="login-savepassword"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="login-savepassword">
                  Save Password
                </label>
              </div>
            </div>
            <div className="modal-flex-last">
              <Link href="#">Forget Password?</Link>
            </div>
          </div>
        </form>
      </div>

      <div className="social-login">
        <ul>
          <li>
            <Link href="#" className="btn connect-fb">
              <i className="fa-brands fa-facebook"></i>Facebook
            </Link>
          </li>
          <li>
            <Link href="#" className="btn connect-google">
              <i className="fa-brands fa-google"></i>Google+
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-center mt-4 mb-0">
        New to NRI Suvidha?
        <Link href="/signup" className="text-main font--bold ms-1">
          Get Started
        </Link>
      </p>
    </>
  )
}
