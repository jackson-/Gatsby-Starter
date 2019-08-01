import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>A description for this place</h2>
      <p><Link to="/contact">Contact Me</Link></p>
    </div>
  )
}

export default IndexPage