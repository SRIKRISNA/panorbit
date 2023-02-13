// import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import './style.scss';
import ComingSoon from './ComingSoon';
// import { NavLink } from 'react-router-dom';

const Profile = () => {
    // console.log(useParams());
    const [userData, setUserData] = useState([])
    const [curData, setCurData] = useState([])
    const userid = useParams().id;
    // console.log(userid)
    // console.log(curData.company['name'])
    // console.log(curData.address['city'])
    // const company = curData.company['name']
    // console.log(curData.Object.entries(curData));


    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const tempData = await axios.get("https://panorbit.in/api/users.json")
        setCurData(tempData.data.users[userid - 1]);
        console.log(tempData.data.users[userid - 1])
    }

    return (

        <div className="profile-container">
            <div className='side'>
                <Sidebar />
            </div>
            <div className='dashboard-container'>
                <Header pic={curData.profilepicture} name={curData.name} />
                <hr></hr>
                {/* <span id='userName' > {useParams().id}</span> */}
                <div className='all-profile'>
                    <div className='profile-details' >
                        <img src={curData.profilepicture} width="170px" id='pic' alt='pic'></img>
                        <h4> {curData.name}</h4>
                        <p><span className='detail'>Username : </span><b>{curData.username}</b></p>
                        <p><span className='detail'>e-mail : </span><b>{curData.email}</b></p>
                        <p><span className='detail'>Phone: </span><b>{curData.phone}</b></p>
                        <p><span className='detail'>Website : </span><b>{curData.website}</b></p>
                        <hr></hr>
                        <p>Company</p>
                        {console.log(curData)}
                        {/* {company['name']} */}
                        {/* <p><span className='detail'>Company</span>{curData.company.Object}</p> */}
                        {/* <p><span className='detail'>Name : </span><b>{curData.company.name}</b></p>
                        <p><span className='detail'>catchphrase : </span><b>{curData.company.catchPhrase}</b></p>
                        <p><span className='detail'>bs : </span><b>{curData.company.bs}</b></p> */}

                    </div><hr />
                    <div className='map-details' >
                        <div style={{marginBottom:'200px'}}>Address</div>
                        <div className='map'>
                            <iframe width="500" height="280" id="gmap_canvas" src="https://maps.google.com/maps?q=Kormanagala&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;