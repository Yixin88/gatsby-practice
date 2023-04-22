import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Head from "../components/head"

export default function Home() {
  return (
    <Layout >
      <Head title='Home' />
      <h1>Yixin Zhang</h1>
      <h2>Im a front end developer!</h2>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}
