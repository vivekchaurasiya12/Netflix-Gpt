import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { IMAGE, BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [signin, setSignin] = useState(true);
  const handleSignIn = () => {
    setSignin(!signin);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const fullname = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const handleValidation = () => {
    const message = validate(
      email.current.value,
      password.current.value,
      signin ? "" : fullname.current.value,
      signin ? "" : mobile.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!signin) {
      // signup logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: IMAGE,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: IMAGE,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
        });
    } else {
      // signin logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div>
        <img
          src={BACKGROUND_IMAGE}
          alt="Netflix Background"
          className="w-full min-h-screen object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-6 py-8 sm:px-12 sm:py-14 rounded-lg w-11/12 sm:w-auto"
      >
        <h1 className="text-xl sm:text-2xl text-white font-bold">
          {signin ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col items-center">
          {!signin && (
            <input
              ref={fullname}
              type="text"
              placeholder="Full Name"
              className="w-full sm:w-96 mt-5 p-2 rounded-md"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="w-full sm:w-96 mt-5 p-2 rounded-md"
          />
          {!signin && (
            <input
              ref={mobile}
              type="text"
              placeholder="Phone Number"
              pattern="[0-9]*"
              className="w-full sm:w-96 mt-5 p-2 rounded-md"
            />
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full sm:w-96 mt-5 p-2 rounded-md"
          />
          <p className="text-white p-2 text-left">{errorMessage}</p>
          <button
            className="w-full sm:w-96 mt-5 p-2 bg-red-600 text-white rounded-md"
            onClick={handleValidation}
          >
            {signin ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className="mt-5 text-white text-center">
          <span>
            {signin ? "New to Netflix?" : "Already existing customer?"}
          </span>
          <span
            className="text-red-600 ml-2 cursor-pointer"
            onClick={handleSignIn}
          >
            {signin ? "Sign Up Now" : "Sign In Now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;