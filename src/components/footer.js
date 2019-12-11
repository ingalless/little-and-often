import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <footer
      style={{
        textAlign: "right",
        padding: "0 6px",
        fontSize: "smaller",
        height: "50px",
      }}
    >
      <span>By {author} | </span>
      <a href={`https://twitter.com/${social.twitter}`} target="_blank">
        Twitter
      </a>
      {" | "}
      <a href={`https://github.com/${social.github}`} target="_blank">
        Github
      </a>
      {" | "}
      <a
        href={`https://uk.linkedin.com/in/jonathan-ingall-393305124`}
        target="_blank"
      >
        LinkedIn
      </a>
    </footer>
  )
}
