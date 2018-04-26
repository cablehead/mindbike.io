import React from 'react'

import { Head, Router, Link } from 'react-static'
import Routes from 'react-static-routes'

import {global} from 'freestyler'
import CssResetEricMeyer from 'freestyler/lib/globals/CssResetEricMeyer'

import WebFont from 'webfontloader';


import { hot } from 'react-hot-loader'


WebFont.load({
  google: {
    families: ['Source Code Pro:300,400,700']
  }
})


const Global = global({
  'body': {
    backgroundColor: 'red',
    fontFamily: "'Source Code Pro', monospace",
  },
})


const App = () => (
  <Router>
    <div>
      <CssResetEricMeyer />
      <Global />
      <Head title="mindbike.io">
      </Head>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
