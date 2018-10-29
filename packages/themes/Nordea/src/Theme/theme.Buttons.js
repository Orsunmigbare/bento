import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

const baseStyling = css`
  border-radius: ${theming.targetSize.normal};
  background-color: ${theming.color("b5")};
  &:hover,
  &:focus,
  &:active {
    background-color: ${theming.color("text")};
  }
`

export const ButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${baseStyling};
    `,
    chat: css`
      ${baseStyling};
      position: absolute;
      right: 0;
      bottom: 0;
      min-height: ${theming.targetSize.small};
      right: ${theming.spacing.tiny};
      bottom: 8px;
      min-height: ${theming.spacing.mediumPlus};
      padding: 0 ${theming.spacing.small};
    `,
    icon: css`
      background: transparent;
      padding-left: ${theming.spacing.tiny};
      padding-right: ${theming.spacing.tiny};
      color: ${theming.color.primary};
      font-weight: ${theming.fontWeight.normal};
      svg {
        fill: ${theming.color("g2")};
      }
      &:hover,
      &:focus,
      &:active {
        background: transparent;
        color: ${theming.color.primary};
        svg {
          fill: ${theming.color("g3")};
        }
      }
    `,
    subtle: css`
      border-radius: ${theming.targetSize.normal};
      padding: 0 ${theming.spacing.small};
      min-height: ${theming.spacing.medium};
      background-color: transparent;
      color: ${theming.color("b4")};
      &:hover,
      &:focus,
      &:active {
        color: ${theming.color("b4")};
        background-color: ${theming.color("bg")};
      }
    `,
    back: css`
      display: flex;
      align-items: center;
      background-color: transparent;
      color: ${theming.color("b4")};
      padding: 0;
      min-height: ${theming.spacing.medium};

      svg {
        margin-right: ${theming.spacing.tiny};
      }
      &:hover,
      &:active,
      &:focus {
        color: ${theming.color("text")};
        color: ${theming.color("b4")};
        background-color: transparent;
        text-decoration: underline;
      }
    `,
    filter: css`
      justify-content: center;
      display: flex;
      svg {
        margin-right: ${theming.spacing.tiny};
      }
    `,
    hamburger: css`
      display: flex;
      min-height: 52px;
      background-color: transparent;
      svg {
        margin-right: ${theming.spacing.tiny};
      }
      @media only screen and (min-width: 540px) {
        display: none;
      }
    `,
    closeMobileMenu: css`
      background-color: transparent;
      display: flex;
      position: absolute;
      top: ${theming.spacing.small};
      right: ${theming.spacing.small};
      svg {
        margin-right: ${theming.spacing.tiny};
      }
    `,
    tabs: css`
      border-radius: 0;
      background-color: transparent;
      color: ${theming.color.primary};
      margin-left: 0;
      margin-right: 0;
      padding: ${theming.spacing.tiny} ${theming.spacing.tiny};
      ${p =>
        p.isCurrent &&
        `
      border-bottom: 2px solid ${theming.color("primary")(p)};
      `};

      &:hover,
      &:active,
      &:focus {
        color: ${theming.color.primary};
        background-color: transparent;
        border-bottom: 2px solid ${theming.color("primary")};
      }
    `,
    emoji: css`
      background-color: transparent;
      padding: 0;
      font-size: 24px;

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
      }

      &:nth-child(even) {
        margin: 0 ${theming.spacing.tiny};
      }
    `,
    closeNews: css`
      background-color: ${theming.color("bg1")};
      border-radius: ${theming.targetSize.normal};
      min-height: ${theming.targetSize.small};
      color: ${theming.color.primary};
      line-height: inherit;
    `,
    white: css`
      border-radius: ${theming.targetSize.normal};
      padding: 0 ${theming.spacing.small};
      min-height: ${theming.spacing.medium};
      background-color: ${theming.color.white};
      color: ${theming.color("b4")};
      &:hover,
      &:focus,
      &:active {
        color: ${theming.color("b4")};
        background-color: ${theming.color("bg")};
      }
    `
  },
  Button.themeProps.button
)
