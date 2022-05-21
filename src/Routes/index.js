import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../screen/Home"
import Forms from "../screen/Forms"
import FormsTwo from "../screen/FormsTwo"
import Details from "../screen/Details"
import Commercial from "../screen/Commercial"
import Plots from "../screen/Plots"





const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/form" element={<Forms />} />
				<Route path="/formsTwo" element={<FormsTwo />} />
				<Route path="/details" element={<Details />} />
				<Route path="/formsTwo/plot" element={<Plots />} />
				<Route path="/formsTwo/commercial" element={<Commercial />} />
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
