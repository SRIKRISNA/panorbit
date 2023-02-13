import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    let Navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        Navigate('/', {replace:true});
    }
    return (
        <div className='header-container'>
            <div className='logo'>
                <h3>Profile</h3>
            </div>
            <div className="imgName" onClick={logOut}>
               <abbr title='Logout' > <img src={props.pic} width="35px" id='pic' alt='pic'></img>
                {props.name}</abbr>
            </div>
        </div>
    )
}

export default Header