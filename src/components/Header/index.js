import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '75%',
        padding: '1.45rem 1.0875rem',
        borderBottom: '2px solid #ccc',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/profile"
          style={{
            color: 'LightSkyBlue',
            textDecoration: 'none',
            fontSize: 'x-large',
          }}
        >
          Naresh Ganji
    </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}><Link style={{ color: 'grey', textDecoration: 'none', fontSize: 'medium' }} to="/profile/">Profile</Link></li>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}><Link style={{ color: 'black', textDecoration: 'none', fontSize: 'medium' }} to="/projects/">Projects</Link></li>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}><Link style={{ color: 'black', textDecoration: 'none', fontSize: 'medium' }} to="/blog/">Blog</Link></li>
        </ul>
      </h1>
    </div >
  </div >
)

export default Header
