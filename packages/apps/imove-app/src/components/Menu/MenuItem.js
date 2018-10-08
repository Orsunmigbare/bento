import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { ThemeComponent, color, spacing, font } from "@staccx/theme"

const Menu = ({ to, icon, title }) => (
  <StyledLink to={to} activeClassName="imoveCurrent" exact={to === "/"}>
    <IconWrapper>
      <ThemeComponent tagName={icon} />
    </IconWrapper>
    <Title>{title}</Title>
  </StyledLink>
)

const IconWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Title = styled.span`
  margin-top: ${spacing.tiny};
  border-bottom: 2px solid transparent;
  font-size: ${font.tiny};
  @media screen and (min-width: 768px) {
    font-size: ${font.base};
  }
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${color("secondary")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.imoveCurrent,
  &:hover,
  &:active,
  &:focus {
    ${Title} {
      border-bottom-color: ${color("primary")};
    }
  }
`

export default Menu
