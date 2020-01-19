import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import color from "color"

import { rhythm } from "../../utils/typography"
import Nav from "./../nav"
import Footer from "./../footer"

const primaryColor = color("#6a4c93")
const globalStyles = css`
  a {
    color: #6a4c93;
    text-decoration: underline;
    &:hover {
      color: ${primaryColor
        .darken(0.2)
        .hex()
        .toString()};
    }
  }
`

const BlogHeader = ({ title }) => (
  <h3
    style={{
      marginTop: 0,
      marginBottom: 0,
      fontWeight: 600,
      letterSpacing: -0.2,
    }}
  >
    <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
      to={`/`}
    >
      {title}
    </Link>
  </h3>
)

export default function(props) {
  const { location, title, children, container = false } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const isHome = location.pathname === rootPath

  return (
    <>
      <Global styles={globalStyles} />
      <div style={{ minHeight: "calc(100vh - 50px)" }}>
        <Nav />
        {!isHome && (
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: container ? rhythm(24) : "100%",
              padding: `${rhythm(3 / 4)}`,
            }}
          >
            <header>
              <BlogHeader title={title} />
            </header>
          </div>
        )}

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: container ? rhythm(24) : "100%",
            padding: `${rhythm(3 / 4)}`,
            minHeight: "calc(100vh - 300px - 50px)",
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}
