import axios from "axios"
import { login , signUp} from "../Actions/auth"


export const loginUser = (data, navigate) => {
	console.log("data input property", data)
	console.log("data input property", navigate)

	

	return (dispatch) => {
		console.log("property filter")
		axios
			.post(`http://52.220.87.52:8000/api/v1/user/login`, data)
			.then((res) => {
				console.log(" login response....??>>>??>>" ,res)
				dispatch(
					login(res.data),
					localStorage.setItem("token" , res.data.token)
				)
				navigate("/home")
			})
			.catch((error) => {
				console.log(" errorr response" , error.message)
				dispatch(
					login("error")
				)
			})
	}
}

export const signUpUser = (data, navigate) => {
	console.log("data input signup", data)
	

	return (dispatch) => {
		console.log("property filter")
		axios
			.post(`http://52.220.87.52:8000/api/v1/user/signup`, data)
			.then((res) => {
				console.log(res, " signup")
				dispatch(
					signUp(res.data)
				)
				navigate("/login")
			})
			.catch((error) => {
				console.log("error" , error)
			})
	}
}