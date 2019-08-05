import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  color,
  borderRadius,
  spacing,
  targetSize,
  font,
  fontFamily,
  fontWeight,
  applyVariants
} from "../../theming"
import { themePropTypes, commonPropTypes } from "../../constants/themeContants"

const tProps = {
  button: {
    name: "Button",
    description: "Button styles",
    type: themePropTypes.style
  }
}

const ButtonComp = styled.button`
  background-color: ${color.primary};
  color: ${color.white};
  border-width: 0;
  border-radius: ${borderRadius};
  padding: ${spacing.tiny} ${spacing.medium};
  cursor: pointer;
  min-height: ${targetSize.normal};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: ${font.base};
  font-family: ${fontFamily.body};
  line-height: 32px;
  font-weight: ${fontWeight.bold};
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.2s ease;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${color.primary};
    color: ${color.white};
  }

  ${applyVariants(tProps.button.name)};
`
/**
 * Button component. Use to click stuff
 */
const Button = props => <ButtonComp {...props} />

const defaultProps = {
  children: "button",
  onClick: null
}

const propTypes = {
  /**
   * The children of the lamb
   */
  children: commonPropTypes.children.isRequired,
  /**
   * Click callback. Why else have a button?
   * @export
   */
  onClick: PropTypes.func
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes
Button.themeProps = tProps

export default Button
