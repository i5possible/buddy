import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
))
