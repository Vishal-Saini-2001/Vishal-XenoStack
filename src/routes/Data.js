import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/data.css'
import { useNavigate } from 'react-router-dom'

const Data = () => {
  const [data, setData] = useState(null);
  const apiKey = 'simplyrets';
  const apiSecret = 'simplyrets';
  const auth = btoa(`${apiKey}:${apiSecret}`);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://api.simplyrets.com/properties?openHouse=true', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      })
        .then(response => {
          setData(response.data)
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    fetchData()

    const token = localStorage.getItem("token");

    const authenticate = async () => {

      if (token) {
        const body = {
          token
        }
        await axios.post("http://localhost:8080/authenticate", body)
          .then(resp => {
            console.log(resp)
          })
          .catch(error => {
            console.log(error);
            localStorage.removeItem("token")
          })

      } else {
        navigate('/login')
      }

    }

    authenticate()
  }, [])
  return (
    <div>
      <button className='m-3 btn btn-primary px-3' onClick={handleLogout}>log out</button>
      <h1 className='fw-bold text-center my-3 text-primary'>Real State Properties</h1>
      <div id='data-container'>
        {(data) ? data.map((data, i) => {
          return (
            <div key={i} className='data-cards'>
              <center><img src={data.photos[0]} width={250} className='p-2'></img>
                <img src={data.photos[1]} width={250} className='p-2'></img></center>
              <div id='card-info'>
                <h3>Address</h3>
                <hr />
                <p><b>Full:</b> {data.address.full}</p>
                <p><b>City:</b> {data.address.city}</p>
                <p><b>State:</b> {data.address.state}</p>
                <p><b>Country:</b> {data.address.country}</p>
                <p><b>Street Name:</b> {data.address.streetName}</p>
                <p><b>Street Number:</b> {data.address.streetNumber}</p>
              </div>

            </div>
          )
        }) : <h2>Loading...</h2>}
      </div>
    </div >
  )
}

export default Data