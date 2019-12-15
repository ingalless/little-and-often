import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <SEO title="Home" />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
