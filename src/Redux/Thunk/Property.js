import axios from "axios"
import { Navigate, NavigationType } from "react-router-dom"
import {
	allProperties,
	filterProperty,
	propertyDetail,
	allPropertiesOfDealer,
	addProperty,
	sellProperty,
	rentProperty,
} from "../Actions/allProperties"
import { startLoader , stopLoader } from "../Actions/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";

export const allPropertiesList = () => {
	return (dispatch) => {
		console.log("property dispatch")
		axios
			.get(`http://52.77.156.101:8000/api/v1/property`)
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
			.post(`http://52.77.156.101:8000/api/v1/property/filter`, data)
			.then((res) => {
				// dispatch(()=>{startLoader("hello")})
				dispatch(
					filterProperty(res.data, {
						onDone: () => {
							PageRerender()
						},
					})
				)
			
				navigate("/formsTwo")
				dispatch(()=>{stopLoader()})

			})
			.catch((error) => {
				console.log("error" , error)
			})
	}
}
export const singlePropertyDetail = (id, navigate) => {

	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/property/${id}`)
			.then((res) => {
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
			.get(`http://52.77.156.101:8000/api/v1/dealer/property`)
			.then((res) => {
				dispatch(allPropertiesOfDealer(res.data))
			})
			.catch((error) => {
				console.log("error" , error)
			})
	}
}



export const addNewProperty = (data) => {	
	let token = localStorage.getItem("token");

	return (dispatch) => {
			console.log("property new add" , data)
			axios
				.post(`http://52.77.156.101:8000/api/v1/property`, data ,  { headers: {"Authorization" : `Bearer ${token}`} })
				.then((res) => {
					// dispatch(
					// 	addProperty(res.data)
					// )
					console.log("success" , res)

	
				})
				.catch((error) => {
					console.log("error" , error)
				})
		}
	}


	export const addImage = (data) => {	
		// let token = localStorage.getItem("token");
	
		return (dispatch) => {
				console.log("image from thunk" , data)
				axios
					.post(`http://52.77.156.101:8000/api/v1/property/upload`, data )
					.then((res) => {
						// dispatch(
						// 	addProperty(res.data)
						// )
						console.log("success" , res)
	
		
					})
					.catch((error) => {
						console.log("error" , error)
					})
			}
		}


		export const allSellProperties = () => {
			return (dispatch) => {
				console.log("property for sell")
				axios
					.get(`http://52.77.156.101:8000/api/v1/property/sell`)
					.then((res) => {
						dispatch(sellProperty(res.data))
						console.log("Get all property thunk", res.data)
					})
					.catch((error) => {
						console.log("error" , error)
					})
			}
		}

		export const allRentProperties = () => {
			return (dispatch) => {
				console.log("property of rent")
				axios
					.get(`http://52.77.156.101:8000/api/v1/property/rent`)
					.then((res) => {
						dispatch(rentProperty(res.data))
						console.log("Get all rent property thunk", res.data)
					})
					.catch((error) => {
						console.log("error" , error)
					})
			}
		}