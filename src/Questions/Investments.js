import React, { Component } from "react"
import styled from "styled-components"
import { CheckGroup, CheckBox } from "@staccx/base"

const content = {
  title: "Do you want to choose where your investment is placed?",
  lede:
    "We can take this into account when building your portfolio. Select up to 4.",
  answers: [
    {
      id: "8924qdwsacv",
      label: "USA",
      img: "/img/usa.jpg",
      value: "USA"
    },
    {
      id: "wt4iw12",
      label: "Asia and Pacific",
      img: "/img/asia.jpg",
      value: "ASIA"
    },
    {
      id: "ewpoifjw",
      label: "Europe",
      img: "/img/europe.jpg",
      value: "EU"
    },
    {
      id: "ewgioh9",
      label: "Latin America",
      img: "/img/latam.jpg",
      value: "LATAM"
    },
    {
      id: "oifb3",
      label: "Digitalisation",
      img: "/img/digital.jpg",
      value: "DIG"
    },
    {
      id: "92348tgh",
      label: "Ageing population",
      img: "/img/ageing.jpg",
      value: "AGE"
    },
    {
      id: "jhgfds",
      label: "Healthcare innovation",
      img: "/img/healthcare.jpg",
      value: "HEALTH"
    },
    {
      id: "1243teyrjtyk",
      label: "Automation & Robotics",
      img: "/img/robots.jpg",
      value: "ROBOTS"
    },
    {
      id: "124qrwe",
      label: "Clean energy",
      img: "/img/cleanenergy.jpg",
      value: "CLEANENERGY"
    }
  ]
}

const MAX_SELECTABLE = 3

class Investments extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { selected: [] }
    this.handleSelect = this.handleSelect.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
  }

  handleSelect(value) {
    if (!this.state.selected.includes(value)) {
      this.setState(prevState => ({
        selected: [...prevState.selected, value]
      }))
    } else {
      this.setState(prevState => ({
        selected: prevState.selected.filter(i => i !== value)
      }))
    }
  }

  isDisabled(value) {
    if (
      this.state.selected.length >= MAX_SELECTABLE &&
      !this.state.selected.includes(value)
    ) {
      return true
    }
    return false
  }

  render() {
    return (
      <CheckWrapper>
        <CheckGroup group={"geo"} onChange={this.handleSelect}>
          {content.answers.map(item => (
            <ImageCheck
              key={item.id}
              value={item.value}
              id={item.id}
              disabled={this.isDisabled(item.value)}
            >
              <Text>{item.label}</Text>
              <Img>
                <img src={item.img} alt="" />
              </Img>
            </ImageCheck>
          ))}
        </CheckGroup>
      </CheckWrapper>
    )
  }
}

const Img = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 1;
    transition: background 0.2s ease;
  }
`

const ImageCheck = styled(CheckBox)`
  & ~ label {
    position: relative;
    padding: 0;
    color: ${p => p.theme.color.white};
    transition: opacity 0.2s ease-in;

    &::before {
      right: 0;
      left: auto;
      width: ${p => p.theme.targetSize.normal};
      height: ${p => p.theme.targetSize.normal};
      border-color: transparent;
      border-radius: 50%;
      background-color: transparent;
      transform: scale(0);
      transition: transform 0.2s ease-out;
      z-index: 10;
    }

    &::after {
      fill: ${p => p.theme.color.white};
      left: auto;
      right: 9px;
      top: 9px;
      z-index: 11;
    }

    &:hover,
    &:active,
    &:focus {
      &::before {
        border-color: transparent;
        background-color: transparent;
      }
    }
  }

  &:not(:disabled) ~ label {
    &:hover,
    &:active,
    &:focus {
      ${Img} {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        &::after {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }

  &:checked ~ label {
    &::before {
      border-color: ${p => p.theme.gradient.galaxy[1]};
      background-color: ${p => p.theme.gradient.galaxy[1]};
      transform: scale(1);
    }
  }

  &:disabled ~ label {
    opacity: 0.5;
    cursor: default;
  }
`

const Text = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  color: ${p => p.theme.color.white};
  text-align: center;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  z-index: 5;
`

const CheckWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: ${p => p.theme.spacing.medium};
  justify-content: center;
  padding-top: ${p => p.theme.spacing.large};
`

export default Investments
