import Home from "./screen/Home"
import Form from "./screen/Forms"
import "./App.css"
import Details from "./screen/Details"
import { Provider } from "react-redux"
import { applyMiddleware } from "redux"
import { legacy_createStore as createStore, compose } from "redux"
import ReduxThunk from "redux-thunk"
import RootReducers from "./Redux/Reducers"
import Routes from "../src/Routes"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {store , persistor} from './Redux/store';
import {PersistGate}  from 'redux-persist/integration/react';





function App() {
	// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	// const store = createStore(RootReducers, composeEnhancers(applyMiddleware()))




	// const persistConfig = {
	// 	key: 'root',
	// 	storage: storage,
	// 	whitelist: ['RootReducers'] // which reducer want to store
	//   };
	
	//   const persistingReducer = persistReducer(persistConfig, RootReducers);
	//   const store = createStore(persistingReducer, applyMiddleware(ReduxThunk))
	//   const persistor = persistStore(store);
	//   console.log("persistor" , persistor);
	//   console.log("store" , store)

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
			<div className="App">
				<Routes />
			</div>
			</PersistGate>
			
			
		</Provider>
	)
}

export default App
