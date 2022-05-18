import axios from "axios"
import { popularCity } from "../Actions/popularCity"
import { plotsData , commercialData } from "../Actions/allProperties"

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

export const plotsDataFetch = () => {
	// console.log("loginUserTWo")
	return (dispatch) => {
		// console.log("GetUsers dispatch");
		axios
			.get(`http://52.220.87.52:8000/api/v1/property/plot`)
			.then((res) => {
				dispatch(plotsData(res.data))
				console.log("Get plots city", res.data)
			})
			.catch((error) => {
				console.log("error")
			})
	}
}

export const commercialDataFetch = () => {
	// console.log("loginUserTWo")
	return (dispatch) => {
		// console.log("GetUsers dispatch");
		axios
			.get(`http://52.220.87.52:8000/api/v1/property/commercial`)
			.then((res) => {
				dispatch(commercialData(res.data))
				console.log("Get commercial data", res.data)
			})
			.catch((error) => {
				console.log("error")
			})
	}
}