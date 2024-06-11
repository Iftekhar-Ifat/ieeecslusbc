import React from 'react'

export default function Registration() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nemo perferendis, nesciunt iste id aperiam quasi assumenda accusamus provident facere, repellat repudiandae minima, repellendus temporibus!</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Member type</span>
              </label>
              <label className="cursor-pointer label">
                <span className="label-text">Global</span>
                <input type="checkbox" className="checkbox checkbox-accent" />
              </label>
              <label className="cursor-pointer label">
                <span className="label-text">Local</span>
                <input type="checkbox" className="checkbox checkbox-accent" />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#045C99] text-white hover:text-black">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
