import React, { useState } from "react";
import "./Booking.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="booking ">
      <div className="container">
        <div className="row">
          <div className="col-md-5 booking__details ">
            <h1>Coxes Bazar</h1>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptatum eum sit, similique ut provident ex, quo rem, sint
              accusamus dolorem. Obcaecati tempore quia a totam laboriosam.
              Asperiores cumque provident officia molestias ex doloribus,
              obcaecati accusamus explicabo, assumenda nam facilis, voluptatum
              maxime alias quis fugit natus dolores? Veniam architecto, nesciunt
              tenetur corporis amet ratione repudiandae et neque labore fugit
              dolorem quo blanditiis voluptates vero magnam quam, unde
            </h6>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 booking__detailsForm">
            {showSearch && (
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            )}
            <Button
              onClick={() => setShowSearch(!showSearch)}
              className="banner__searchButton"
              variant="outlined"
            >
              {showSearch ? "Hide" : "Search Dates"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
