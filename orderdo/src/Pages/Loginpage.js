import React, { useState } from 'react';
import axios from 'axios';
import logoapp from '../images/logo.png'; 
import regvideos from '../images/regvideo.mp4';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Loginpage() {
    const navigate = useNavigate();

    const [data, setData] = useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState("");
  
    const Loginuser = async (e) => {
      e.preventDefault();
  
      const validationErrors = {};
      if (!data.email) {
        validationErrors.email = "Please enter your email";
      }
      if (!data.password) {
        validationErrors.password = "Please enter a password";
      } 
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:9000/api/login', {
          ...data
        });
        
        if (response.status === 200) {
          const token = response.data.token; 
          localStorage.setItem('grocerytoken', token); 
          navigate('/'); 
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setBackendError("Invalid email or password"); 
        } else {
          setBackendError("Server error"); 
        }
      }
    };
  
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-auto w-full'>
        <div className='hidden sm:flex h-screen'>
          <video className='w-full h-full object-cover' autoPlay loop muted>
            <source src={regvideos} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded-lg'>
            <img className='w-25 mx-auto' src={logoapp} alt="Logo" />
            <h2 className='text-2xl dark:text-white font-bold text-center'>Login Here</h2>
            {backendError && <p className="text-red-600">{backendError}</p>}
        
            <div className='flex flex-col py-2'>
              <label>Email</label>
              <input className='rounded-lg py-2' type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} name='email' />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
  
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='rounded-lg py-2' type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} name='password' />
              {errors.password && <p className="text-red-600">{errors.password}</p>}
            </div>
            <button
        type="submit"
        className="bg-black text-white font-bold text-xl py-2 px-8 rounded"
        onClick={Loginuser}
      >
        Login
      </button><br/>
      <span>
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500">
          Register Here
        </Link>
      </span>
          </form>
        </div>
      </div>
    );
}

export default Loginpage;


