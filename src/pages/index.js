import React from "react"
import Header from '../../static/assets/Header.png'
import Logo from '../../static/assets/Logo.png'
import Line from '../../static/assets/Line.png'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Kings of Rumble" />
    <div className="home-centered">
      <img src={Logo} className="logo" alt="Kings of Rumble" />
      <img src={Header} alt="NFT Boxing Club" />
      <img src={Line} className="line" alt="Divider" />
      <form name="Contact Form" method="POST" data-netlify="true" action="/success">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <input type="email" name="email" placeholder="your email" />
        </div>
        <button type="submit">Subscribe</button>
    </form>
    </div>
  </Layout>
)

export default IndexPage
