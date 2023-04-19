import React from 'react'
import { Link } from 'gatsby'
import * as headerStyle from './header.module.scss'

export default function Header() {
  return (
    <header className={headerStyle.header}>
      <h1><Link className={headerStyle.title} to='/'>Gatsby App</Link></h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li><Link activeClassName={headerStyle.navList__active} to='/'>Home Page</Link></li>
          <li><Link activeClassName={headerStyle.navList__active} to='/contact'>Contact Page</Link></li>
          <li><Link activeClassName={headerStyle.navList__active} to='/blog'>Blog Page</Link></li>
          <li><Link activeClassName={headerStyle.navList__active} to='/about'>About Page</Link></li>
        </ul>
      </nav>
    </header>
  )
}
