import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout>
      <h1>About page</h1>
      <p>This is the about page</p>
      <Link to='/contact'>Contact Me</Link>
    </Layout>
  )
}
