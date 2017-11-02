import React, { PureComponent } from 'react'
import { Router, match } from 'react-router'
import './common/style.scss'
import getRoutes from './routes'
import { Provider } from 'react-redux'
import history from 'history'
import createStore from 'store'
import prepareData from 'utils/prepareData'
import { closeMenu } from 'store/entities/navigation/actions'
// import {hashLinkScroll} from 'utils/hashLinkScroll'
const store = createStore(window.__INITIAL_STATE__)

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router
          history={history}
          key={Math.random()}
          onUpdate={() => {
            const state = store.getState()
            state.navigation.isMenuOpened && store.dispatch(closeMenu())
            window.scrollTo(0, 0)
          }}
        >
          {getRoutes(store)}
        </Router>
      </Provider>
    )
  }
}

function historyCb(location) {
  match({ location, routes: getRoutes(store) }, (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
      prepareData(store, renderProps)
    }
  })
}

history.listen(historyCb)

historyCb(window.location)

export default App
