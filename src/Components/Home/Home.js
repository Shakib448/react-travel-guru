import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Home.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BookData from "../BookData/BookData";

const Home = () => {
  const [bookData, setBookData] = useState(BookData);

  const [test, setTest] = useState("Find your Destiny");

  const [routeId, setRouteId] = useState([]);

  console.log(test.title);

  const handleTitle = (title) => {
    const newTitle = [title];
    setTest(newTitle);
  };
  const handleId = (id) => {
    const newId = [id];
    setRouteId(newId);
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-5 home__content ">
            <h1> {test} </h1>
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
              Book Now {routeId} <ArrowForwardIcon className="home__icon" />{" "}
            </Button>
          </div>
          <div className="col-md-12 home__choices">
            {bookData.map(({ title, img, id }) => (
              <div
                kye={id}
                onClick={() => {
                  handleTitle(title);
                  handleId(id);
                }}
                className="card-group home__choiceData"
              >
                <div className="card text-white">
                  <img
                    className="card-img-top"
                    src={img}
                    alt="Card image top"
                  />
                  <div className="card-img-overlay">
                    <h4 className="card-subtitle">{title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
