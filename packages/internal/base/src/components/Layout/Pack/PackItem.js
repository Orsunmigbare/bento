import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, spacing } from "../../../theming"
import { commonPropTypes } from "../../../constants/themeContants"

const PackItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)

export const PACK_ITEM = "PACK_ITEM"
const ListItem = styled.li`
  display: inline-block;
  padding: ${spacing.small};
  ${applyVariants(PACK_ITEM)};
`

PackItem.defaultProps = {
  className: ""
}

PackItem.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}

export default PackItem
