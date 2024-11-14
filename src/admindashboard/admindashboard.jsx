import Sidebar from "./Component/sidebar";

const Admindashboard = () => {


  const showgenerakbooking = () => {
    document.getElementById('extention-request-description').style.display = 'none';
    document.getElementById('general-request-description').style.display = 'block';
    document.getElementById('general-request').style.backgroundColor = 'rgb(248, 72, 99)';
    document.getElementById('extention-request ').style.backgroundColor = 'rgb(255, 251, 251)';
  };
  const showextentionbooking = () => {
    document.getElementById('extention-request-description').style.display = 'block';
    document.getElementById('general-request-description').style.display = 'none';
    document.getElementById('extention-request ').style.backgroundColor = 'rgb(248, 72, 99)';
    document.getElementById('general-request').style.backgroundColor = 'rgb(255, 251, 251)';
  };


  return (
    <div className="admin-topbox">
     
        <Sidebar />
        <div>
        <div className="slot-request">
          <div className="general-request" onClick={showgenerakbooking} id="general-request">
            <h4>Slote Request</h4>
          </div>
          <div className="extention-request" onClick={showextentionbooking} id="extention-request">
            <h4>Extention Request</h4>
          </div>
        </div>
        <div className="general-request-description" id="general-request-description">
            <div className="xyz">
            <div className="user-profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaynudV8sm-8G1JGqlusPXrWYMREc61jkYFQ&s"/>
            <div>
            <h3>User name: <span>John Doe</span></h3>
            <p>User location: <span>BKC Mumbai</span></p>
            </div>
            </div>
           
            <div className="companion-booking-detail">
            <div>
          <h4>Companion name</h4>
          <p>alisha ciara</p>
            </div>
            <div>
          <h4>Date of booking</h4>
          <p>17 Nov,2027</p>
            </div>
            <div>
          <h4>Time of booking</h4>
          <p>11.00AM-2.00PM</p>
            </div>

            </div>
            <div className="booking-detail">
            <div className="purpose-booking"> 
              <h4>Purpose of booking:</h4>
              <span> wanna take her to my place</span>
             
            </div>
            <div className="meetup-location"> 
              <h4>location of meetup:</h4>
              <span> taj hotel </span>
             
            </div>

            </div>
            <div className="response-btn">
            <button className="accept-btn">Accept </button>
            <button className="reject-btn">Reject </button>
            </div>
            </div>
            <div className="xyz">
            <div className="user-profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaynudV8sm-8G1JGqlusPXrWYMREc61jkYFQ&s"/>
            <div>
            <h3>User name: <span>John Doe</span></h3>
            <p>User location: <span>BKC Mumbai</span></p>
            </div>
            </div>
           
            <div className="companion-booking-detail">
            <div>
          <h4>Companion name</h4>
          <p>alisha ciara</p>
            </div>
            <div>
          <h4>Date of booking</h4>
          <p>17 Nov,2027</p>
            </div>
            <div>
          <h4>Time of booking</h4>
          <p>11.00AM-2.00PM</p>
            </div>

            </div>
            <div className="booking-detail">
            <div className="purpose-booking"> 
              <h4>Purpose of booking:</h4>
              <span> wanna take her to my place</span>
             
            </div>
            <div className="meetup-location"> 
              <h4>location of meetup:</h4>
              <span> taj hotel </span>
             
            </div>

            </div>
            <div className="response-btn">
            <button className="accept-btn">Accept </button>
            <button className="reject-btn">Reject </button>
            </div>
            </div>
            <div className="xyz">
            <div className="user-profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaynudV8sm-8G1JGqlusPXrWYMREc61jkYFQ&s"/>
            <div>
            <h3>User name: <span>John Doe</span></h3>
            <p>User location: <span>BKC Mumbai</span></p>
            </div>
            </div>
           
            <div className="companion-booking-detail">
            <div>
          <h4>Companion name</h4>
          <p>alisha ciara</p>
            </div>
            <div>
          <h4>Date of booking</h4>
          <p>17 Nov,2027</p>
            </div>
            <div>
          <h4>Time of booking</h4>
          <p>11.00AM-2.00PM</p>
            </div>

            </div>
            <div className="booking-detail">
            <div className="purpose-booking"> 
              <h4>Purpose of booking:</h4>
              <span> wanna take her to my place</span>
             
            </div>
            <div className="meetup-location"> 
              <h4>location of meetup:</h4>
              <span> taj hotel </span>
             
            </div>

            </div>
            <div className="response-btn">
            <button className="accept-btn">Accept </button>
            <button className="reject-btn">Reject </button>
            </div>
            </div>
        </div>
        <div className="extention-request-description" id="extention-request-description">
        <div className="xyz">
            <div className="user-profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaynudV8sm-8G1JGqlusPXrWYMREc61jkYFQ&s"/>
            <div>
            <h3>User name: <span>John Doe</span></h3>
            <p>User location: <span>BKC Mumbai</span></p>
            </div>
            </div>
           
            <div className="companion-booking-detail">
            <div>
          <h4>Companion name</h4>
          <p>alisha ciara</p>
            </div>
            <div>
          <h4>Current booking date</h4>
          <p>17 Nov,2027</p>
            </div>
            <div>
          <h4>current booking time</h4>
          <p>11.00AM-2.00PM</p>
            </div>

            </div>
            <div className="booking-detail">
            <div className="purpose-booking"> 
              <h4>Request for extention:</h4>
              <span> 1 hour</span>
             
            </div>
            <div className="meetup-location"> 
              <h4>location of meetup:</h4>
              <span> taj hotel </span>
             
            </div>

            </div>
            <div className="response-btn">
            <button className="accept-btn">Accept </button>
            <button className="reject-btn">Reject </button>
            </div>
            </div>
        </div>

        </div>
    </div>
  );
};

export default Admindashboard;
