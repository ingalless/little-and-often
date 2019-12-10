import React from "react"
import { Link } from "gatsby"

export default function Nav(props) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "8px 16px",
      }}
    >
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}
