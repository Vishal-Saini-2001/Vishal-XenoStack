import React, {useState} from 'react'
import '../css/login.css'
import register from '../assets/register.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
    const navigate = useNavigate()
    const [isRegistered, setIsRegistered] = useState(false)
    const [data,setData] = useState({
        email:"",
        password:""
      })
      const handleInputs = (e) => {
        setData({
          ...data,
          [e.target.name]:e.target.value
        })
      }
      const handleSubmit = async(e) => {
        e.preventDefault();
        setIsRegistered(true)
        console.log(data)
        await axios.post("https://xenostack-backend.onrender.com/register",data)
        .then((res)=>{
          alert(res.data.msg)
          if(res.status == 200){
            navigate('/login')
          }
        })
        .catch(err=>{
          alert(err.response.data.msg)
          setIsRegistered(false)
        })
      }
    return (
        <div id='login-container'>
            <div id='login-page'>
                <div id='login-img'>
                    <img src={register} width={300}></img>
                </div>
                <div id='login-form'>
                    <h1 className=' mb-4 fw-bold text-center text-light'>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input className='login-inputs' type='email' name='email' value={data.email} required placeholder='Enter Email' onChange={handleInputs}></input>
                        <br />
                        <input className='login-inputs' type='password' name='password' value={data.password} required placeholder='Enter password' onChange={handleInputs}></input>
                        <br />
                        <button className='btn btn-primary m-3 register-btn' type='submit'>{isRegistered?"Signing...":"SignUp"}</button>
                    </form>
                    <p className='mx-3'>Already have an account? </p>
                    <button className='btn btn-success m-3' onClick={()=>navigate('/login')}>Login here</button>
                </div>
            </div>
        </div>
    )
}

export default Register