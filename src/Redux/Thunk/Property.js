import axios from "axios";
import { allProperties , filterProperty } from "../Actions/allProperties";

export const allPropertiesList = () => {
  // console.log("loginUserTWo")
  return (dispatch) => {
    console.log("property dispatch");
    axios
      .get(`http://52.220.87.52:8000/api/v1/property`)
      .then((res) => {
        dispatch(allProperties(res.data));
        console.log("Get all property thunk" , res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

export const filterSingleProperty = (data) => {
    // console.log("loginUserTWo")
    return (dispatch) => {
      console.log("property filter");
      axios
        .post(`http://52.220.87.52:8000/api/v1/property/filter` , data)
        .then((res) => {
          dispatch(filterProperty(res.data));
          console.log("filter property thunk" , res.data);
        })
        .catch((error) => {
          console.log("error");
        });
    };
  };
  
