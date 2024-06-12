'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Registration() {
  const [memberType, setMemberType] = useState('local') // default to 'global'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()

  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    localStorage.setItem('name', name!)
    localStorage.setItem('email', email!)

    router.push('/')
    router.refresh()
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nemo
            perferendis, nesciunt iste id aperiam quasi assumenda accusamus
            provident facere, repellat repudiandae minima, repellendus
            temporibus!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Member type</span>
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Global Member</span>
                <input
                  type="radio"
                  name="memberType"
                  className="radio checked:bg-red-500"
                  checked={memberType === 'global'}
                  onChange={() => setMemberType('global')}
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Local Member</span>
                <input
                  type="radio"
                  name="memberType"
                  className="radio checked:bg-[#045C99]"
                  checked={memberType === 'local'}
                  onChange={() => setMemberType('local')}
                />
              </label>
            </div>

            {memberType === 'global' && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">IEEE ID</span>
                </label>
                <input
                  type="text"
                  placeholder="IEEE ID"
                  className="input input-bordered"
                  required
                />
              </div>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#045C99] text-white hover:text-black">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
