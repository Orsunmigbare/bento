/**
 * @class Button
 */
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  fontWeight,
  font,
  color,
  themify,
  themeProps
} from "@staccx/theme"
const tinycolor = require("tinycolor2")

export const BUTTON = "Button"

const Button = styled.button`
  background-color: ${color.primary};
  color: ${p =>
    tinycolor
      .mostReadable(color.primary()(p), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()};
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
    background-color: ${p =>
      tinycolor(color.primary()(p))
        .darken(5)
        .toString()};
    color: ${p =>
      tinycolor
        .mostReadable(tinycolor(color.primary()(p)).darken(5), ["#fff"], {
          includeFallbackColors: true,
          level: "AA",
          size: "large"
        })
        .toString()};
  }

  ${themify(BUTTON)};
`

const defaultProps = {
  onClick: null,
  to: "#",
  className: ""
}

const propTypes = {
  children: themeProps.children.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

/** @component */
export default Button
