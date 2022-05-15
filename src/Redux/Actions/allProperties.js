export const allProperties = (response) => {
	return {
		type: "ALL_PROPERTIES",
		payload: response,
	}
}


export const filterProperty = () => {
	return {
		type: "FILTER_PROPERTY",
		// payload: response,
	}
}
