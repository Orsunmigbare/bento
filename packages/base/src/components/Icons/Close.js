import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// const CloseIcon = styled.svg`
//   width: 12px;
//   transition: fill 0.2s ease;
// `

const Close = ({ className }) => (
  <svg viewBox="0 0 24 24" width={12}>
    <path d="M11.96 8a.54.54 0 0 1 .08 0L19.8.17a.54.54 0 0 1 .77 0l3.27 3.3c.21.22.21.56 0 .78L16.18 12l7.66 7.76c.2.21.2.56 0 .78l-3.27 3.3a.54.54 0 0 1-.77 0L12.04 16a.54.54 0 0 1-.08 0L4.2 23.85a.54.54 0 0 1-.77 0L.16 20.54a.56.56 0 0 1 0-.78L7.82 12 .16 4.25a.56.56 0 0 1 0-.78L3.43.16a.54.54 0 0 1 .77 0L11.96 8z" />
  </svg>
)

Close.propTypes = { className: PropTypes.string }

export default Close
