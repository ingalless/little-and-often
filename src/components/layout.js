import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Nav from "./nav"
import Footer from "./footer"

export default function(props) {
  const { location, title, children } = props
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
            fontWeight: 100,
            letterSpacing: "1.3px",
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
      <div style={{ minHeight: "calc(100vh - 50px" }}>
        <Nav />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
        </div>

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
