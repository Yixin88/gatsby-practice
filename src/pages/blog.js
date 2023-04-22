import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as blogStyles from './blog.module.scss'
import Head from "../components/head"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query	{
      allContentfulBlogPost (
        sort: {
          publishedDate: DESC
      }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title='Blog' />
      <h1>This is a blog page</h1>
      <h2>Posts will show up here later on.</h2>
      <ol className={blogStyles.post}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
