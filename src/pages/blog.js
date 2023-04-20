import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

export default function Blog() {
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
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
