import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './style.scss';

const ComingSoon = ({ pic, name }) => {
  return (
    <div className="profile-container">
            <div className='side'>
                <Sidebar />
            </div>
            <div className='dashboard-container'>
                <Header pic={localStorage.getItem('Picture')} name={localStorage.getItem('Name')} />
                <hr></hr>
                <div>
                  <h1 style={{opacity:0.3, marginTop:'20%'}}>Coming Soon</h1>
                  </div>                
            </div>
        </div>
  )
}

export default ComingSoon