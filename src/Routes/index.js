import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screen/Home";
import Forms from "../screen/Forms";
import FormsTwo from "../screen/FormsTwo";
import Details from "../screen/Details";
import Commercial from "../screen/Commercial";
import Plots from "../screen/Plots";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import PrivateRoute from "../components/PrivateRoute";
import { connect } from "react-redux";

const Routing = () => {
  let token = localStorage.getItem("token");
  console.log(" from route=====", token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route exact path="*" element={token ? <Home /> : <Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
           <Route
          path="/details"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
        <Route
          path="/form"
          element={
            <PrivateRoute>
              <Forms />
            </PrivateRoute>
          }
        />
        <Route
          path="/formsTwo"
          element={
            <PrivateRoute>
              <FormsTwo />
            </PrivateRoute>
          }
        />
        <Route
          path="/formsTwo/plot"
          element={
            <PrivateRoute>
              <Plots />
            </PrivateRoute>
          }
        />
        <Route
          path="/formsTwo/commercial"
          element={
            <PrivateRoute>
              <Commercial />
            </PrivateRoute>
          }
        />
        {/* <Route path="*" element={  <PrivateRoute>    <Home />  </PrivateRoute>}/> */}
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  // let { token } = state.authReducer.user
  // console.log("login reducer from asdfasdfadfadfasd", token)
  return {};
};

// const mapDispatchToProps = {

// };

// export default Routing

export default connect(mapStateToProps)(Routing);
