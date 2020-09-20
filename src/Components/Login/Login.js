import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "../../Firebase.config";

import fb from "../Resources/Icon/fb.png";
import google from "../Resources/Icon/google.png";
import { UserLoggedIn } from "../../App";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(UserLoggedIn);
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  const [newUserInfo, setNewUserInfo] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  //Facebook
  const providerFB = new firebase.auth.FacebookAuthProvider();
  const handleFaceBookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(providerFB)
      .then((res) => {
        const { email, displayName } = res.user;

        const singedInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
        };

        setLoggedIn(singedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Google
  const providerGG = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(providerGG)
      .then((res) => {
        const { email, displayName } = res.user;

        const singedInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
        };

        setLoggedIn(singedInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Location
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = (data) => {
    if (newUserInfo && data.email && data.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          const newUser = { ...user, email: data.email, name: data.name };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          setLoggedIn(newUser);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
          setLoggedIn(newUser);
        });
    }

    if (!newUserInfo && data.email && data.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          const newUser = { ...user, email: data.email, name: data.name };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          setLoggedIn(newUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setLoggedIn(newUser);
          setUser(newUser);
        });
    }
  };

  return (
    <div className="login container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          <form onSubmit={handleSubmit(onSubmit)} className="m-4 __login">
            <h5> {newUserInfo ? " Create a new account?" : "Log in"} </h5>
            <hr />
            {newUserInfo && (
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  name="fullName"
                  className="form-control login__input"
                  placeholder="First Name"
                  ref={register({
                    required: "First name required",
                    minLength: {
                      value: 5,
                      message: "First Name should be 5 characters",
                    },
                  })}
                />{" "}
                <br />
                <span style={{ color: "red" }}>
                  {errors.fullName && errors.fullName.message}
                </span>
                <input
                  name="lastName"
                  className="form-control login__input"
                  placeholder="Last Name"
                  ref={register({
                    required: "Last name required",
                    minLength: {
                      value: 5,
                      message: "Last name should be 5 characters",
                    },
                  })}
                />{" "}
                <br />
                <span style={{ color: "red" }}>
                  {errors.lastName && errors.lastName.message}
                </span>
              </div>
            )}
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                name="email"
                placeholder="Email"
                className="form-control login__input"
                ref={register({
                  required: "Email is required",
                  validate: (value) =>
                    value.includes("@") || "Email must include '@' symbol",
                })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.email && errors.email.message}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control login__input"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password mus have at least 8 characters",
                  },
                })}
              />{" "}
              <br />
              <span style={{ color: "red" }}>
                {errors.password && errors.password.message}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control login__input"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords did not match",
                })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.confirmPassword && errors.confirmPassword.message}
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <input
                className="btn btn-primary login__inputBtn"
                type="submit"
                value={newUserInfo ? "Create an account" : "Login"}
              />
              <br />
              {(user.error && (
                <p className="alert alert-danger" role="alert">
                  {" "}
                  {user.error}{" "}
                </p>
              )) ||
                (user.success && (
                  <p className="alert alert-success text-center" role="alert">
                    {" "}
                    User {newUserInfo
                      ? "created"
                      : "Logged In"} successfully{" "}
                  </p>
                ))}
              <span
                className="mt-4"
                style={{
                  color: "#F9A51A",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setNewUserInfo(!newUserInfo)}
              >
                <h4>
                  {" "}
                  {newUserInfo
                    ? "Already  have an account?"
                    : "I have no account created?"}{" "}
                </h4>
              </span>
            </div>
          </form>
          <div className="login__or">
            <div className="row login__or">
              <div className="col-md-4">
                <hr className="login__left" />
              </div>
              <div className="col-md-4">
                <h3>or</h3>
              </div>
              <div className="col-md-4 login__rightLeft">
                <hr className="login__right" />
              </div>
            </div>
          </div>
          <div
            onClick={handleFaceBookSignIn}
            className="login__faceBook__google"
          >
            <div className="login__facebook">
              {" "}
              <img src={fb} alt="" className=" login__fb" />
              <span>Continue with Facebook</span>
            </div>
          </div>
          <div onClick={handleGoogleSignIn} className="login__faceBook__google">
            <div className="login__facebook">
              {" "}
              <img src={google} alt="" className=" login__fb" />
              <span className="login__google">Continue with Google</span>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Login;
