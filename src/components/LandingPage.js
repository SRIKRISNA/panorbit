import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.scss';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import Profile from './Profile';
import Header from './Header';

const LandingPage = () => {
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const curData = await axios.get("https://panorbit.in/api/users.json")
        console.log(curData.data.users)
        setUserData(curData.data.users);
    }
    // profile view
    function viewProfile(e, id) {
        e.preventDefault();
        console.log(id)
        setUser(id)
        navigate(`/profile/${id}`);
    }
    return (
        <div className='landing-container'>
            <div className="landing-inner-container">
                <div className="landing-header">
                    <h4>Select An Account</h4>
                </div>
                <div className="user-lists">
                    {
                        userData.map((user, idx) => (
                            <div key={idx}>

                                <img src={user.profilepicture} width="35px" id='pic' alt='pic'></img>
                                <span id='userName' onClick={(e) => viewProfile(e, user.id)}> {user.name}</span>
                                {/* <Profile id={user.id} /> */}
                                <hr></hr>
                            </div>
                        ))
                    }
                </div>
                <div className="user-lists">
                    {
                        userData.map((user, idx) => (
                            <div key={idx}>
                                <Header name={user.name} pic={user.profilepicture}  />                                
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default LandingPage