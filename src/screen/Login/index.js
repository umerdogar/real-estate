import React from 'react'
import { useState, useEffect } from "react";
import Input from "../../components/FromInput/Input"
import { useForm } from "react-hook-form";
import { connect } from "react-redux"
import { login } from '../../Redux/Actions/auth';
import { loginUser } from '../../Redux/Thunk/auth';
import { useNavigate, Link } from "react-router-dom"
import { InputAdornment } from '@material-ui/core';


const Login = ({login , loginUser , user}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



	let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    // login(dispatch, { username, password });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data)
    loginUser(data , navigate)
  };

  useEffect(() => {
  }, []);

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">LOGIN</h1>
        {/* <h3>Please Login to Continue</h3> */}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
                          // label={"email"}
                          type="text"
                          placeholder={"Email"}
                          name="email"
                          validation={{ required: true }}
                          error={errors.email}
                          register={register}
                          errorMessage={"Email is required"}
                          {...register("email", 
                        { 
                            required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })}
                        />
                          <Input
                          // label={"password"}
                          type="password"
                          placeholder={"password"}
                          name="password"
                          validation={{ required: true }}
                          error={errors.password}
                          register={register}
                          errorMessage={"Password Field is Empty"}
                        //   {...register("password", {
                        //     required: true,
                        //     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        // })}
                        />
          <button className="login-button">
            LOGIN
          </button>
          {user == "error" && <a className="login-error">Email or Password is Incorrect</a>}

          <a className="login-link">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className="login-link" href='/sign-up'>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};



const mapStateToProps = (state) => {
	let { user } = state.authReducer
	console.log("login reducer from comp for login", user)
	return {
    user
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (data , navigate) => dispatch(loginUser(data, navigate)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
