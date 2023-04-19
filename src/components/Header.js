import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header>
      <h1>Gatsby App</h1>
      <nav style={{display: 'flex', listStyle: 'none', gap: '2rem'}}>
        <li><Link to='/contact'>Contact Page</Link></li>
        <li><Link to='/blog'>Blog Page</Link></li>
        <li><Link to='/about'>About Page</Link></li>
      </nav>
    </header>
  )
}
