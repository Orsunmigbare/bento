import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    newsList: css`
      li {
        padding: ${theming.spacing.small};
        a {
          text-decoration: none;
        }
        &:nth-child(even) {
          background-color: ${theming.color("bg1")};
        }
      }
    `,
    casesList: css`
      li {
        a {
          text-decoration: none;
          display: block;
          padding: ${theming.spacing.small};
          transition: background 0.2s ease;

          &:hover,
          &:active,
          &:focus {
            background-color: ${theming.color("subtleHover")};
          }
        }
        &:nth-child(even) {
          background-color: ${theming.color("concrete")};
        }
      }
    `,
    contactHours: css`
      color: ${theming.color.wcag};
      font-size: ${theming.font.input};
    `,
    financingTable: css`
      display: grid;
      grid-template-columns: 1fr auto;
      color: ${theming.color("g4")};
      font-size: ${theming.font.input};
      margin: 0 -${theming.spacing.medium};

      dt {
        padding: ${theming.spacing.small} ${theming.spacing.medium};
        padding-right: ${theming.spacing.medium};

        &:nth-of-type(2n) {
          background-color: ${theming.color("bg2")};
        }
      }

      dd {
        padding: ${theming.spacing.small} ${theming.spacing.medium};
        padding-left: 0;
        text-align: right;

        &:nth-of-type(2n) {
          background-color: ${theming.color("bg2")};
        }
      }
    `
  },
  List.themeProps.list
)
