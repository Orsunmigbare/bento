import { theming, hideVisually, Wrapper } from "@staccx/base"
import { css } from "styled-components"
import { BullIcon, BearIcon, CaretIcon, SortOrderIcon } from "./theme.Icons"
import ButtonVariants from "./theme.Buttons"
import { LoadingVariants } from "./theme.Loading"

const borderRadius = "2px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  form: "400px",
  small: "700px",
  medium: "1080px",
  large: "1350px",
  breakout: "640px"
}

const spacing = {
  grid: "14vh",
  huge: "96px",
  largePlus: "72px",
  large: "48px",
  mediumPlus: "32px",
  medium: "24px",
  small: "12px",
  tiny: "6px",
  micro: "3px"
}

const color = {
  bg: "#fff",
  primary: "#2D9CDB",
  secondary: "#CF27AA",
  gray: "#767676",
  grayLight: "#C7C7C7",
  grayXLight: "#F5F5F5",
  grayDark: "#4F4F4F",
  text: "#2b2b2b",
  white: "#fff",
  line: "#F2F2F2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#E32367",
  black: "#000",
  subtleHover: "#D2D9D9",
  subtleHoverDark: "#C3CCCC",
  btnColor: "#fe83ac",
  waveSelected0: "#ff00c8",
  waveSelected1: "#c030ff",
  waveSelected2: "#ff00c8",
  waveHovered0: "#4cf7ff",
  waveHovered1: "#3bbdf8",
  waveHovered2: "#2f92f3",
  waveDefault: "#2f80ed",
  dark: "#1B252A",
  greenDark: "#04744A"
}

const font = {
  h1: "36px",
  h2: "26px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "16px",
  tiny: "12px",
  input: "16px",
  huge: "50px",
  lineHeight: "1.4"
}

const fontFamily = {
  heading: "Avenir",
  body: "Avenir"
}

const fontWeight = {
  normal: "400",
  bold: "600"
}

export default new theming.Theme({
  name: "Quantfolio",
  font,
  fontWeight,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  hideVisually
})
  .add(
    theming.createVariants(
      {
        container: css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `
      },
      Wrapper.themeProps.wrapper
    )
  )
  .add(BullIcon)
  .add(BearIcon)
  .add(CaretIcon)
  .add(SortOrderIcon)
  .add(ButtonVariants)
  .add(LoadingVariants)
