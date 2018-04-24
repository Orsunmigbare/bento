import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BounceIn } from "@staccx/animations"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  font,
  color,
  themify,
  ThemeComponent
} from "@staccx/theme"

const Caret = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16" width="18">
    <path d="M3.81 0a.54.54 0 0 0-.38.16L.16 3.47a.56.56 0 0 0 0 .78l11.45 11.59a.54.54 0 0 0 .78 0L23.84 4.25a.56.56 0 0 0 0-.78L20.57.17a.54.54 0 0 0-.77 0L12 8.04 4.2.16A.54.54 0 0 0 3.81 0z" />
  </svg>
)
Caret.propTypes = { className: PropTypes.string }
Caret.defaultProps = { className: "" }

class ExpandListItem extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      isExpanded: this.props.expanded
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded !== undefined) {
      this.setState({ isExpanded: nextProps.expanded })
    }
  }

  handleChange(event) {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }
  render() {
    const {
      title,
      children,
      className,
      flush,
      onClick,
      ...otherProps
    } = this.props
    return (
      <ExpandItem className={className} {...otherProps}>
        <ExpandBtn
          isExpanded={this.state.isExpanded}
          onClick={this.handleChange}
          aria-expanded={this.state.isExpanded}
          aria-controls={title}
          id={title + "2"}
        >
          {title} <ExpandIcon isExpanded={this.state.isExpanded} />
        </ExpandBtn>
        {this.state.isExpanded && (
          <ExpandedItem flush={flush} id={title} aria-labelledby={title + "2"}>
            {children}
          </ExpandedItem>
        )}
      </ExpandItem>
    )
  }
}

export const EXPAND_LIST_ITEM = "EXPAND_LIST_ITEM"
const ExpandItem = styled.li`
  border-bottom: 1px solid ${color.line};
  position: relative;

  &:last-child {
    border-bottom-width: 0;
  }
  ${themify(EXPAND_LIST_ITEM)};
`

export const COMPONENT_EXPAND_LIST_ICON = "EXPAND_LIST_ICON"
const IconComponent = ({...props}) => (
  <ThemeComponent tagName={COMPONENT_EXPAND_LIST_ICON} fallback={Caret} {...props} />
)
export const EXPAND_LIST_ICON = "EXPAND_LIST_ICON"
const ExpandIcon = styled(IconComponent)`
  position: absolute;
  top: 16px;
  right: ${spacing.small()};
  fill: ${color.line};
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
  ${themify(EXPAND_LIST_ICON)};
`

export const EXPAND_LIST_BUTTON = "EXPAND_LIST_BUTTON"
const ExpandBtn = styled.button`
  background: transparent;
  border-width: 0;
  color: ${color.text};
  font-size: ${font.base};
  font-weight: ${p => (p.isExpanded ? "bold" : "normal")};
  cursor: pointer;
  padding: ${spacing.small()} ${spacing.large()} ${spacing.small()}
    ${spacing.medium()};
  width: 100%;
  text-align: left;

  &:hover,
  &:focus {
    color: ${color.black};
    outline: none;

    ${ExpandIcon} {
      fill: ${color.primary};
    }
  }
  ${themify(EXPAND_LIST_BUTTON)};
`

export const EXPAND_LIST_EXPANDED_ITEM = "EXPAND_LIST_EXPANDED_ITEM"
const ExpandedItem = styled.div`
  opacity: 0;
  animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
  padding: ${p => (p.flush ? 0 : spacing.small())}
    ${p => (p.flush ? 0 : spacing.medium())}
    ${p => (p.flush ? 0 : spacing.medium())};
  max-width: ${p => (p.flush ? "auto" : "540px")};
  margin: auto;
  line-height: 1.8;
  ${themify(EXPAND_LIST_EXPANDED_ITEM)};
`

ExpandListItem.defaultProps = {
  expanded: false,
  className: "",
  flush: false
}

ExpandListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  flush: PropTypes.bool
}

export default ExpandListItem
