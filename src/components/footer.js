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
      }}
    >
      <span>Authored by {author} | </span>
      <a href={`https://twitter.com/${social.twitter}`} target="_blank">
        Twitter
      </a>
      {" | "}
      <a href={`https://github.com/${social.github}`} target="_blank">
        Github
      </a>
    </footer>
  )
}
