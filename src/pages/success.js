import React from "react"
import Header from '../../static/assets/Header.png'
import Logo from '../../static/assets/Logo.png'
import Line from '../../static/assets/Line.png'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Success" />
    <div className="home-centered">
      <img src={Logo} className="logo" alt="Kings of Rumble" />
      <br />
      <img src={Line} className="line" alt="Divider" />
      <h2>Success.</h2>
      <p>Stay tuned for launch info.</p>
    </div>
  </Layout>
)

export default IndexPage
