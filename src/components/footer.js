import React from "react"

import { rhythm } from "../utils/typography"

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: "right" }}>
          <a
            href={`https://github.com/jamzi/devhealth`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
        </div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    )
  }
}

export default Footer
