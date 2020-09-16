import React from "react";
import "./BookingList.css";
import test from "../Resources/Image/Rectangle 27.png";
import start from "../Resources/Icon/star_1_.png";

const BookingList = () => {
  return (
    <div className="bookDetails ">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12 bookingList__hr">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img src={test} className="bookingList__horizontalCard" alt="" />
          </div>
          <div className="col-md-3 bookingList__horizontalCardText">
            <h6>Light bright airy stylish apt & safe peaceful stay</h6>
            <div className="bookingList__details">
              <p>4 guest 2 bedrooms 2 beds 2 baths</p>
              <p>Wifi Air conditional Kitchen</p>
              <p>Cancellation flexibility available</p>
              <p>
                <img src={start} alt="" className="bookingList__icon" />
                <span className="bookingList__rating">4.9(20) </span>{" "}
                <span className="bookingList__money">$34/night</span> $167total
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              width="100%"
              height="495"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
