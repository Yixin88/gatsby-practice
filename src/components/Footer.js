import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <footer>
        <p>Created by {data.site.siteMetadata.author}, © 2023</p>
      </footer>
    </div>
  )
}
