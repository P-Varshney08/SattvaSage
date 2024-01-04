import React, { useState } from 'react';
import bgImage from '../components/sidebar/assets/y1.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const [formData, setFormData] = useState({username: "", email: "", password: "", gender: "", age: 0});
    const naviagte = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) => {
        console.log('Handling submit...');
        e.preventDefault();

        try {
          const res = await axios.post('http://localhost:8080/api/auth/register', formData);
          toast.success('Signup Successful!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
            console.log(res);
            naviagte('/signin');
        } catch (error) {
            console.log('Error Signing Up', error.message);
            toast.error('Error signing up', {
              position: 'top-right',
              theme: 'dark',
              draggable: true,
              autoClose: 5000,
              pauseOnHover: false
            })
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#c5f1cc47]">
      <div className="bg-white p-6 md:p-10 rounded-md shadow-md backdrop-blur-md bg-opacity-60 max-w-xl w-full flex-shrink-0">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-green-700 text-center">Sign Up</h2>
        <div className="mb-4 md:mb-8">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-24 md:h-32 object-cover mb-4 rounded-md"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Enter your Username'
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your Email'
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Enter Password'
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-green-500"
            >
                <option value="" disabled selected>
                    Select Your Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder='Enter Age'
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-700">
              Already have Account? <a href="/signin" className="text-green-700">Sign In</a>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 md:p-4 rounded-md hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
