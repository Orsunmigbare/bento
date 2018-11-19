import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

const tileStyle = css`
  background: ${theming.color.white};
  box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
    rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
    rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
    rgba(0, 0, 75, 0.015) 0px 64px 64px;
  border: 1px solid ${theming.color.line};
  border-radius: 2px;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  page-break-inside: avoid;
  padding: ${theming.spacing.medium};
`

export const BoxStyling = theming.createVariants(
  {
    documentationShortcut: css`
      ${tileStyle};
      color: ${theming.color.text};
    `,
    codeBlock: css`
      ${tileStyle};
      padding: 0;
    `,
    documentationMenu: css`
      position: sticky;
      top: 1px;
      padding: ${theming.spacing.medium};
    `,
    documentationHeaderSearch: css`
      display: flex;
      justify-content: stretch;
      align-items: stretch;
      > * {
        flex-grow: 1;
      }
      input {
        height: 71px;
      }
    `,
    documentationTypePath: css`
      display: flex;
      align-items: center;
      max-width: 100%;
    `,
    apiContainer: css`
      padding-top: ${theming.spacing.large};
    `,
    devPortalHeader: css`
      padding: ${theming.spacing.medium};
      height: 72px;
      display: flex;
      justify-content: left;
      align-items: center;
      border-bottom: 1px solid ${theming.color("devportalLine")};
    `,
    createApi: css`
      padding: ${theming.spacing.medium};
      background-color: ${theming.color("bgGray")};
    `,
    marginTop: css`
      margin-top: ${theming.spacing.medium};
    `,
    docApiClient: css`
      background-color: ${theming.color.white};
      padding: ${theming.spacing.medium} ${theming.spacing.large}
        ${theming.spacing.medium} ${theming.spacing.medium};
      position: relative;
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
      border-radius: 2px;
    `
  },
  Box.themeProps.box
)
