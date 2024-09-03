import React from 'react'
import '../css/slide2.css'

const Slide2 = ({image}) => {
    return (
        <div className='mb-5 slide-2'>
            <hr/>
            <h1 className='fw-bold text-center mt-5 text-primary'>Find Your Dream Home</h1>
            <p className='text-center'>Search Through Thousands of Residential Listings with Ease.<br/> Discover Properties Tailored to Your Preferences and Budget</p>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={image} width={600}></img>
            </div>
        </div>
    )
}

export default Slide2