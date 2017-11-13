import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import 'assets/svgSprite/svgInsert'
const rootEl = document.getElementById('container')
const loader = document.getElementById('loader')


render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
  () => {
    delete window.__INITIAL_STATE__
    loader.style.display = 'none'
  }
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
