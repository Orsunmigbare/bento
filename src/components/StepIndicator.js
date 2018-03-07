import React from "react"
import styled, { keyframes } from "styled-components"
import { inject, observer } from "mobx-react"

@inject("uiStore")
@observer
class StepIndicator extends React.Component {
  componentWillUpdate() {
    this.flipIt = !this.flipIt
  }
  render() {
    const { uiStore } = this.props
    const { maxStep, currentStep, steps, setStep } = uiStore
    const progress = (currentStep + 1) / steps.length

    return (
      <StepperOuter>
        {steps.map((step, index) => {
          if (index <= maxStep) {
            return (
              <Step
                key={step.name}
                current={index === currentStep}
                progress={progress}
              >
                <StepLink id={`step-${index}`} onClick={() => setStep(index)}>
                  {step.name}
                </StepLink>
              </Step>
            )
          }
          return (
            <Step
              key={step.name}
              id={`step-${index}`}
              current={index === currentStep}
            >
              {step.name}
            </Step>
          )
        })}
        <StepBar progress={currentStep + 2} flipIt={this.flipIt} />
      </StepperOuter>
    )
  }
}

const rubberBand = keyframes`
  from {
    transform: scaleX(0.9) translateY(1px);
  }

  to {
    transform: scaleX(1) translateY(1px);
  }
`

const rubberBand2 = keyframes`
  from {
    transform: scaleX(0.89) translateY(1px);
  }

  to {
    transform: scaleX(1) translateY(1px);
  }
`

const StepperOuter = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: repeat(2, auto);
  max-width: none;
  border-bottom: 1px solid ${p => p.theme.color.grayLight};
`

const Step = styled.div`
  padding-bottom: ${p => p.theme.spacing.small};
  text-align: center;
  font-size: ${p => p.theme.font.size.small};
  color: ${p => (p.current ? p.theme.color.text : p.theme.color.grayLight)};
  grid-row: 1;
`

const StepBar = styled.div`
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: ${p => p.progress};
  height: 1px;
  transform: translateY(1px);
  background-color: ${p => p.theme.gradient.galaxy[0]};
  background-image: linear-gradient(
    to right,
    ${p => p.theme.gradient.galaxy[0]} 0%,
    ${p => p.theme.gradient.galaxy[1]} 100%
  );
  transform-origin: left;
  ${p =>
    p.flipIt
      ? `animation: ${rubberBand} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards 1;`
      : `animation: ${rubberBand2} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards 1;`}
}
`

const StepLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: ${p => p.theme.color.primary};
  }
`

export default StepIndicator
