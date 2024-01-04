import React, { useState } from 'react';
import bgImage from '../components/sidebar/assets/bg2.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/user/userSlice';

const Signin = () => {
    const [formData, setFormData] = useState({email: "", password: ""});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/signin', formData);
            console.log('res:', res);
            if(res.status===200){
              dispatch(setUserDetails(res.data.user));
              // console.log(res.data.user.username);
              setTimeout(() => {
                dispatch(setUserDetails(null));
                localStorage.removeItem('root');
                toast.info('You have been automatically logged out due to inactivity.', {
                  autoClose: 4000,
              });
            }, 600000);
            navigate('/');
            }
            else{
              toast.error('Wrong credentials', {
                autoClose: 4000,
                style: {
                  backgroundImage: {bgImage},
                },
                progressBarStyle: {
                  background: purple
                },
                // theme: 'dark'
              });
            }

        } catch (error) {
            console.log('Error Signing In', error.message);
            toast.warning('Wrong credentials', {
              autoClose: 4000,
              progressStyle:{
                backgroundColor: '#FFB700'
              },
              theme: 'dark'
              
            });
        }
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#c5f1cc47]">
        <div className="bg-white p-6 md:p-10 rounded-md shadow-md backdrop-blur-md bg-opacity-60 max-w-xl w-full flex-shrink-0">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-green-700 text-center">Sign In</h2>
          <div className="mb-4 md:mb-8">
            <img
              src={bgImage}
              alt="Background"
              className="w-full h-24 md:h-32 object-cover mb-4 rounded-md"
            />
          </div>
          <form onSubmit={handleSubmit}>
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
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-700">
                Not registered yet? <a href="/signup" className="text-green-700">Sign up</a>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 md:p-4 rounded-md hover:bg-green-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
    
};

export default Signin;
