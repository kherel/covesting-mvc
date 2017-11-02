import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import reducer from 'rootReducer'
import error from 'store/middleware/error'
import backendApi from 'store/middleware/backendApi'

const enhancer = applyMiddleware(backendApi, error)

const createStore = (initialState = {}) => reduxCreateStore(reducer, initialState, enhancer)

export default createStore
