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


export const plotsData = (response) => {
    console.log("action creator" , response)
	return {
		type: "PLOTS_DATA",
		payload: response,
	}
}

export const commercialData = (response) => {
    console.log("action creator" , response)
	return {
		type: "COMMERCIAL_DATA",
		payload: response,
	}
}