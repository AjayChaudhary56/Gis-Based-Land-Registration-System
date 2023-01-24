import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { RiRoadMapFill } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import axios from "axios";

import "./style.css";
const Userdashboardedit = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    const address = e.target.address.value;
    const emailId = e.target.emailId.value;
    const citizenshipNumber = e.target.citizenshipNumber.value;
    axios
      .post("http://localhost:3000/", {
        name,
        age,
        address,
        emailId,
        citizenshipNumber,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <form onSubmit={handleSubmit()}>
          <input id="name" name="name" placeholder="Name" type="text" />
          <input id="age" name="age" placeholder="Age" type="number" />
          <input
            id="address"
            name="address"
            placeholder="Address"
            type="text"
          />
          <input
            id="emaiId"
            name="emailId"
            placeholder="Email Id"
            type="text"
          />
          <input
            id="citizenshipNumber"
            name="citizenshipNumber"
            placeholder="Citizenship-number"
            type="text"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Userdashboardedit;
