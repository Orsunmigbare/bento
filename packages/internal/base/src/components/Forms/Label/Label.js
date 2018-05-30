/**
 * @class Label
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  themify,
  font,
  spacing,
  fontFamily,
  fontWeight,
  themeProps
} from "@staccx/theme"

export const LABEL = "LABEL"

const Label = ({ className, children, ...rest }) => (
  <LabelElement className={className} {...rest}>
    {children}
  </LabelElement>
)

const LabelElement = styled.label`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  line-height: 1.2;
  padding-bottom: ${spacing.tiny};
  display: block;
  ${themify(LABEL)};
`

Label.defaultProps = {
  className: ""
}

Label.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

/** @component */
export default Label
