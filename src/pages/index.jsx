import { Link } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = (location) => {
  return (
    <Layout location={location}>
      <main className="index">
        <div className="box">
          The Training Center Operates an Apprenticeship Program for
          CWA members and is an Approved Fiber Optic Association
          (FOA) School offering Cabling and Fiber Optic classes
          designed for individual groups
        </div>

        <div className="link-container">
          <Link className="link" to="/program" > More Information </Link>
        </div>
        <br />
        <StaticImage src="../images/png/team.jpeg" alt="the team" />
      </main>
    </Layout>
  )
}

export default IndexPage
