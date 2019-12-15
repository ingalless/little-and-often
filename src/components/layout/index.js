import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import color from "color"

import { rhythm, scale } from "../../utils/typography"
import Nav from "./../nav"
import Footer from "./../footer"

const primaryColor = color("#6a4c93")
const globalStyles = css`
  a {
    color: #6a4c93;
    &:hover: {
      color: ${primaryColor
        .darken(0.2)
        .hex()
        .toString()};
    }
  }
`

export default function(props) {
  const { location, title, children, container = false } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1
          style={{
            ...scale(2),
            marginTop: rhythm(1.5),
            marginBottom: 0,
            letterSpacing: "1.3px",
            fontWeight: 100,
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
        </h1>
        <h2
          style={{
            marginBottom: 0,
            marginTop: rhythm(-0.2),
            fontWeight: 100,
            color: "#666",
          }}
        >
          by Ingalless
        </h2>
      </>
    )
  } else {
    header = (
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
  }
  return (
    <>
      <Global styles={globalStyles} />
      <div style={{ minHeight: "calc(100vh - 50px)" }}>
        <Nav />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: container ? rhythm(24) : "100%",
            padding: `${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
        </div>

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
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
