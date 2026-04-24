'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <form
      className="p-md-2"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="d-flex align-items-start gap-3 mb-4">
        <span className="square--50 circle bg-light-main d-inline-flex align-items-center justify-content-center flex-shrink-0">
          <i className="fa-solid fa-user-plus text-main fs-5" aria-hidden />
        </span>
        <div>
          <h4 className="mb-1">Create Account</h4>
          <p className="text-muted small mb-0">Sign up to access all our financial and legal services</p>
        </div>
      </div>

      <div className="form-float d-flex flex-column gap-3">
        <div className="form-group mb-0">
          <label className="fw-medium fs-6 text-dark" htmlFor="signup-name">
            Full Name
          </label>
          <input
            id="signup-name"
            type="text"
            className="form-control rounded-3"
            placeholder="Enter your full name"
            autoComplete="name"
          />
        </div>

        <div className="form-group mb-0">
          <label className="fw-medium fs-6 text-dark" htmlFor="signup-email">
            Email <i className="text-danger text-md">*</i>
          </label>
          <input
            id="signup-email"
            type="email"
            className="form-control rounded-3"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        <div className="form-group mb-0">
          <label className="fw-medium fs-6 text-dark" htmlFor="signup-phone">
            Phone Number <i className="text-danger text-md">*</i>
          </label>
          <input
            id="signup-phone"
            type="tel"
            className="form-control rounded-3"
            placeholder="Enter your phone number"
            autoComplete="tel"
            required
          />
        </div>

        <div className="form-group mb-0">
          <label className="fw-medium fs-6 text-dark" htmlFor="signup-password">
            Password <i className="text-danger text-md">*</i>
          </label>
          <div className="position-relative">
            <input
              id="signup-password"
              type={showPassword ? 'text' : 'password'}
              className="form-control rounded-3 pe-5"
              placeholder="Create a strong password"
              autoComplete="new-password"
              minLength={8}
              required
            />
            <button
              type="button"
              className="btn btn-link position-absolute top-50 end-0 translate-middle-y py-0 pe-3 text-muted"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden />
            </button>
          </div>
        </div>

        <div className="form-group mb-0">
          <label className="fw-medium fs-6 text-dark" htmlFor="signup-password-confirm">
            Confirm Password <i className="text-danger text-md">*</i>
          </label>
          <div className="position-relative">
            <input
              id="signup-password-confirm"
              type={showConfirmPassword ? 'text' : 'password'}
              className="form-control rounded-3 pe-5"
              placeholder="Confirm your password"
              autoComplete="new-password"
              minLength={8}
              required
            />
            <button
              type="button"
              className="btn btn-link position-absolute top-50 end-0 translate-middle-y py-0 pe-3 text-muted"
              onClick={() => setShowConfirmPassword((v) => !v)}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              <i className={`fa-solid ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden />
            </button>
          </div>
        </div>

        <div className="form-group mb-0">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="signup-terms" required />
            <label className="form-check-label small" htmlFor="signup-terms">
              I agree to the{' '}
              <Link href="/privacy" className="text-main text-decoration-none fw-medium">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-main text-decoration-none fw-medium">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>

        <div className="form-group mb-0 pt-1">
          <button type="submit" className="btn btn-main full-width font--bold btn-lg rounded-3">
            Create Account
          </button>
        </div>
      </div>

      <p className="text-center mt-3 mb-0 small">
        Already have an account?{' '}
        <Link href="/login" className="text-main fw-bold text-decoration-none">
          Sign in
        </Link>
      </p>

      <div className="devider position-relative d-block my-4">
        <hr className="mb-0 mt-0" />
        <div className="position-absolute top-50 start-50 translate-middle px-3 bg-white">
          <span className="text-muted small text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.06em' }}>
            Or continue with
          </span>
        </div>
      </div>

      <div className="row g-2">
        <div className="col-sm-6">
          <Link href="#" className="btn btn-outline-main rounded-pill w-100 d-flex align-items-center justify-content-center gap-2 py-2">
            <Image src="/img/google.png" className="img-fluid" width={18} height={18} alt="" />
            Google
          </Link>
        </div>
        <div className="col-sm-6">
          <Link href="#" className="btn btn-outline-main rounded-pill w-100 d-flex align-items-center justify-content-center gap-2 py-2">
            <Image src="/img/facebook.png" className="img-fluid" width={18} height={18} alt="" />
            Facebook
          </Link>
        </div>
      </div>
    </form>
  )
}
