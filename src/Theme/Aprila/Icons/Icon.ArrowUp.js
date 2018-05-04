import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const IconArrowUp = () => (
  <Outer>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M14.77.33C15 .1 15.3 0 15.6 0c.3 0 .6.1.82.33l4.1 3.9c.45.44.45 1.14 0 1.58a1.2 1.2 0 0 1-1.66 0l-2.1-2v12.93c0 .61-.52 1.11-1.16 1.11-.65 0-1.17-.5-1.17-1.11V3.8l-2.1 2a1.2 1.2 0 0 1-1.65 0 1.08 1.08 0 0 1 0-1.58l4.1-3.9zm-4.43 28.55c0 .62-.53 1.12-1.17 1.12C8.52 30 8 29.5 8 28.88c0-.61.52-1.11 1.17-1.11.64 0 1.17.5 1.17 1.11zm4.09-5.45c0-.62.52-1.12 1.17-1.12.64 0 1.17.5 1.17 1.12 0 .62-.53 1.12-1.17 1.12-.65 0-1.17-.5-1.17-1.12zm0-3.35c0-.61.52-1.11 1.17-1.11.64 0 1.17.5 1.17 1.11 0 .62-.53 1.12-1.17 1.12-.65 0-1.17-.5-1.17-1.12zM13.26 30c-.65 0-1.17-.5-1.17-1.12 0-.61.52-1.11 1.17-1.11.64 0 1.17.5 1.17 1.11 0 .62-.53 1.12-1.17 1.12zm5.26-1.12c0 .62-.52 1.12-1.17 1.12-.65 0-1.17-.5-1.17-1.12 0-.61.52-1.11 1.17-1.11.65 0 1.17.5 1.17 1.11zm4.09 0c0 .62-.52 1.12-1.17 1.12-.65 0-1.17-.5-1.17-1.12 0-.61.52-1.11 1.17-1.11.65 0 1.17.5 1.17 1.11z" />
    </Icon>
  </Outer>
)

const Outer = styled.div`
  display: flex;
  align-items: center;
  width: ${spacing.huge};
  height: ${spacing.huge};
  margin: 0 auto ${spacing.small};
  padding: ${spacing.medium};
  border-radius: 50%;
  background-color: ${color.secondary};
`

const Icon = styled.svg`
  width: 36px;
  height: 36px;
  fill: ${color.white};
  vertical-align: middle;
`

export default IconArrowUp
