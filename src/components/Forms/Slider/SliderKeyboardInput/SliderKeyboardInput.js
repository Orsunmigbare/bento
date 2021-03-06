import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Input from "../../Input/Input"
import Slider from "../Slider/Slider"
import {
  applyVariants,
  targetSize,
  fontFamily,
  font,
  color
} from "../../../../theming"
import themeProps from "./SliderKeyboardInput.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"
import { debounce } from "lodash"
const SliderKeyboardInput = ({
  label,
  name,
  min,
  max,
  step,
  mask,
  className,
  variant,
  onChange,
  showLabel,
  defaultValue,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(defaultValue)
  const [sliderValue, setSliderValue] = useState(defaultValue)
  const [stepValue, setStepValue] = useState(step)

  const handleInputFocus = () => {
    setStepValue(1)
  }

  const handleInputChange = value => {
    if (!value) {
      setInputValue("")
    } else {
      setInputValue(value)

      if (parseInt(value, 10) >= min && parseInt(value, 10) <= max) {
        setSliderValue(value)
      }

      if (parseInt(value, 10) >= max) {
        setSliderValue(max)
      }

      if (parseInt(value, 10) <= min) {
        setSliderValue(min)
      }
      onChange && onChange(value)
    }
  }

  const handleSliderChange = value => {
    setInputValue(parseInt(value, 10))
    setSliderValue(value)
    onChange && onChange(value)
  }

  const handleSliderUpdate = debounce(
    value => {
      setInputValue(parseInt(value, 10))
      // setSliderValue(value);  no need to set slider value on slider update
      onChange && onChange(value)
    },
    step ? step * 0.01 : 0.01
  )

  const handleSliderStart = () => {
    setStepValue(step)
  }

  return (
    <SliderWrapper className={className} variant={variant}>
      <SliderInput
        type="text"
        name={`${name}-keyboard`}
        id={`${name}-keyboard`}
        value={inputValue}
        onChange={e => handleInputChange(e.target.value)}
        onFocus={handleInputFocus}
        // onBlur={handleBlur}
        label={showLabel ? label : null}
        min={min}
        max={max}
        mask={mask || null}
        // disabled={isAnimatingIn}
        variant={variant}
      />
      <Slider
        value={sliderValue}
        name={name}
        id={name}
        step={stepValue}
        min={min}
        max={max}
        onChange={handleSliderChange}
        onUpdate={handleSliderUpdate}
        onSlideStart={handleSliderStart}
        defaultValue={defaultValue}
        variant={variant}
      />
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  font-family: ${fontFamily.body};
  font-size: ${font.input};
  ${applyVariants(themeProps.wrapper)};
`

const SliderInput = styled(Input)`
  background-color: transparent;
  border: 0;
  min-height: ${targetSize.normal};
  max-width: 100%;
  -moz-appearance: textfield;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover,
  &:active,
  &:focus,
  &:-moz-ui-invalid,
  &:invalid {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    color: ${color.text};
  }
  ${applyVariants(themeProps.input)};
`

SliderKeyboardInput.defaultProps = {
  className: "",
  mask: null,
  max: 100,
  min: 0,
  onChange: null,
  step: 1,
  value: 0,
  showLabel: true
}

SliderKeyboardInput.propTypes = {
  className: PropTypes.string,
  easingFunction: PropTypes.func,
  label: PropTypes.string.isRequired,
  mask: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  step: PropTypes.number,
  variant: PropTypes.string,
  value: PropTypes.number,
  showLabel: PropTypes.bool
}
SliderKeyboardInput.themeProps = themeProps
SliderKeyboardInput.createVariants = componentCreateFactory(SliderKeyboardInput)

export default SliderKeyboardInput
