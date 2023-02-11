// import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'
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

                <span id='userName' > {useParams().id}</span>
                
                <hr></hr>
                {curData.name}
                <img src={curData.profilepicture} width="35px" id='pic' alt='pic'></img>

                {/* {
                    curData.localeCompare((item, idx) => (
                        <div key={idx}>{item.name}</div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default Profile;