import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Head from "../components/head"

export default function contact() {
  return (
      <Layout>
        <Head title='Contact' />
        <h1>Contact Page</h1>
        <h2>This is the contact page</h2>
        <a href="https://www.twitter.com" target='_blank'>Twitter</a>
      </Layout>
  )
}
