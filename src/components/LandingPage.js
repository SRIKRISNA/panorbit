import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.scss';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import Profile from './Profile';
import bgImg from '../assests/bg.jpg';
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
    function viewProfile(e, id, name, picture) {
        e.preventDefault();
        // console.log(id, name, picture)
        setUser(id)
        localStorage.setItem('curID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Picture', picture);

        navigate(`/profile/${id}`);
    }
    const myStyle={
        backgroundImage: 
 "url('https://img.freepik.com/free-photo/abstract-fantasy-landscape-background_23-2149124337.jpg?w=826&t=st=1676290489~exp=1676291089~hmac=6493d6a3077b57e1e3948b4da9518947e88d23e5a559fcc86a3353f307b82e30')",
        width:'100vw',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='landing-container' style={myStyle}>
            <div className="landing-inner-container">
                <div className="landing-header">
                    <h4>Select An Account</h4>
                </div>
                <div className="user-lists">
                    {
                        userData.map((user, idx) => (
                            <div key={idx}>
                                <img src={user.profilepicture} width="35px" id='pic' alt='pic'></img>
                                <span id='userName' onClick={(e) => viewProfile(e, user.id, user.name, user.profilepicture)}> {user.name}</span>
                                <hr></hr>
                            </div>
                        ))
                    }
                </div>
                {/* <div className="user-lists">
                    {
                        userData.map((user, idx) => (
                            <div key={idx}>
                                <Header name={user.name} pic={user.profilepicture}  />                                
                            </div>
                        ))
                    }
                </div> */}

            </div>
        </div>
    )
}

export default LandingPage