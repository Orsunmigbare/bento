import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const UploadIcon = styled.svg`
  width: 12px;
  transition: fill 0.2s ease;
  fill: currentColor;
`

const Upload = ({ className }) => (
  <UploadIcon className={className} viewBox="0 0 24 24">
    <path d="M9 .6l-.72.68-7 7 1.44 1.44L8 4.44V21h2V4.44l5.28 5.28 1.44-1.44-7-7L9 .6zM0 23v2h18v-2H0z" />
  </UploadIcon>
)

Upload.propTypes = {
  /**
   * This is the selection of the class that styles the success component
   */
  className: PropTypes.string
}

export default Upload
