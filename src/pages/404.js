import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Head from "../components/head"

export default function NotFound() {
  return (
    <Layout>
      <Head title='404' />
      <h1>Page not found</h1>
      <p><Link to='/'>Head Home</Link></p>
    </Layout>
  )
}
