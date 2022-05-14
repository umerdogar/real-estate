import axios from "axios";
import {LOGIN} from "../Actions/actions";


export const loginUser = () => {
    console.log("GetUsers");
    return dispatch => {
        // console.log("http://192.168.10.9:8000/api/v1/property/popular/city");
        axios.get(`http://192.168.10.9:8000/api/v1/property/popular/city`)
        .then(res => {
            console.log("res" , res)
            const persons = res.data;
            dispatch({
                type: LOGIN,
                payload: persons
            });
        })
    };
};