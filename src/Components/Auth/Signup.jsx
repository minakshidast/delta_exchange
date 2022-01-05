import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import signstyles from "./Signup.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Navbar } from "../Home/HomeComponents/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  const [isHidden, setisHiddden] = useState(true);
  const history = useHistory(null);
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        dispatch(trackLogin(authUser));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;

        dispatch(trackLogin(user));
      })
      .catch((error) => {
        alert("wrong credentials");
      });
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "0",
        padding: "0",
        background: "rgb(65,42,76)",
      }}
    >
      <div className={signstyles.container}>
        <Navbar />
        <div className={signstyles.centered}>
          <span> Sign Up </span>
        </div>
      </div>
      <div className={signstyles.bodylog}>
        <div className={signstyles.main}>
          <div className={signstyles.middle}>
            <form className={signstyles.formed}>
              <div>
                <input type="checkbox" id="terms" name="terms" value="terms" />
                <label for="terms">
                  I agree to the terms of service and privacy policy.
                </label>
              </div>
              <button
                type="submit"
                onClick={onSubmit}
                className={signstyles.google}
              >
                {" "}
                <img
                  className={signstyles.googleimg}
                  src="https://img.icons8.com/color/452/google-logo.png"
                  alt="google"
                />
                Signup via Google
              </button>
              <button className={signstyles.google}>
                {" "}
                <img
                  className={signstyles.googleimg}
                  src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png"
                  alt="apple"
                />{" "}
                Sign up via Apple
              </button>
              <button
                className={signstyles.btn3log}
                type="button"
                onClick={() => setisHiddden(!isHidden)}
              >
                {" "}
                <img
                  className={signstyles.googleimg}
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"
                  alt="email"
                />
                Sign up via Email
              </button>
              <div id="hideDiv" className={isHidden ? signstyles.hidden : ""}>
                <div>
                  <label>Email </label>
                  <br />
                  <input
                    className={signstyles.input1log}
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <br />
                  <input
                    className={signstyles.input1log}
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </div>
                <div
                  style={{
                    textAlign: "right",
                    paddingTop: "50px",
                    marginRight: "50px",
                  }}
                >
                  <span>Forgot Password?</span>
                </div>
                <button
                  className={signstyles.btn2log}
                  type="button"
                  onClick={register}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={signstyles.bottom}>
        <p>Have an Account already?</p>
        <Link to="/login">
          <button className={signstyles.linkbuttons}>Login</button>
        </Link>
        <br />
        <br />
        <br />
      </div>
      <div></div>
    </div>
  );
}

export { Signup };
