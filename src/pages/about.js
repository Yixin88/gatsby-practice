import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Head from "../components/head"

export default function about() {
  return (
    <Layout>
      <Head title='About' />
      <h1>About page</h1>
      <p>This is the about page</p>
      <Link to='/contact'>Contact Me</Link>
    </Layout>
  )
}
