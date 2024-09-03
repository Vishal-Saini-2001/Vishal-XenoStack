import React from 'react'
import '../css/slide2.css'

const Slide3 = ({image}) => {
    return (
        <div className='mb-5 slide-2'>
            <hr />
            <h1 className='fw-bold text-center mt-5 text-primary'>Market Insights at Your Fingertips</h1>
            <p className='text-center'>Stay Ahead with Real-Time Market Trends and Analysis.<br /> Get Expert Insights to Make Informed Buying or Selling Decisions.</p>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={image} width={600}></img>
            </div>
        </div>
    )
}

export default Slide3