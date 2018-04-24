/**
 * @class Button
 */
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  font,
  color,
  themify
} from "@staccx/theme"
const tinycolor = require("tinycolor2")

export const BUTTON = "Button"
const Style = css`
  background-color: ${color.primary()};
  color: ${p =>
    tinycolor
      .mostReadable(color.primary(p), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()};
  border-width: 0;
  border-radius: ${borderRadius()};
  padding: ${spacing.tiny()} ${spacing.medium()};
  cursor: pointer;
  min-height: ${targetSize.normal};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: ${font("base")};
  font-family: ${fontFamily.body()};
  line-height: 32px;
  font-weight: 600;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: ${spacing.small()};
  margin-bottom: ${spacing.small()};
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

  &:last-child,
  &:last-of-type {
    margin-right: 0;
  }

  &:last-child:first-child {
    margin-bottom: 0;
  }

  ${themify(BUTTON)};
`
const Button = styled.button`
  ${Style};
`

const defaultProps = {
  onClick: null,
  to: "#",
  className: ""
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

/** @component */
export default Button
