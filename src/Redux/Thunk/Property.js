import axios from "axios";
import { Navigate, NavigationType } from "react-router-dom";
import { allProperties, filterProperty } from "../Actions/allProperties";
// import { useNavigate } from "react-router-dom";

export const allPropertiesList = () => {
  // console.log("loginUserTWo")
  return (dispatch) => {
    console.log("property dispatch");
    axios
      .get(`http://52.220.87.52:8000/api/v1/property`)
      .then((res) => {
        dispatch(allProperties(res.data));
        console.log("Get all property thunk", res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

export const filterSingleProperty = (data, navigate) => {
  console.log("data input property", data);
  console.log("navigate property", navigate);

  return (dispatch) => {
    console.log("property filter");
    axios
      .post(`http://52.220.87.52:8000/api/v1/property/filter`, data)
      .then((res) => {
        dispatch(filterProperty(res.data));
        navigate("/details", res.data);

        console.log("filter property thunk", res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
};
