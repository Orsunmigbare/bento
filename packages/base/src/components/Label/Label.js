/**
 * @class Label
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Label = ({ className, children, ...rest }) => (
  <LabelElement className={className}>{children}</LabelElement>
)

const LabelElement = styled.label`
  font-weight: bold;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.font.size.base};
  line-height: 1.2;
  padding-bottom: ${p => p.theme.spacing.tiny};
  display: block;
  position: absolute;
  top: ${p => p.theme.spacing.small};
  left: ${p => p.theme.spacing.medium};
`

Label.defaultProps = {
  className: ""
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string
}

/** @component */
export default Label
