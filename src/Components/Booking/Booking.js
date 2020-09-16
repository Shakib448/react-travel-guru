import React, { useState } from "react";
import "./Booking.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
            <form onSubmit={handleSubmit(onSubmit)} className="booking__date">
              <div className="form-group" style={{ textAlign: "left" }}>
                <h4>Origin</h4>
                <input
                  name="origin"
                  placeholder="City where you live"
                  className="form-control booking__input"
                  ref={register({
                    required: "Please select your area",
                    minLength: {
                      value: 5,
                      message: "Area details should be 5 characters",
                    },
                  })}
                />
                <br />
                <span style={{ color: "red" }}>
                  {errors.origin && errors.origin.message}
                </span>
              </div>
              <div className="form-group" style={{ textAlign: "left" }}>
                <h4>Destination</h4>
                <input
                  name="destination"
                  placeholder="Your destination"
                  className="form-control booking__input"
                  ref={register({
                    required: "Please write your destination",
                    minLength: {
                      value: 5,
                      message: "Destination details should be 5 characters",
                    },
                  })}
                />{" "}
                <br />
                <span style={{ color: "red" }}>
                  {errors.destination && errors.destination.message}
                </span>
              </div>
              <div className="text-left">
                {showSearch && (
                  <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                  />
                )}
                <Button
                  onClick={() => setShowSearch(!showSearch)}
                  className="booking__dateBtn"
                  variant="outlined"
                >
                  {showSearch ? "Hide" : "Travel Dates"}
                </Button>
              </div>
              <br />
              {showSearch && (
                <div style={{ textAlign: "center" }}>
                  <input
                    className="btn btn-primary booking__submitBtn"
                    type="submit"
                    value="Start Booking"
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
