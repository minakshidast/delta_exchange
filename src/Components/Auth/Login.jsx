import React, { useRef } from "react";
import loginstyles from "./Login.module.css";
import { auth } from "./firebase";
import firebase from "firebase/app";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        dispatch(trackLogin(authUser));
      });
  };
  const handleGoogleSingIn = (e) => {
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
    <div className={loginstyles.cont}>
      <div className={loginstyles.wrap}></div>
      <div className={loginstyles.centered}>
        <h3 className={loginstyles.h2log}>Log in to your account</h3>
      </div>

      <div className={loginstyles.main}>
        <form>
          <div className={loginstyles.top}>
            <button
              onClick={handleGoogleSingIn}
              type="submit"
              className={loginstyles.google}
            >
              {" "}
              <img
                className={loginstyles.googleimg}
                src="https://img.icons8.com/color/452/google-logo.png"
                alt="google"
              />
              Signup via Google
            </button>
            <button className={loginstyles.google}>
              {" "}
              <img
                className={loginstyles.googleimg}
                src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png"
                alt="apple"
              />{" "}
              Sign up via Apple
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className={loginstyles.forms}>
            <label>Email </label>
            <br />
            <input type="text" placeholder="Email" ref={emailRef} /> <br />
            <label>Password</label>
            <br />
            <input type="text" placeholder="Password" ref={passwordRef} />
          </div>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span className={loginstyles.forgot}>Forgot Password?</span>
          </div>
          <br />
          <div>
            <button
              type="submit"
              className={loginstyles.btn2log}
              onClick={signIn}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className={loginstyles.bottom}>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button className={loginstyles.linkbutton}>Sign up for free</button>
        </Link>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export { Login };
