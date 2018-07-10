import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { List } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    newsList: css`
      li {
        padding: ${spacing.small};
        a {
          text-decoration: none;
        }
        &:nth-child(even) {
          background-color: ${color("bg1")};
        }
      }
    `,
    casesList: css`
      li {
        a {
          text-decoration: none;
          display: block;
          padding: ${spacing.small};
          transition: background 0.2s ease;

          &:hover,
          &:active,
          &:focus {
            background-color: ${color("subtleHover")};
          }
        }
        &:nth-child(even) {
          background-color: ${color("concrete")};
        }
      }
    `
  },
  List.themeProps.list
)
