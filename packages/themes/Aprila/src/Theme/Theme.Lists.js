import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    menu: css`
      display: flex;
      justify-content: space-around;
      li {
      }
    `
  },
  List.themeProps.list
)
