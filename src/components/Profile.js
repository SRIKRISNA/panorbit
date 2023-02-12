// import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from './Header';
// import { NavLink } from 'react-router-dom';

const Profile = () => {
    // console.log(useParams());
    const [userData, setUserData] = useState([])
    const [curData, setCurData] = useState([])
    const userid = useParams().id;
    // console.log(userid)

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const tempData = await axios.get("https://panorbit.in/api/users.json")
        setCurData(tempData.data.users[userid - 1]);
        console.log(curData.id)

    }

    return (
        <div className="user-lists">
            <div className="user-data" >
                <Header pic={curData.profilepicture} name={curData.name} />
                <hr></hr>
                {/* <span id='userName' > {useParams().id}</span> */}
                {curData.name}
                <img src={curData.profilepicture} width="35px" id='pic' alt='pic'></img>
            </div>
        </div>
    )
}

export default Profile;