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
    <h1>mindbike AWS consulting</h1>
    <p>
    <a href="mailto:contact@mindbike.io?Subject=AWS Services" target="_top">contact us</a>
    </p>
  </div>


  </div>
  </div>
  </div>

  <div style={{ margin: '0px auto', maxWidth:'600px' }}>
  <div style={{ margin: '0 1rem' }}>

  <div>
  <p>
  Amazon Web Services (AWS) is amazingly powerful. Its broad array of services
  can meet almost any need, rapidly and robustly.
  </p>
  <p>
  However, the myriad of options available can also be daunting.
  </p>
  <p style={{ textAlign: 'center' }}>
  <i>
  EC2, ECS, RDS, EFS, VPC, EBS, ELB, Route 53, ALB, S3, CloudFront, ACM, EKS,
  ECR ...
  </i>
  </p>
  <p>
  mindbike AWS consulting can:
  </p>

  <ul>
  <li>help you navigate AWS offerings</li>
  <li>identify the best solutions for your needs and budget</li>
  <li>
  launch and configure your custom stack according to best practices so it’ll
  run robustly with minimal ongoing maintenance
  </li>
  <li>provide training to help empower your team</li>
  </ul>

  <p style={{ textAlign: 'center' }}>
    <a href="mailto:contact@mindbike.io?Subject=AWS Services" target="_top">contact us</a>
    </p>

  </div>
  </div>
  </div>

  </div>
))
