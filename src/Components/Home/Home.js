import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Home.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BookData from "../BookData/BookData";
import { Carousel } from "react-bootstrap";
import img from "../Resources/Image/Sajek.png";

const Home = () => {
  const [bookData, setBookData] = useState(BookData);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-5 home__content ">
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
            <Button className="home__btn" variant="contained">
              Book Now <ArrowForwardIcon className="home__icon" />{" "}
            </Button>
          </div>
          {/* <div className="col-md-3">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
