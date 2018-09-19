import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { List, Heading } from "@staccx/base"
import { spacing, color, font, wrapper } from "@staccx/theme"
import { dashIt } from "@staccx/formatting"

const NavigationSubpage = ({ inverted, items, name, title }) => (
  <Container>
    <ProductName level={1}>{title}</ProductName>
    {items && (
      <Navigation>
        <List>
          {items.map(item => (
            <li key={item._key}>
              <SubLink
                to={`${dashIt(name)}/${dashIt(item.title)}`}
                activeClassName="is-current"
              >
                {item.title}
              </SubLink>
            </li>
          ))}
        </List>
      </Navigation>
    )}
  </Container>
)

const Container = styled.div`
  margin-top: ${spacing.small};
  border-top: 2px solid ${color.line};
  padding-top: ${spacing.small};

  @media only screen and (min-width: ${wrapper.medium}) {
    display: flex;
    justify-content: space-between;
  }
`

const ProductName = styled(Heading)`
  font-size: ${font.base};
`

const Navigation = styled.nav`
  > * {
    display: flex;
    flex-wrap: wrap;

    > li:not(:last-child) {
      margin-right: ${spacing.medium};
    }

    @media only screen and (min-width: ${wrapper.medium}) {
      justify-content: space-between;
    }
  }
`

const SubLink = styled(NavLink)`
  text-decoration: none;
  color: ${color.primary};

  &.is-current {
    color: ${color("textDark")};
  }
`

NavigationSubpage.defaultProps = {
  inverted: false
}

NavigationSubpage.propTypes = {
  inverted: PropTypes.bool,
  items: PropTypes.array,
  name: PropTypes.string.isRequired
}

export default NavigationSubpage
