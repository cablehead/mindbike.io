import React from 'react'

import { Head, Router, Link } from 'react-static'
import Routes from 'react-static-routes'

import { global, rule } from 'freestyler'
import { jsxstyle } from 'freestyler/lib/jsxstyle'
import CssResetEricMeyer from 'freestyler/lib/globals/CssResetEricMeyer'

import { hot } from 'react-hot-loader'

import bike from '../images/bike.svg'


const Global = global({
  'body, a': {
    fontFamily: "Inconsolata, monospace",
    color: '#777',
  },
  'a': {
    textDecoration: 'none',
  },
  'a:hover': {
    color: '#333',
  },
  '.nav-active': {
    textDecoration: 'underline',
  },
})


const Navlink = (props) => <Link {...props} activeClassName="nav-active"/>


const Nav = () => (
  <div style={{ margin: '50px auto', maxWidth:'800px' }}>
  <div style={{ margin: '0 1rem' }}>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }}>
    <div>
      <Link to="/">
      <img style={{ margin:0, width: '150px' }} src={ bike } />
      </Link>
    </div>
    <div className={rule({
      alignSelf: 'flex-end',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      '& div': {marl: '15px'},
    })}>
      <div><Navlink to="/writing">Writing</Navlink></div>
      <div><Navlink to="/contact">Contact</Navlink></div>
    </div>
  </div>
  </div>
  </div>
  )


const App = () => (
  <Router>
    <div>
      <CssResetEricMeyer />
      <Global />
      <Head title="mindbike.io" />
      <Nav />
      <div>
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
