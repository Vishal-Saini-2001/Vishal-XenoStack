import React, { useState } from 'react'
import login from '../assets/login.svg'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [isRegistered, setIsRegistered] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const handleInputs = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRegistered(true)
    await axios.post("http://localhost:8080/login", data)
      .then((res) => {
        alert(res.data.msg)
        if (res.status == 200) {
          navigate('/data')
        }
      })
      .catch(err => {
        alert(err.response.data.msg)
        setIsRegistered(false)
      })
  }
  return (
    <div id='login-container'>
      <div id='login-page'>
        <div id='login-img'>
          <img src={login} width={300}></img>
        </div>
        <div id='login-form'>
          <h1 className=' mb-4 fw-bold text-center text-light'>Login</h1>
          <form onSubmit={handleSubmit}>
            <input className='login-inputs' type='email' name='email' value={data.email} required placeholder='Enter Email' onChange={handleInputs}></input>
            <br />
            <input className='login-inputs' type='password' name='password' value={data.password} required onChange={handleInputs} placeholder='Enter password'></input>
            <br />
            <button className='btn btn-primary m-3' type='submit'>{isRegistered?"Please Wait...":"Login"}</button>
          </form>
          <p className='mx-3'>Don't have an account? </p>
          <button className='btn btn-success m-3' onClick={() => navigate('/register')}>Register here</button>
        </div>
      </div>
    </div>
  )
}

export default Login