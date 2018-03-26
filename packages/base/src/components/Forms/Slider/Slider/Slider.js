import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import withTheme from "../../../../utils/withTheme"

const Slider = ({
  disabled,
  max,
  min,
  name,
  onChange,
  percentage,
  step,
  value,
  variantStyle,
  themeVariant,
  ignoreBase,
  ...restProps
}) => {
  if (percentage === undefined) {
    console.warn(
      "Slider component needs to be told what percentage it is by its parent in order to show it’s progress visually in webkit browsers."
    )
  }
  return (
    <SliderInput
      percentage={percentage}
      variantStyle={variantStyle}
      themeVariant={themeVariant}
      ignoreBase={ignoreBase}
    >
      <input
        type="range"
        name={name}
        value={value && value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        {...restProps}
      />
    </SliderInput>
  )
}

const SliderThumbStyle = css`
  -webkit-appearance: none;
  border: 2px solid ${p => p.theme.globals.color.line};
  height: 20px;
  width: 20px;
  transform: translateY(-2px);
  border-radius: 50%;
  background-color: ${p => p.theme.globals.color.white};
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.globals.color.bg};
    border-color: ${p => p.theme.globals.color.disabled};
  }
  &:active,
  &:focus {
    border-color: ${p => p.theme.globals.color.white};
    background-color: ${p => p.theme.globals.color.secondary};
  }
`

const SliderHiddenTrackStyle = css`
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  color: transparent;
`

const SliderTrackStyle = css`
  width: 100%;
  height: 9px;
  cursor: pointer;
  border-radius: 4.5px;
  color: transparent;
  background-color: ${p => p.theme.globals.color.line};
`

const SliderInput = styled.div`
  position: relative;
  font-weight: bold;

  /* Make the default slider invisible */
  > input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    background-color: transparent;
    margin: 0;
    background-clip: content-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-radius: 6px;
    -webkit-tap-highlight-color: transparent;
  }

  > input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  > input[type=range]::-ms-track {
    ${SliderHiddenTrackStyle}
  }

  > input[type=range]::-moz-range-track {
    ${SliderHiddenTrackStyle}
  }

  > input[type=range]:focus {
    outline: none;
  }

  > input[type=range]:active {
    outline: none;
  }

  >input[type=range]:-moz-focusring,
  >input[type=range]:focusring {
    outline: 1px solid white;
    outline-offset: -1px;
  }

  /* Style the thumb */
  > input[type=range]::-webkit-slider-thumb {
    ${SliderThumbStyle}
    margin-top: -3px;
  }

  > input[type=range]::-moz-range-thumb {
    ${SliderThumbStyle}
  }

  > input[type=range]::-ms-thumb {
    ${SliderThumbStyle}
  }

  /* Style the track for webkit */
  input[type=range]::-webkit-slider-runnable-track {
    ${SliderTrackStyle}
    background: linear-gradient(90deg,
      ${p => p.theme.globals.color.primary} 0%, ${p =>
  p.theme.globals.color.primary}
      ${p => p.percentage}%, ${p => p.theme.globals.color.line}
      ${p => p.percentage + 0.0}%,
      ${p => p.theme.globals.color.line} 100%) 0 100% no-repeat content-box;
  }


  input[type=range]:focus::-webkit-slider-runnable-track {
  }

  /* Style the track for mozilla */
  input[type=range]::-moz-range-track {
    ${SliderTrackStyle}
  }

  input[type=range]::-moz-range-progress {
    background-color: ${p => p.theme.globals.color.primary};
    height: 9px;
    border-radius: 4.5px;
  }

  /* Style the track for MS */
  input[type=range]::-ms-track {
    ${SliderTrackStyle}
  }

  input[type=range]::-ms-fill-lower {
    background-color: ${p => p.theme.globals.color.primary};
  }

  input[type=range]:focus::-ms-fill-lower {
    background-color: ${p => p.theme.globals.color.white};
  }

  input[type=range]::-ms-fill-upper {
    background-color: ${p => p.theme.globals.color.white};
  }

  input[type=range]:focus::-ms-fill-upper {
    background-color: ${p => p.theme.globals.color.white};
  }
  ${props => props.variantStyle(props)};
`

Slider.defaultProps = {
  value: undefined,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  variantStyle: null,
  themeVariant: null,
  ignoreBase: null
}

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animationTicks: PropTypes.number,
  disabled: PropTypes.bool,
  percentage: PropTypes.number,
  variantStyle: PropTypes.func,
  themeVariant: PropTypes.string,
  ignoreBase: PropTypes.func
}

export default withTheme(Slider)
