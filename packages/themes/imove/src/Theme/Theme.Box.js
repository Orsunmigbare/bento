import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``,
    menu: css`
      position: relative;
      z-index: 10;
      padding-top: ${theming.spacing.small};
      padding-bottom: ${theming.spacing.small};
      width: 100%;
      @media screen and (max-width: 768px) {
        background: ${theming.color.white};
        position: fixed;
        left: 0;
        bottom: 0;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 100;
      }
    `,
    myCarHeader: css`
      background-color: ${theming.color("bgGray")};
      position: relative;
      width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: ${theming.spacing.huge};
    `,
    carWrapper: css`
      padding: 0;
      margin-bottom: ${theming.spacing.large};
      text-align: center;
    `,
    center: css`
      text-align: center;
      padding: 0;
      svg {
        margin: auto;
      }
    `,
    filter: css`
      position: absolute;
      width: 100%;
      left: 0;
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: 0;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      label {
        color: ${theming.color.white};
      }
    `,
    subtleLeft: css`
      padding: 0;
      flex-basis: 60%;

      @media screen and (max-width: 768px) {
        margin-left: -${theming.spacing.medium};
        padding: ${theming.spacing.small} ${theming.spacing.medium};
        background-color: ${theming.color("bgGray")};
        color: ${theming.color.text};
      }
    `
  },
  Box.themeProps.box
)