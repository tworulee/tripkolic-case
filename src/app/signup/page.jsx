"use client"
import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className=" flex items-center justify-center  mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-primary-500 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
            placeholder='Enter your name'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
            <input
             placeholder='Enter your surname'
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
             placeholder='Enter your email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
             placeholder='Enter your password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

        
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account? 
          <a href="/signin" className="text-primary-500 hover:text-primary-600 font-medium">
          Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

