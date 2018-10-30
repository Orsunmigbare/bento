import { theming } from "@staccx/base"
import { HeadingStyling } from "./theme.Headings"
import { ParagraphStyling } from "./theme.Paragraphs"
import { BoxStyling } from "./theme.Boxes"
import { AlertStyling } from "./theme.Alerts"
import { DividerStyling } from "./theme.Dividers"
import {
  ListStyling,
  SplitListItemStyling,
  ExpandListItemStyling
} from "./theme.Lists"
import { TextStyling } from "./theme.Texts"
import { ImageStyling } from "./theme.Images"
import { ButtonStyling } from "./theme.Buttons"
import {
  InputStyling,
  LabelStyling,
  SelectIconButtonStyling,
  SelectOptionsWrapperStyling,
  RadioPillItemStyling,
  SelectSimpleSelectStyling,
  SelectSimpleWrapperStyling,
  SliderKeyboardWrapperStyling,
  SliderInputStyling,
  CompanyInputLoadFromStyling,
  CompanyInputLoadToStyling,
  CompanyInputCloseStyling,
  CompanyInputFlagStyling,
  CompanyInputSelectItemStyling,
  SelectOptionStyling,
  SelectSelectedWrapperStyling,
  PostalCodeInputStyling
} from "./theme.Inputs"
import { LayoutStyling } from "./theme.Layouts"
import { LayoutItemStyling } from "./theme.LayoutItem"
import { LogoStyle } from "./Logo"

const borderRadius = "0px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "420px",
  medium: "640px",
  large: "1024px",
  breakout: "640px"
}

const spacing = {
  grid: "7vh",
  huge: "96px",
  largePlus: "72px",
  large: "48px",
  mediumPlus: "32px",
  medium: "24px",
  small: "12px",
  tiny: "6px"
}

const color = {
  bg: "#F5F8FC",
  bgGray: "#F9F7F7",
  primary: "#1F5D9B",
  gray: "#767676",
  text: "#2b2b2b",
  white: "#fff",
  red: "#ea526f",
  pink: "#f8d0db",
  green: "#00a190",
  blue: "#188EFB",
  yellow: "#f4da87",
  line: "#EBEBF2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#c54059",
  black: "#000",
  subtleHover: "#F7F7FF"
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
  huge: "50px"
}

const fontFamily = {
  heading: "AvenirLTPro-Black",
  body: "AvenirLTPro-Roman"
}

export default new theming.Theme({
  name: "Fundu",
  font,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily
})
  .add(theming.createGlobal({ cssResets: theming.cssResets }))
  .add(HeadingStyling)
  .add(ParagraphStyling)
  .add(BoxStyling)
  .add(AlertStyling)
  .add(ListStyling)
  .add(TextStyling)
  .add(ButtonStyling)
  .add(SplitListItemStyling)
  .add(InputStyling)
  .add(LabelStyling)
  .add(ExpandListItemStyling)
  .add(SelectIconButtonStyling)
  .add(SelectOptionsWrapperStyling)
  .add(LayoutStyling)
  .add(LayoutItemStyling)
  .add(RadioPillItemStyling)
  .add(SelectSimpleSelectStyling)
  .add(SelectSimpleWrapperStyling)
  .add(SliderKeyboardWrapperStyling)
  .add(SliderInputStyling)
  .add(CompanyInputLoadFromStyling)
  .add(CompanyInputLoadToStyling)
  .add(CompanyInputCloseStyling)
  .add(CompanyInputFlagStyling)
  .add(CompanyInputSelectItemStyling)
  .add(SelectOptionStyling)
  .add(DividerStyling)
  .add(LogoStyle)
  .add(SelectSelectedWrapperStyling)
  .add(PostalCodeInputStyling)
  .add(ImageStyling)
