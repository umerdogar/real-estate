import axios from "axios"
import { popularCity } from "../Actions/popularCity"

export const popularCityStat = () => {
	// console.log("loginUserTWo")
	return (dispatch) => {
		// console.log("GetUsers dispatch");
		axios
			.get(`http://52.220.87.52:8000/api/v1/property/popular/city`)
			.then((res) => {
				dispatch(popularCity(res.data))
				// console.log("Get popular city", res.data)
			})
			.catch((error) => {
				console.log("error")
			})
	}
}
