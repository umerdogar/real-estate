import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Forms from "../components/Forms";




const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Forms />} />

      </Routes>
    </BrowserRouter>
  );
};

// const mapStateToProps = ({ User }) => {
//   return {
//     User,
//   };
// };

// const mapDispatchToProps = {

// };
export default Routing;
