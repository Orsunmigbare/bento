import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { commonPropTypes, themePropTypes } from "../../constants/themeContants"
import { applyVariants } from "../../theming"

const Anchor = ({ children, className, ...restProps }) => (
  <AComponent className={className} {...restProps}>
    {children}
  </AComponent>
)

Anchor.themeProps = {
  a: {
    name: "Anchor",
    description: "HTML anchor link",
    type: themePropTypes.style
  }
}

export const AComponent = styled.a`
  text-decoration: none;
  color: currentColor;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: currentColor;
    outline: none;
  }

  ${applyVariants(Anchor.themeProps.anchor)};
`

Anchor.defaultProps = {
  className: ""
}

Anchor.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}

export default Anchor
