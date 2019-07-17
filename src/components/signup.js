import React, { useState } from "react"
import Styled from "styled-components"

import "./signup.css"

function Signup() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")

  const handleSetFirstName = e => {
    setFirstName(e.target.value)
  }

  const handleSetEmail = e => {
    setEmail(e.target.value)
  }

  return (
    <FormWrapper>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us3.list-manage.com/subscribe/post?u=79745f02c19b8655d43cedd27&amp;id=f13810e59c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll" />
          <h2>Join the Newsletter</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name </label>
            <input
              type="text"
              value={firstName}
              onChange={handleSetFirstName}
              name="FNAME"
              id="mce-FNAME"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              value={email}
              name="EMAIL"
              onChange={handleSetEmail}
              className="required email"
              id="mce-EMAIL"
              required
            />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_79745f02c19b8655d43cedd27_f13810e59c"
              tabIndex="-1"
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </form>
      </div>
    </FormWrapper>
  )
}

const FormWrapper = Styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
`

export default Signup
