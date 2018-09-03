import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { color, spacing } from "@staccx/theme"
import { Heading } from "@staccx/base"
import IconArrowRight from "../Icons/IconArrowRight"

const ContentLinksItem = ({ heading, body, url }) => {
  return (
    <Item>
      <ItemLink to={url}>
        <ItemHeading level={3}>{heading}</ItemHeading>
        <Icon />
      </ItemLink>
      {body && <p>{body}</p>}
    </Item>
  )
}

const Item = styled.div``

const ItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  align-items: center;
  margin-bottom: ${spacing.small};
  color: ${color.primary};
  transition: color 0.2s ease;

  > *:last-child {
    margin-left: ${spacing.tiny};
  }

  &:hover,
  &:active,
  &:focus {
    color: ${color.text};
  }
`

const ItemHeading = styled(Heading)`
  display: inline;
  color: currentColor;
`

const Icon = styled(IconArrowRight)`
  display: inline-block;
  vertical-align: unset;
`

ContentLinksItem.propTypes = {
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string
}

export default ContentLinksItem
