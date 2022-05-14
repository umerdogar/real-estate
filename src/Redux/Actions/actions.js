import axios from "axios"

export const loginUser = (response) => {
	return {
		type: "LOGIN",
		payload: response,
	}
}

export const loginUserTWo = () => {
	// console.log("loginUserTWo")
	return (dispatch) => {
		console.log("GetUsers dispatch")
		axios
			.get(`http://52.220.87.52:8000/api/v1/property/popular/city`)
			.then((res) => {
				console.log("res")
				console.log(res.data)
				const persons = res.data
				dispatch(loginUser(persons))
			})
			.catch((error) => {
				console.log("error")
			})
	}
}
