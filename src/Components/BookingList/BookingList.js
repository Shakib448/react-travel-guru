import React, { useEffect, useState } from "react";
import "./BookingList.css";
import start from "../Resources/Icon/star_1_.png";
import bookingListData from "../BookingListData/BookingListData";
import BookData from "../BookData/BookData";
import { useParams } from "react-router-dom";

const BookingList = () => {
  const [bookingList] = useState(bookingListData);

  let { routeId } = useParams();
  const finalBook = BookData.find((data) => data.id == routeId);

  const [finalBookData, setFinalBookData] = useState([]);

  useEffect(() => {
    setFinalBookData(finalBook);
  }, [finalBook]);

  return (
    <div className="bookDetails ">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12 bookingList__hr">
            <hr />
            <h1 className="text-left"> {finalBookData.title} </h1>
          </div>
        </div>
        <div className="row ">
          {bookingList.map(
            ({ title, img, desc1, desc2, desc3, rating, money, id }) => (
              <div key={id} className="row col-md-12 mb-4">
                <div className="col-md-3">
                  <img
                    src={img}
                    className="bookingList__horizontalCard"
                    alt=""
                  />
                </div>
                <div className="col-md-3 bookingList__horizontalCardText">
                  <h6>{title}</h6>
                  <div className="bookingList__details">
                    <p>{desc1}</p>
                    <p>{desc2}</p>
                    <p>{desc3}</p>
                    <p>
                      <img src={start} alt="" className="bookingList__icon" />
                      <span className="bookingList__rating">
                        {rating}{" "}
                      </span>{" "}
                      <span className="bookingList__money">${money}</span>{" "}
                      $167total
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="col-md-6 bookingList__googleMap">
          <iframe
            width="100%"
            height="670"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
