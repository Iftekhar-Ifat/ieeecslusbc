'use client'

import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    const storedEmail = localStorage.getItem('email')
    if (!storedEmail) {
      alert('Please register!')
    } else {
      if (email === storedEmail) {
        alert('Login successful!')
      } else {
        alert('Invalid Credential')
      }
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            veniam aut! Dicta beatae provident fugiat saepe quod optio, sit eos
            natus! Aperiam facilis possimus tempore?
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#045C99] text-white hover:text-black">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
