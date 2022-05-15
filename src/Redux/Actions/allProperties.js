import axios from "axios"

export const allProperties = (response) => {
	return {
		type: "ALL_PROPERTIES",
		payload: response,
	}
}
