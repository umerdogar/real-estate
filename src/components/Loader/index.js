import React from 'react'
import { connect } from "react-redux";
import authReducer from '../../Redux/Reducers/authReducer';
import "./loader.css"

const AppLoader = ({loadingMessage, loader}) => {
  return (
    <div hidden={!loader} className="loader-container">
    <div className="loader-content">
     <img src="https://akru-images.s3.us-east-2.amazonaws.com/compressed/logo.png" alt="logo"/>
     <div>
      {/* <i style={{ color: "white" }} className="fa fa-spinner fa-spin fa-1x fa-fw"></i> */}
    {/* {loadingMessage && (
        <p className="loading-text" style={{ color: "white", fontSize: "16px", marginTop: "20px" }}>this is loader</p>
    )} */}
    </div>
    </div>
    {/* <div class="loader"></div> */}
  </div>

  )
}

const mapStateToProps = (state) => {
    console.log("loader" , state.authReducer.loading)
    const {loading} = state.authReducer.loading
    return {
        loader: loading,
        // loadingMessage: authReducer.loadingMessage,
    }
  }

export default connect(mapStateToProps, null)(AppLoader);
