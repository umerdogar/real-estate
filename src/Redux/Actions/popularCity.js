import axios from "axios"

export const popularCity = (response) => {
	return {
		type: "POPULAR_CITY",
		payload: response,
	}
}
