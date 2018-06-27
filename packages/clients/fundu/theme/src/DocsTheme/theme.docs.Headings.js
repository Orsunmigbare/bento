import { css } from "styled-components"
import { color, font, registerStyle, fontFamily } from "@staccx/theme"
import { HeadingStyles } from "@staccx/base"

export const HeadingStyling = registerStyle(
  {
    documentation: css`
      font-weight: 400;
      font-family: ${fontFamily.body};
      ${p =>
        p.level === 2 &&
        css`
          font-size: ${font.h4};
        `};
      ${p =>
        p.level === 4 &&
        css`
          font-size: ${font.h5};
          color: ${color.gray};
        `};
    `,
    documentationShortcutHeading: css`
      font-weight: 400;
      font-family: ${fontFamily.body};
      font-size: ${font.h4};
      color: ${color.primary};
      line-height: 1.5;
    `
  },
  HeadingStyles.HEADING
)
