import React from 'react'
import '../css/slide2.css'

const Slide4 = ({image}) => {
    return (
        <div className='mb-5 slide-2'>
            <hr />
            <h1 className='fw-bold text-center mt-5 text-primary'>Accurate Property Valuations</h1>
            <p className='text-center'>Get Reliable Property Estimates Backed by Industry Experts<br /> Know the True Value Before You Buy or Sell.</p>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={image} width={600}></img>
            </div>
        </div>
    )
}

export default Slide4