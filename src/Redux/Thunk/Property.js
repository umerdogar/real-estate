import axios from "axios"
import {
	allProperties,
	filterProperty,
	propertyDetail,
	allPropertiesOfDealer,
	addProperty,
	sellProperty,
	rentProperty,
	addImageUrl,
	favouriteProperty,
	favouritePropertyListing
} from "../Actions/allProperties"
import Notification from "../../components/notification"

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
		dispatch({ type: "START_LOADER" , payload:"Searching Properties..."});
		console.log("filter property data isngle", data)
		// /property/or-property-search
		axios
			.get(`http://52.77.156.101:8000/api/v1/property/or-property-search?${data}`)
			.then((res) => {
				console.log("res.data", res.data.data)
				dispatch(
					filterProperty(res.data, {
						onDone: () => {
							PageRerender()
						},
					})
				)
				dispatch({ type: "STOP_LOADER" })
				console.log("filter single property")
				navigate("/formsTwo")
			})
			.catch((error) => {
				console.log("error", error)
			})
	}
}
export const singlePropertyDetail = (id, navigate) => {
	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/property/${id}`)
			.then((res) => {
				dispatch(propertyDetail(res.data))
				navigate(`/details/${id}`)
			})
			.catch((error) => {
				console.log("error")
			})
	}
}

export const allPropertiesDealerList = () => {
	let token = localStorage.getItem("token")

	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/dealer/property`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				dispatch(allPropertiesOfDealer(res.data))
				console.log("all properties of dealer" , res.data)
			})
			.catch((error) => {
				console.log("error", error)
			})
	}
}



export const addNewProperty = (data , navigate) => {	
	let token = localStorage.getItem("token");

	return (dispatch) => {
		dispatch({ type: "START_LOADER" , payload:"Adding New Property..."});
			axios
				.post(`http://52.77.156.101:8000/api/v1/property`, data ,  { headers: {"Authorization" : `Bearer ${token}`} })
				.then((res) => {
					dispatch(
						addProperty(res.data)
					)
					console.log("success" , res)
					dispatch({ type: "STOP_LOADER"});
					navigate('/')
		            Notification("success" , "Property Successfully Added")
				})
				.catch((error) => {
					console.log("error" , error)
					dispatch({ type: "STOP_LOADER"});
		            Notification("error" ,error.response.data.msg)
				})
		}
	}


export const addImage = (data) => {
	return (dispatch) => {
		dispatch({ type: "START_LOADER", payload: "Adding Image..." })
		axios
			.post(`http://52.77.156.101:8000/api/v1/property/upload`, data)
			.then((res) => {
				dispatch(addImageUrl(res.data))
				console.log("success", res)
				dispatch({ type: "STOP_LOADER" })
			})
			.catch((error) => {
				console.log("error", error)
				dispatch({ type: "STOP_LOADER" })
			})
	}
}

	

		export const allSellProperties = () => {
			return (dispatch) => {
				axios
					.get(`http://52.77.156.101:8000/api/v1/property/sell`)
					.then((res) => {
						dispatch(sellProperty(res.data))
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

		export const favPropertyThunk = (id) => {	
			let token = localStorage.getItem("token");
		
			return (dispatch) => {
					axios
						.get(`http://52.77.156.101:8000/api/v1/property/fav-unfav/${id}`,  { headers: {"Authorization" : `Bearer ${token}`} })
						.then((res) => {
							dispatch(
								favouriteProperty(res.data)
							)
							console.log("success" , res)
							Notification("success" , res.data.msg)
						})
						.catch((res) => {
							Notification("error" , res.data.msg)
						})
				}
			}

			export const favPropertyListingThunk = () => {	
				let token = localStorage.getItem("token");
			
				return (dispatch) => {
						axios
							.get(`http://52.77.156.101:8000/api/v1/property/favorite`,  { headers: {"Authorization" : `Bearer ${token}`} })
							.then((res) => {
								dispatch(
									favouritePropertyListing(res.data)
								)
								console.log("success" , res)
								Notification("success" , "Favourite Properties")
							})
							.catch((error) => {
								console.log("error" , error)
								Notification("error" ,"error")
							})
					}
				}
	