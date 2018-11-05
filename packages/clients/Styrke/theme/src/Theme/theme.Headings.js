import { css } from "styled-components"
import { color, font, spacing, registerStyle, fontFamily } from "@staccx/theme"
import { Heading } from "@staccx/base"

const stepHeading = css`
  margin-bottom: 0;
  color: ${color.primary};
  font-size: ${font.h1};
  line-height: 1.25;
`

export const HeadingStyling = registerStyle(
  {
    stepHeading: stepHeading,
    formSection: css`
      color: ${color.primary};
      font-size: ${font.h3};
      margin-top: ${p => (p.flush ? 0 : spacing("medium")(p))};
    `,
    endScreen: stepHeading,
    boxHeading: css`
      font-family: ${fontFamily.body};
      font-size: ${font.base};
      font-weight: 300;
      margin-bottom: ${spacing.tiny};
      color: ${color.primary};
    `
  },
  Heading.themeProps.heading
)