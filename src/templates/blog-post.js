import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styled from "@emotion/styled"

const Excerpt = styled.section`
  color: #555;
  ${scale(-1 / 5)};
  text-align: center;
  padding: ${rhythm(1)} ${rhythm(2)};
  @media screen and (max-width: 600px) {
    padding: ${rhythm(1)} 0;
  }
`

const PostTitle = styled.h1`
  margintop: ${rhythm(1)};
  marginbottom: 0;
`

const PostDate = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(1)};
`

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const PostNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle} container={true}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostDate>{post.frontmatter.date}</PostDate>
          </header>
          <Excerpt>{post.frontmatter.description}</Excerpt>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Divider />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <PostNavigation>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </PostNavigation>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
