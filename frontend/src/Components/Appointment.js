import React from "react";
import Nav from 'react-bootstrap/Nav';

function Appointment() {

  

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <img src="https://remedoapp.com/rweb/assets/default/images/doctor_female.svg" alt="..." style={{height: '15%', width: '15%', margin: '2%'}} />
        <div style={{margin: '2%'}}>
            <h5>Dr. Manik Dalvi</h5>
            <h5>Obstetrics & Gynecology</h5>
            <button type="button" class="btn btn-primary">View profile</button>
        </div>
      </div>
      <hr />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{margin: '2%'}}>
            <h5>Book Appointment</h5>
            <h5 style={{color: '#8f8d8d'}}>Select Your Consultation Type</h5>
            <p style={{color: '#20c997', fontWeight: 'bold', marginBottom: 0}}>Fees Rs 500</p>
            <p style={{color: '#715ac4', fontWeight: '600'}}>(pay at clinic)</p>
        </div>
        <div style={{display: 'flex', margin: '2% 2% 2% 30%'}}>
            {/* https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/In-Clinic_b.png */}
            <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/In-Clinic.png" alt="..." style={{height: '5rem', width: '5rem', margin: '1%'}}/>
            {/*https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/Audio_b.png*/}
            <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/Audio.png" alt="..." style={{height: '5rem', width: '5rem', margin: '1%'}}/>
            {/*	https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/video_b.png*/}
            <img src="https://remedoapp.com/rweb/assets/default/images/svg-img/new-img/video.png" alt="..." style={{height: '5rem', width: '5rem', margin: '1%'}}/>
        </div>
      </div>
      <div style={{margin: '0 2% 4% 2%'}}>
        <h5>Clinic Name</h5>
        <h6 style={{color: "#8f8d8d"}}>Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302</h6>
      </div>
      <div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" style={{textDecorationLine: 'none', color: 'black', fontWeight: '500'}}>Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{textDecorationLine: 'none', color: 'black', fontWeight: '500'}}>Tommorow</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{textDecorationLine: 'none', color: 'black', fontWeight: '500'}}>Tue, 26 Dec</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{textDecorationLine: 'none', color: 'black', fontWeight: '500'}}>Wed, 27 Dec</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div style={{display: 'grid', gap: '50px', gridTemplateColumns: 'auto auto auto', padding: '5%'}}>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>10:00 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>10:15 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>10:30 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>10:45 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>11:00 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>11:15 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>11:30 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>11:45 AM</div>
        <div style={{textAlign: 'center', padding: '2%', border: '1px solid black', borderRadius: '5px'}}>12:00 PM</div>
      </div>
      <button type="button" class="btn btn-primary" style={{margin: '2%', marginLeft: '80%'}}>Continue</button>
    </div>
  );
}

export default Appointment;