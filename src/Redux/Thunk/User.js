import axios from "axios";
import {LOGIN} from "../Actions/actions";


export const loginUser = () => {
    console.log("GetUsers");
    return dispatch => {
        console.log("GetUsers dispatch");
        axios.get(`localhost:8000/api/v1/property`)
        .then(res => {
            console.log("res" , res)
            const persons = res.data;
            dispatch({
                type: "LOGIN",
                users: persons
            });
        })
    };
};