import axios from "axios";


export const loginUser = (response) => {
	return {
		type: "LOGIN",
		payload: response,
	}
}

// export const loginUserTWo = () => {
//     return dispatch => {
//         console.log("GetUsers dispatch");
//         axios.get(`localhost:8000/api/v1/property`)
//         .then(res => {
//             console.log("res" , res)
//             const persons = res.data;
//                 dispatch(loginUser(persons));
    
//         })
//     };  
// };