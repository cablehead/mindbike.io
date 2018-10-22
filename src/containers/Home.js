import React from 'react'
import { withSiteData } from 'react-static'
import { rule } from 'freestyler'


export default withSiteData(() => (
  <div>
  <div style={{ backgroundColor: '#0083bf', padding: '80px 0' }}>
  <div style={{ margin: '0 auto', maxWidth:'800px' }}>
  <div style={{ margin: '0 1rem' }}>

  <div className={rule({
    margin: 'auto',
    color: '#fafafa',
    width: '50%',
    textAlign: 'center',
    '& a': {
      color: '#fafafa',
      textDecoration: 'underline',
    },
    '& a:hover': {
      color: '#8DDBE0',
    },
    })}>
    <h1>mindbike consulting</h1>
    <p>
    <a href="mailto:contact@mindbike.io?Subject=AWS Services" target="_top">contact us</a>
    </p>
  </div>


  </div>
  </div>
  </div>


  </div>
))
