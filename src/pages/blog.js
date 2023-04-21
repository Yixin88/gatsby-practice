import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>This is a blog page</h1>
      <h2>Posts will show up here later on.</h2>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h2><Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
