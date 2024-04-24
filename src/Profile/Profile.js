import React from 'react';
import './Profile.css';
import pattern from '../Images/back.avif';
import doctor from '../Images/circle-photo.png';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='top-contents'>
        <img className='pattern' src={pattern} alt="logo" />
        <img className='doctor-pic' src={doctor} alt='doctor' />
      </div>
      <div className='bottom-contents'>
       <div className='contents'>
<div className='first'>
<h4>Dr. Bruce Willis <i class="fas fa-check-circle"></i></h4>
<p className='speciality'>Gynecologist</p>
<p className='rating'>
    4.2 
    <span className='stars'>&#9733;&#9733;&#9733;&#9733;</span>
  </p>
</div>

<div className='second'>
    <div className='upper'>
    <span>Followers</span>
    <span>Following</span>
    <span>Posts</span>
    </div>

    <div className='lower'>
        <span className='one'>850</span>
        <span className='two'>18K</span>
        <span className='three'>250</span>
    </div>
</div>

<div className='third'>
    <button>Book an Appointment</button>
</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
