import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }} 
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Naresh Ganji
    </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}><Link style={{ color: 'white', textDecoration: 'none', fontSize: 'x-large' }} to="/">Profile</Link></li>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}><Link style={{ color: 'white', textDecoration: 'none', fontSize: 'x-large' }} to="/projects">Projects</Link></li>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}><Link style={{ color: 'white', textDecoration: 'none', fontSize: 'x-large' }} to="/blog">Blog</Link></li>
        </ul>
      </h1>
    </div >
  </div >
)

export default Header
