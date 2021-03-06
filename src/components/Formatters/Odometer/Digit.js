import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants } from "../../../theming"
import themeProps from "./Digit.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const Digit = ({ isAnimating, digit, speed, size, single, variant }) => (
  <DigitWrapper isAnimating size={size} isEmpty={!digit} variant={variant}>
    <DigitContainer
      digit={digit}
      speed={speed}
      single={single}
      size={size}
      variant={variant}
    >
      {!digit ? "" : single ? digit : "0 1 2 3 4 5 6 7 8 9 0"}
    </DigitContainer>
  </DigitWrapper>
)

const DigitWrapper = styled.div`
  height: ${p => p.size}px;
  width: ${p => (p.isEmpty ? p.size / 2 : p.size / 1.5)}px;
  overflow: hidden;
  ${applyVariants(themeProps.wrapper.name)};
`

const DigitContainer = styled.div`
  font-size: ${p => p.size}px;
  ${p =>
    !p.single &&
    `
      animationname: slide${p.digit};
      transform: translateY(-${p.digit}em);
      transition: transform ${p.speed}ms cubic-bezier(0, 0, 0.2, 1);
      `};
  ${applyVariants(themeProps.container.name)};
`

Digit.propTypes = {
  digit: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  isAnimating: PropTypes.bool,
  single: PropTypes.bool
}
Digit.themeProps = themeProps
Digit.createVariants = componentCreateFactory(Digit)

export default Digit
