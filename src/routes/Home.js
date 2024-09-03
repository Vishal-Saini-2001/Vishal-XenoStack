import React, { useState } from 'react'
import i1 from '../assets/i1.svg'
import i2 from '../assets/i2.svg'
import i3 from '../assets/i3.svg'
import i4 from '../assets/i4.svg'
import '../css/home.css'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3'
import Slide4 from '../components/Slide4'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
        
            <div className='home'>
                <h1 className='fw-bold text-center mt-5 text-primary'>Real State Residential Properties</h1>
                <p className='text-center'>Your Trusted Source for Comprehensive Residential Real Estate Data</p>
                <div className='d-flex justify-content-center align-items-center mt-5'><img src={i3}></img></div>
                <br />
                <div className='d-flex justify-content-center align-items-center'><button id='get-started' onClick={()=>navigate('/login')}>Get Started</button></div>
            </div>
            <Slide2 image={i2}/>
            <Slide3 image={i1}/>
            <Slide4 image={i4}/>
        </>
    )
}
