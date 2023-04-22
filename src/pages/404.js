import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

export default function NotFound() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p><Link to='/'>Head Home</Link></p>
    </Layout>
  )
}
