export const allProperties = (response) => {
	return {
		type: "ALL_PROPERTIES",
		payload: response,
	}
}

export const filterProperty = (response, onDone) => {
	return {
		type: "FILTER_PROPERTY",
		payload: [response, onDone],
	}
}

export const plotsData = (response) => {
	return {
		type: "PLOTS_DATA",
		payload: response,
	}
}

export const commercialData = (response) => {
	return {
		type: "COMMERCIAL_DATA",
		payload: response,
	}
}

export const propertyDetail = (response) => {
	return {
		type: "PROPERTY_DETAIL",
		payload: response,
	}
}
