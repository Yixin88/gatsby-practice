import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as footerStyles from './footer.module.scss'

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
      <footer className={footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author}, © 2023</p>
      </footer>
    </div>
  )
}
