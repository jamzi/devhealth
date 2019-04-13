import React from "react"
import { StaticQuery, graphql } from "gatsby"
import profilePic from "../../content/assets/profile-pic.png"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2),
            }}
          >
            <img
              src={profilePic}
              alt={`Janez Cadez`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
                borderRadius: "50%",
              }}
            />
            <p>
              <strong>Refactor your life</strong>. Blog about work-life balance,
              overcoming anxiety and boosting productivity. Written by{" "}
              <strong>{author}</strong>. Proofread by{" "}
              <strong>Tina Petan</strong>.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
