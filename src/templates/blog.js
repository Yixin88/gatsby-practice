import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head"
// export const query = graphql`
//   query (
//     $slug: String!
//   ) {
//     markdownRemark (
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }
//     ) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq : $slug}) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        raw
      }
    }
  }
`


export default function Blog(props) {
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <p>{props.data.contentfulBlogPost.body.raw}</p>
    </Layout>
  )
}
