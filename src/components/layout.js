/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          background: '#000000',
          color: '#ffffff',
          minHeight: '100vh',
          textAlign:'center'
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, All Rights Reserved.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
