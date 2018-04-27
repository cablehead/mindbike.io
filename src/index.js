import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
export default App


if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  let WebFont = require('webfontloader')

  WebFont.load({
    google: {
      families: ['Source Code Pro:300,400,700']
    }
  })

  render(App)
}
