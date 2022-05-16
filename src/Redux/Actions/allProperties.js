export const allProperties = (response) => {
	return {
		type: "ALL_PROPERTIES",
		payload: response,
	}
}


export const filterProperty = (response) => {
    console.log("action creator" , response)
	return {
		type: "FILTER_PROPERTY",
		payload: response,
	}
}
