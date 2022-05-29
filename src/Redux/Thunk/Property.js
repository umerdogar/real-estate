import axios from "axios"
import { Navigate, NavigationType } from "react-router-dom"
import {
	allProperties,
	filterProperty,
	propertyDetail,
	allPropertiesOfDealer,
} from "../Actions/allProperties"
import { startLoader , stopLoader } from "../Actions/auth"
// import { useNavigate } from "react-router-dom";

export const allPropertiesList = () => {
	// console.log("loginUserTWo")
	return (dispatch) => {
		console.log("property dispatch")
		axios
			.get(`http://52.220.87.52:8000/api/v1/property`)
			.then((res) => {
				dispatch(allProperties(res.data))
				console.log("Get all property thunk", res.data)
			})
			.catch((error) => {
				console.log("error")
			})
	}
}

export const filterSingleProperty = (data, navigate, PageRerender) => {	
return (dispatch) => {
		console.log("property filter")
		axios
			.post(`http://52.220.87.52:8000/api/v1/property/filter`, data)
			.then((res) => {
				console.log(res, " filterSingleProperty")
				// dispatch(startLoader("hello"))

				
				dispatch(
					filterProperty(res.data, {
						onDone: () => {
							PageRerender()
						},
					})
				)
				// dispatch(stopLoader())
				navigate("/formsTwo")
			})
			.catch((error) => {
				console.log("error" , error)
			})
	}
}
export const singlePropertyDetail = (id, navigate) => {

	return (dispatch) => {
		axios
			.get(`http://52.220.87.52:8000/api/v1/property/${id}`)
			.then((res) => {
				console.log("property detail of single property", res)

				dispatch(propertyDetail(res.data))
				navigate("/details")
			})
			.catch((error) => {
				console.log("error")
			})
	}
}


export const allPropertiesDealerList = () => {
	return (dispatch) => {
		axios
			.get(`http://52.220.87.52:8000/api/v1/dealer/property`)
			.then((res) => {
				dispatch(allPropertiesOfDealer(res.data))
			})
			.catch((error) => {
				console.log("error" , error)
			})
	}
}