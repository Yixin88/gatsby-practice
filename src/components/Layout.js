import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

export default function Layout({children}) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
