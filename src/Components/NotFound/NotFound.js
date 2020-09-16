import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div className="notFount">
      <h1>This page is not found </h1>
      <Button onClick={handleBack}>Go back</Button>
    </div>
  );
};

export default NotFound;
