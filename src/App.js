import Home from "./components/Home"
import Form from "./components/Forms"
import "./App.css"
import Details from "./screen/Details"
import { Provider } from "react-redux"
import { applyMiddleware } from "redux"
import { legacy_createStore as createStore } from "redux"
import ReduxThunk from "redux-thunk"
import RootReducers from "./Redux"

function App() {
	const store = createStore(RootReducers, {}, applyMiddleware(ReduxThunk))
	return (
		<Provider store={store}>
			<div className="App">
				{/* <Home/> */}
				<Details />
			</div>
		</Provider>
	)
}

export default App
