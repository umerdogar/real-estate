export const PageRefresherAction = (response) => {
	console.log(response, "response in PageRefresherAction")
	return {
		type: "Page_Refresher",
		payload: response,
	}
}
