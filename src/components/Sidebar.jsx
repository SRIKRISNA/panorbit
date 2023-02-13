import React from 'react'
import './style.scss';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <ul>
            <Link to='/profile/:id'> <li>Profile</li></Link><hr/>
            <Link to='/comingsoon'> <li>Posts</li></Link><hr/>
            <Link to='/comingsoon'> <li>Gallery</li></Link><hr/>
            <Link to='/comingsoon'> <li>ToDo</li></Link>
        </ul>
    </div>
  )
}

export default Sidebar