import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import RootReducers from './reducers'

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)))