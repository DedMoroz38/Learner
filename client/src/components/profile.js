import React from "react";
import icon from '../images/profileIcon.png';
import Header from "./header";
import { useState } from "react";
import { useRef } from "react";

const Profile = () => {
    const [profileImg, setProfileImg] = useState('');
    var changeHandler = function (event) {
        setProfileImg(URL.createObjectURL(event.target.files[0]));
      };
    return (
        <div className="profile">
            <div className="profileTop">
                <Header />
            </div>
            <div className="profile-container">
                <div className="profileHeaderBox">
                    <div className="heading">
                        <label>
                            <div className="profile-image-box">
                                {profileImg != '' ? <img src={profileImg} alt='profileIcon' /> : <img className="profileIcon" src={icon} alt='profileIcon' />}
                            </div>
                            <input className="image-input" type="file" name="file" onChange={changeHandler} />  
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;