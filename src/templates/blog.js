import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


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
    }
  }
`


export default function Blog(props) {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
    </Layout>
  )
}
