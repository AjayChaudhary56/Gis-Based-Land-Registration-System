import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { RiRoadMapFill } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import profile from "./profile.jpg";

import "./style.css";
const Userdashboard = () => {
  return (
    <div className="sidebar-all-content">
      <div className="sidebar-main">
        <ul>
          <li>
            <GoSearch />
            <Link to="/user/search">Search</Link>
          </li>
          <li>
            <MdDashboard />
            <Link to="/user/dashboard">Dashboard</Link>
          </li>
          <li>
            <RiRoadMapFill />

            <Link to="/user/ownedLand">Owned Land</Link>
          </li>
          <li>
            <RiMapPinUserFill />

            <Link to="/user/addLand">Add Land</Link>
          </li>
          <li>
            <BsQuestionCircleFill />
            <Link to="/user/notification">Requeset Land</Link>
          </li>
          <li>
            <MdNotificationsActive />
            <Link to="/user/notification">Notification</Link>
          </li>
          <li className="logout">
            <HiOutlineLogout />
            <Link to="/signin">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard-main-content">
        <h1> Your Profile</h1>
        <div className="profile">
          <div className="profile-pic">
       <img src={profile} alt="profile pic" />
          </div>
          <div className="profile-description">
           <h3>Name:Ajay Chaudhary</h3>
           <h3>Age: 23</h3>
           <h3> Address:Lamachaur,Pokhara</h3>
           <h3>Citizenship Number:037845-84-436-55</h3>
           <h3>Email Id:iamazoy110125@gmail.com</h3>
           <button><Link to='/user/dashboardedit'>Edit</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
