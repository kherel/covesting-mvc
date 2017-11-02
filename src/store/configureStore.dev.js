import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from 'rootReducer'
import error from 'middleware/error'
import backendApi from 'middleware/backendApi'

// import createLogger from 'redux-logger';

let store

const createStore = (initialState = {}) => {
  if (!store) {
    const enhancer = composeWithDevTools(applyMiddleware(backendApi, error))

    store = reduxCreateStore(reducer, initialState, enhancer)
  }

  if (module.hot) {
    module.hot.accept('./', () => {
      const nextRootReducer = require('./rootReducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default createStore
