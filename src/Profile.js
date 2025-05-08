import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-div'>
      
      <img src='/images/Arrow 1.jpg' className='arrow-img' alt='home-page'/>

      <div className='img-div'>
        <img src='/images/profile.jpg' className='profile-img' alt='home-page'/>
      </div>  

      <p className='profile-head'>This Profile is for</p>

      <div className='option-div'>
        <div className='son-div'>
          <p className='text'>Myself</p>
        </div>
        <div className='son-div'>
          <p className='text'>My Son</p>
        </div>
        <div className='son-div'>
          <p className='text'>My Daughter</p>
        </div>
        <div className='son-div'>
          <p className='text'>My Brother</p>
        </div>
        <div className='son-div'>
          <p className='text'>My sister</p>
        </div>
        <div className='son-div'>
          <p className='text'>My Friend</p>
        </div>
        <div className='son-div'>
          <p className='text'>My Relative</p>
        </div>
      </div>

      <p className='profile-head'>Gender</p>

      <div className='option-div'>
        <div className='son-div'>
          <p className='text'>Male</p>
        </div>

        <div className='son-div'>
          <p className='text'>Female</p>
        </div>
      </div>

      
    </div>
  )
}

export default Profile;
