import React from 'react'
import './Body.css'
import facebook from '../Images/facebook.png'
import insta from '../Images/instagram.png'
import youtube from '../Images/youtube.png'
import twitter from '../Images/twitter.png'
import health from '../Images/woman-health-logo.png'
import skin from '../Images/skin-care.png'
import immunity from '../Images/immunity.png'
import hair from '../Images/hair-care.png'
import clinic from '../Images/clinic.png'
import feedback_img1 from '../Images/images.png'
import feedback_img2 from '../Images/images (1).png'
import calender from '../Images/calender.png'
import forward from '../Images/arrow_forward.png'
import backward from '../Images/arrow_back.png'

const Body = () => {
  return (
    <div className='body'>
      <div className='left'>
        <div className='left1'>
<div className='title'><h4 >A Little About me  <button className='follow'>Follow +</button></h4></div>
<p>Hello I am Dr. Bruce Willis a Gynaecologist In Sanjivini Hospital Surat. Love to work with all my hospital staff and
    senior doctors. Completed my graduation in Gynaecologist Medicine from the</p> 
    <hr/><b className='read'>Read More</b>


<div className='languages'>
    <span><b>Language Spoken</b></span>
    <span className='en'>English</span>
    <span className='en'>Hindi</span>
    <span className='en'>Telugu</span>
</div>

<div className='contacts'>
<img src={facebook} alt='facebook_icon'/>
<img src={insta} alt='instagram_icon'/>
<img src={youtube} alt='youtube_icon'/>
<img src={twitter} alt='twitter_icon'/>
</div>
        </div>

        <div className='left2'>
          <div className='heading'><h4>I Specialize In</h4></div>
          <div className='treatments'>
            <div className='up'>
            <img className='img1' src={health} alt=''/>
            <img className='img2' src={skin} alt=''/>
            <img className='img3' src={immunity} alt=''/>
            <img className='img4' src={hair} alt=''/>
            </div>
            <div className='low'>
            <span className='one1'>Women's Health</span>
        <span className='tw'>Skin Care</span>
        <span className='thr'>Immunity</span>
        <span className='four'>Hair Care</span>
            </div>
          </div>
        </div>

        <div className='left3'>
          <div className='heading'><h4>The Concerns I Treat</h4></div>
          <div className='medicine'>
            <div className='up-div'>
            <button>Skin Treatment</button>
            <button>Pregnancy</button>
            <button>Period Doubts</button>
            <button>Endometriosis</button>
            </div>
            <div className='low-div'>
            <button>Pelvic Pain</button>
            <button>Ovarian Cysts</button>
            <button className='extra'>+5 More</button>
            </div>
          </div>
        </div>

        <div className='left4'>
          <div className='heading'><h4>My Work Experience</h4></div>
          <div className='info'>
          <p>I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</p>
          <hr></hr>
          </div>
            <div className='clinic1'>
           <img src={clinic} alt=''/>
           <div className='pos'><p className='clinic_name'>Midtown Medical Clinic</p> <p className='post'>Senior doctor</p></div>
           <p className='year'>2016-PRESENT</p>
            </div>
            <div className='clinic2'>
            <img src={clinic} alt=''/>
            <div className='pos'><p className='clinic_name'>Midtown Medical Clinic</p> <p className='post'>Senior doctor</p></div>
           <p className='year'>2010-2015</p>
            </div>
        </div>

        <div className='left5'>
          <div className='heading'><h4>Featured Reviews (102)</h4></div>
          <div className='box1'>
            <div className='row1'>
          <img src={feedback_img1} alt=''/>
   <div className='desig'>
    <p className='alice'>Alicent Hightower</p>
    <p className='occup'>Consulted for Skin care</p>
   </div>
   <p className='date'>20 January 2023</p>
   </div>
   <div className='stars1'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
   <p className='review'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall, will 
   write again after using it for longer periods.</p>
          </div>
          <div className='box2'>
            <div className='row2'>
          <img src={feedback_img2} alt=''/>
   <div className='desig'>
    <p className='alice'>Alicent Hightower</p>
    <p className='occup'>Consulted for Pregnancy</p>
   </div>
   <p className='date'>20 January 2023</p>
   </div>

   <div className='stars1'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
   <p className='review'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall, will 
   write again after using it for longer periods.</p>
          </div>
        
        </div>
      </div>

      <div className='right'>
<div className='appoint'>
  <p className='fee'>Appointment Fee</p>
  <p className='price'>₹699.00</p>
</div>

<div className='mode'>
<p><b>Select your mode of session</b></p>
<hr></hr>
</div>

<div className='slots'>
  <button className='but1'><p className='name1'>In-Clinic</p><p>45 Mins</p></button>
  <button className='but2'><p className='name2'>Video<i class="fas fa-check-circle"></i></p><p>45 Mins</p></button>
  <button className='but3'><p className='name3'>Chat</p><p>10 Mins</p></button>
</div>

<div className='mode1'>
<p><b>Pick a time slot</b></p>
<hr></hr>
<img src={calender} alt='calender'/>
</div>

<div className='pick'>
<img className='backward' src={backward} alt=''/>
 <button className='buton1'><p className='nm1'>Mon, 10 Oct</p><p className='cnt1'>10 slots</p></button>
 <button className='buton2'><p className='nm2'>Tue, 11 Oct</p><p className='cnt2'>02 slots</p></button>
 <button className='buton3'><p className='nm3'>Wed, 12 Oct</p><p className='cnt3'>05 slots</p></button>
 <img className='forward' src={forward} alt=''/>
</div>

<p className='morn'><b>Morning</b></p>
<div className='schedule'>
  <div className='top'>
    <button>09:00 AM</button>
    <button>09:30 AM</button>
    <button>10:00 AM</button>
    <button>10:15 AM</button>
  </div>
  <div className='bottom'>
  <button>10:45 AM</button>
  <button className='eleven'>11:00 AM</button>
  </div>
</div>

<p className='morn'><b>Evening</b></p>
<div className='schedule'>
  <div className='top'>
    <button>04:00 PM</button>
    <button>04:15 PM</button>
    <button>04:30 PM</button>
    <button>04:45 PM</button>
  </div>
  <div className='bottom'>
  <button>05:15 PM</button>
  </div>
</div>

<button className='appointment'>Make An Appointment</button>

</div>
    </div>
  )
}

export default Body
