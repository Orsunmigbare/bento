import { css } from "styled-components"
import { ExpandListItem, theming } from "@staccx/base"

export const ExpandListItemButtonStyle = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: 0;
    `
  },
  ExpandListItem.themeProps.expandedItem
)
