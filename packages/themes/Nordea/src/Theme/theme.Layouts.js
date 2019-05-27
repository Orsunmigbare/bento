import { css } from "styled-components"
import { Layout, LayoutItem, theming } from "@staccx/base"
// import { FadeIn, BounceIn } from "@staccx/animations"

export const LayoutStyling = theming.createVariants(
  {
    dashboard: css`
      grid-template-columns: 1fr minmax(540px, 720px) minmax(320px, 340px) 1fr;
      grid-template-areas: ". main aside .";
      grid-column-gap: ${theming.spacing.large};
      grid-row-gap: ${theming.spacing.large};
      padding-top: ${theming.spacing.large};
      padding-bottom: ${theming.spacing.large};

      @media only screen and (max-width: 980px) {
        grid-template-areas:
          ". main ."
          ". aside .";
        grid-template-columns: ${theming.spacing.small} auto ${theming.spacing
            .small};
        grid-template-rows: auto;
        grid-column-gap: 0;
        grid-row-gap: ${theming.spacing.medium};
        padding-top: ${theming.spacing.medium};
        padding-bottom: ${theming.spacing.medium};
      }
    `,
    dashboardItems: css`
      grid-row-gap: ${theming.spacing.large};

      @media only screen and (max-width: 980px) {
        grid-row-gap: ${theming.spacing.medium};
      }
    `,
    customer: css`
      padding-top: ${theming.spacing.medium};
    `,
    customerSubNav: css`
      padding-top: ${theming.spacing.medium};
      padding-bottom: 0;
    `,
    fourCol: css`
      grid-template-columns:
        [first firstHalf-start] 241px [second] 241px
        [third firstHalf-end secondHalf-start] 241px
        [fourth] 241px [secondHalf-end];
      grid-column-gap: ${theming.spacing.large};
      grid-row-gap: 0;

      @media only screen and (max-width: 1110px) {
        grid-template-columns: [first firstHalf-start third secondHalf-start] 1fr [second fourth] 1fr [firstHalf-end secondHalf-end];
        grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
        grid-column-gap: ${theming.spacing.medium};
        grid-row-gap: ${theming.spacing.medium};
        padding-top: ${theming.spacing.medium};
        padding-bottom: ${theming.spacing.medium};
      }

      @media only screen and (max-width: 580px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
      }
      }
    `,
    newsOverview: css`
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      grid-column-gap: ${theming.spacing.large};
      grid-row-gap: ${theming.spacing.large};
      padding-top: ${theming.spacing.large};
      padding-bottom: ${theming.spacing.large};

      @media only screen and (max-width: 1110px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: ${theming.spacing.medium};
        grid-row-gap: ${theming.spacing.medium};
        padding-top: ${theming.spacing.medium};
        padding-bottom: ${theming.spacing.medium};
      }

      @media only screen and (max-width: 580px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
      }
    `,
    newsArticle: css`
      grid-column-gap: ${theming.spacing.huge};
    `,
    leaderBoardPodium: css`
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      grid-column-gap: ${theming.spacing.medium};
      grid-row-gap: ${theming.spacing.medium};
      padding-bottom: ${theming.spacing.large};
      margin: 0 ${theming.spacing.small};

      @media only screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: ${theming.spacing.medium};
        grid-row-gap: ${theming.spacing.medium};
        padding-top: ${theming.spacing.medium};
        padding-bottom: ${theming.spacing.medium};
      }

      @media only screen and (max-width: 350px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
      }
    `
    // ,
    // case: css`
    //   grid-template-columns: 1fr minmax(320px, 512px) 96px minmax(320px, 512px) 1fr;
    //   grid-template-rows: repeat(7, auto);
    //   grid-row-gap: ${theming.spacing.large};
    //   grid-column-gap: ${theming.spacing.medium};
    //   @media only screen and (max-width: 880px) {
    //     grid-template-columns: 1fr 320px 2fr 320px 1fr;
    //   }
    //   @media only screen and (max-width: 750px) {
    //     grid-template-columns: 24px auto 24px;
    //     grid-template-rows: auto;
    //     grid-column-gap: 0;
    //   }
    // `,
    // stats: css`
    //   grid-template-columns: 1fr 48px 2fr 1fr;
    //   grid-template-rows: repeat(3, auto);
    //   grid-row-gap: ${theming.spacing.medium};
    //   grid-column-gap: ${theming.spacing.medium};
    //   @media only screen and (max-width: 920px) {
    //     grid-template-columns: 1fr 6px 2fr 1fr;
    //   }
    //   @media only screen and (max-width: 860px) {
    //     grid-template-columns: 1fr 1fr;
    //     grid-template-rows: repeat(4, auto);
    //   }
    // `
  },
  Layout.themeProps.container
)

// const mobileColumn = css`
//   @media only screen and (max-width: 750px) {
//     grid-row: auto;
//     grid-column: 2;
//   }
// `

// const hideCSS = css`
//   @media only screen and (max-width: 750px) {
//     display: none;
//   }
// `

// const fadeInCss = css`
//   opacity: 0;
//   animation: ${FadeIn} forwards ease-out 400ms 1;
//   animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
// `

// const responsiveDealerpadHack = css`
//   display: flex;
//   justify-content: center;
//   background-color: ${theming.color.white};
//   svg {
//     max-width: 100%;
//   }
// `

export const LayoutItemStyling = theming.createVariants(
  {
    firstHalf: css`
      grid-area: firstHalf;

      @media only screen and (max-width: 1110px) and (min-width: 580px) {
        grid-area: 1 / firstHalf / 1 / firstHalf;
      }

      @media only screen and (max-width: 580px) {
        grid-area: unset;
      }
    `,
    secondHalf: css`
      grid-area: secondHalf;

      @media only screen and (max-width: 1110px) and (min-width: 580px) {
        grid-area: 2 / secondHalf / 2 / secondHalf;
      }

      @media only screen and (max-width: 580px) {
        grid-area: unset;
      }
    `,
    first: css`
      grid-area: first;

      @media only screen and (max-width: 1110px) and (min-width: 580px) {
        grid-area: 1 / first / 1 / first;
      }

      @media only screen and (max-width: 580px) {
        grid-area: unset;
      }
    `,
    second: css`
      grid-area: second;

      @media only screen and (max-width: 1110px) and (min-width: 580px) {
        grid-area: 1 / second / 1 / second;
      }

      @media only screen and (max-width: 580px) {
        grid-area: unset;
      }
    `,
    third: css`
      grid-area: third;

      @media only screen and (max-width: 1110px) and (min-width: 580px) {
        grid-area: 2 / third / 2 / third;
      }

      @media only screen and (max-width: 580px) {
        grid-area: unset;
      }
    `,
    fourth: css`
      grid-area: fourth;

      @media only screen and (max-width: 1110px) and (min-width: 580px) {
        grid-area: 2 / fourth / 2 / fourth;
      }

      @media only screen and (max-width: 580px) {
        grid-area: unset;
      }
    `

    // statsSelect: css`
    //   grid-column: 4 / span 1;
    //   grid-row: 1 / span 1;
    //   text-align: right;
    //   height: 12px;
    //   ${fadeInCss};
    //   @media only screen and (max-width: 860px) {
    //     grid-column: 1 / span 2;
    //     grid-row: 1 / span 1;
    //   }
    // `,
    // statsStatus: css`
    //   grid-column: 1 / span 1;
    //   grid-row: 2 / span 2;
    //   display: flex;
    //   ${fadeInCss};
    //   @media only screen and (max-width: 860px) {
    //     grid-column: 1 / span 2;
    //     grid-row: 2 / span 1;
    //     ${responsiveDealerpadHack};
    //   }
    // `,
    // statsMonth: css`
    //   grid-column: 3 / span 1;
    //   grid-row: 2 / span 1;
    //   ${fadeInCss};
    //   @media only screen and (max-width: 860px) {
    //     grid-column: 1 / span 1;
    //     grid-row: 3 / span 1;
    //     ${responsiveDealerpadHack};
    //   }
    // `,
    // statsTotal: css`
    //   grid-column: 4 / span 1;
    //   grid-row: 2 / span 1;
    //   ${fadeInCss};
    //   @media only screen and (max-width: 860px) {
    //     grid-column: 2 / span 1;
    //     grid-row: 3 / span 1;
    //     ${responsiveDealerpadHack};
    //   }
    // `,
    // statsContact: css`
    //   grid-column: 3 / span 2;
    //   grid-row: 3 / span 1;
    //   ${fadeInCss};
    //   @media only screen and (max-width: 860px) {
    //     grid-column: 1 / span 2;
    //     grid-row: 4 / span 1;
    //   }
    // `,
    // caseHeader: css`
    //   grid-column: 1 / span 5;
    //   grid-row: 1 / span 3;
    //   z-index: -1;
    //   @media only screen and (max-width: 750px) {
    //     grid-row: 1 / span 3;
    //     grid-column: 1 / span 3;
    //   }
    // `,
    // caseTabs: css`
    //   display: none;
    //   ${mobileColumn};
    //   @media only screen and (max-width: 750px) {
    //     display: block;
    //     grid-row: 3;
    //     margin-top: -${theming.spacing.medium};
    //   }
    // `,
    // caseSummary: css`
    //   grid-column: 2 / span 1;
    //   grid-row: 2;
    //   opacity: 0;
    //   animation: ${FadeIn} forwards ease-out 400ms 1;
    //   @media only screen and (min-width: 750px) {
    //     min-height: 275px;
    //   }
    //   @media only screen and (max-width: 750px) {
    //     grid-row: 2;
    //     grid-column: 2;
    //   }
    // `,
    // caseChat: css`
    //   grid-column: 4 / span 1;
    //   grid-row: 2 / span 3;
    //   opacity: 0;
    //   animation: ${FadeIn} forwards ease-out 400ms 1;
    //   animation-delay: 400ms;
    //   ${mobileColumn};
    //   ${p => p.hideOnMobile && hideCSS};
    // `,
    // caseDocumentation: css`
    //   grid-column: 2 / span 1;
    //   grid-row: 5;
    //   opacity: 0;
    //   animation: ${FadeIn} forwards ease-out 400ms 1;
    //   animation-delay: 500ms;
    //   ${mobileColumn};
    //   ${p => p.hideOnMobile && hideCSS};
    // `,
    // caseContact: css`
    //   grid-column: 4 / span 1;
    //   grid-row: 5;
    //   opacity: 0;
    //   animation: ${FadeIn} forwards ease-out 400ms 1;
    //   animation-delay: 600ms;
    //   ${mobileColumn};
    //   ${p => p.hideOnMobile && hideCSS};
    // `,
    // caseFinance: css`
    //   grid-column: 2 / span 1;
    //   grid-row: 6;
    //   opacity: 0;
    //   animation: ${FadeIn} forwards ease-out 400ms 1;
    //   animation-delay: 700ms;
    //   ${mobileColumn};
    //   ${p => p.hideOnMobile && hideCSS};
    // `,
    // caseObject: css`
    //   grid-column: 4 / span 1;
    //   grid-row: 6;
    //   opacity: 0;
    //   animation: ${FadeIn} forwards ease-out 400ms 1;
    //   animation-delay: 800ms;
    //   ${mobileColumn};
    //   ${p => p.hideOnMobile && hideCSS};
    // `,
    // fadeIn: css`
    //   opacity: 0;
    //   animation: ${FadeIn} forwards ease-out 400ms 1;
    //   animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
    // `,
    // fadeUp: css`
    //   opacity: 0;
    //   transform: translateY(-12px);
    //   animation: ${BounceIn} forwards ease-out 400ms 1;
    //   animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
    // `
  },
  LayoutItem.themeProps.container
)
