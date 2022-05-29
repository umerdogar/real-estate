export const login = (data) => {
	return {
		type: "LOGIN",
		payload: data,
	}
}

export const signUp = (data) => {
	return {
		type: "SIGN_UP",
		payload: data,
	}
}

export const startLoader = (data) => {
	return {
	  type: 'START_LOADER',
	  payload: data
	}
  };
  
  export const stopLoader = () => {
	return {
	  type: 'STOP_LOADER'
	}
  };