import React from 'react';
import profilePic from './../images/profileImage.png'; // Make sure to import your profile picture here

const ProfileImage = () => {
  return (
    <div className="profile-image-container">
      <img src={profilePic} alt="Profile" className="profile-image" />
    </div>
  );
};

export default ProfileImage;


