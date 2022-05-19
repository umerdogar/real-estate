import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../screen/Home"
import Forms from "../screen/Forms"
import FormsTwo from "../screen/FormsTwo"
import Details from "../screen/Details"




const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/form" element={<Forms />} />
				<Route path="/formsTwo/:type" element={<FormsTwo />} />
				<Route path="/details" element={<Details />} />

			</Routes>
		</BrowserRouter>
	)
}

// const mapStateToProps = ({ User }) => {
//   return {
//     User,
//   };
// };

// const mapDispatchToProps = {

// };
export default Routing
