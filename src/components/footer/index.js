import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const StyledFooter = styled.footer`
  padding: 0 6px;
  font-size: smaller;
  height: 50px;
  text-align: center;
`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)
  const { author, social } = data.site.siteMetadata
  return (
    <StyledFooter>
      <span>By {author} | </span>
      <a
        href={`https://twitter.com/${social.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      {" | "}
      <a
        href={`https://github.com/${social.github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      {" | "}
      <a
        href={`https://uk.linkedin.com/in/jonathan-ingall-393305124`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </StyledFooter>
  )
}
