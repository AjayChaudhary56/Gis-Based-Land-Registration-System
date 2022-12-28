
import React from 'react'
import {Link} from 'react-router-dom'
import {GoSearch} from 'react-icons/go'
import {MdDashboard} from 'react-icons/md'
import {RiRoadMapFill} from 'react-icons/ri'
import {RiMapPinUserFill} from 'react-icons/ri'
import {BsQuestionCircleFill} from 'react-icons/bs'
import {MdNotificationsActive} from 'react-icons/md'
import {HiOutlineLogout} from 'react-icons/hi'
import {BiFilterAlt} from 'react-icons/bi'
import map from  './map.jpg'

import './style.css'
const Search = () => {
  return (
    <div className='sidebar-all-content'>
    <div className="sidebar-main">
        <ul>
            <li>
                <GoSearch/>
                <Link to="/user/search">Search</Link>
                
            </li>
            <li>
                <MdDashboard/>
                <Link to="/user/dashboard">Dashboard</Link>
                
            </li>
            <li>
                <RiRoadMapFill/>
           
                <Link to="/user/ownedLand">Owned Land</Link>
                
            </li>
            <li>
                <RiMapPinUserFill/>
               

                <Link to="/user/addLand">Add Land</Link>
                
            </li>
            <li>
                < BsQuestionCircleFill/>
                <Link to="/user/notification">Requeset Land</Link>
                
            </li>
            <li>
                <MdNotificationsActive />
                <Link to="/user/notification">Notification</Link>
                
            </li>
            <li className='logout'>
                <HiOutlineLogout/>
                <Link to="/signin">Logout</Link>
                
            </li>
           
        </ul>
    </div>
    <div className="main-content">
        <div className="searchbar">

       <input placeholder='Search by Location or Parcel no'/>
       <button ><GoSearch  className='' /> Search </button> 
       <button className='button2'> Filter <BiFilterAlt /> </button>
        </div>
        <div className="gismap">
           <img src={map} alt='map pics'/>
        </div>
    </div>
</div>
  )
}

export default Search