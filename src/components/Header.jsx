import React from 'react'

const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <h3>Profile</h3>
            </div>
            <div className="imgName">
                <img src={props.pic} width="35px" id='pic' alt='pic'></img>
                {props.name}
            </div>
        </div>
    )
}

export default Header