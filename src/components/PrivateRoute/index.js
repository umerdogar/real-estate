import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useNavigate,
	Navigate,
} from "react-router-dom"

// function PrivateRoute( {token,children} ) {
//     let navigate = useNavigate();
//   return token ||localStorage.getItem("token") ? children : (navigate("/") );
// }

const PrivateRoute = ({ children }) => {
	if (!localStorage.getItem("token")) {
		return <Navigate to="/" replace />
	}
	return children
}

export default PrivateRoute
