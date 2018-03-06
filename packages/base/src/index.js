/**
 * @class ExampleComponent
 */
import "whatwg-fetch"
import Input from "./components/Forms/Input/Input"
import CurrencyInput from "./components/Forms/Input/CurrencyInput/CurrencyInput"
import PhoneInput from "./components/Forms/Input/PhoneInput/PhoneInput"
import CompanyInput from "./components/Forms/Input/CompanyInput/CompanyInput"
import Label from "./components/Forms/Label/Label"
import CheckBox from "./components/Forms/CheckBox/CheckBox"
import RadioButton from "./components/Forms/RadioButton/RadioButton"
import RadioPill from "./components/Forms/RadioPill/RadioPill"
import RadioPillItem from "./components/Forms/RadioPill/RadioPill.Item"
import CheckGroup from "./components/Forms/CheckGroup/CheckGroup"
import Slider from "./components/Forms/Slider/Slider/Slider"
import SliderKeyboardInput from "./components/Forms/Slider/SliderKeyboardInput/SliderKeyboardInput"
import SelectSimple from "./components/Forms/SelectSimple/SelectSimple"
import Select from "./components/Forms/Select/Select"
import SelectSelected from "./components/Forms/Select/Select.Selected"
import SelectOption from "./components/Forms/Select/Select.Option"

// list
import List from "./components/Lists/List"
import SplitListItem from "./components/Lists/SplitList/SplitListItem"
import ExpandListItem from "./components/Lists/ExpandList/ExpandListItem"
import LinkListItem from "./components/Lists/LinkList/LinkListItem"
import InlineListItem from "./components/Lists/InlineList/InlineListItem"

// layout
import Flag from "./components/Layout/Flag/Flag"
import Wrapper from "./components/Layout/Wrapper/Wrapper"
import Box from "./components/Layout/Box/Box"
import Pack from "./components/Layout/Pack/Pack"
import PackItem from "./components/Layout/Pack/PackItem"

// Icons
import Caret from "./components/Icons/Caret"
import Close from "./components/Icons/Close"

// formatters
import Odometer from "./components/Formatters/Odometer/Odometer"

// Dataviz
import ProgressBar from "./components/DataViz/ProgressBar/ProgressBar"
import Fraction from "./components/DataViz/Fraction/Fraction"
import Donut from "./components/DataViz/Donut/Donut"

import Modal from "./components/Modal/Modal"

import { default as Button } from "./components/Button/Button"
import { default as extend } from "./functions/extend"
import { default as cssResets } from "./Styles/cssResets"
import { default as ThemeProvider } from "./Theme/ThemeWrapper"

// /functions
import inverseLerp from "./functions/inverseLerp"
import lerp from "./functions/lerp"
import coserp from "./functions/cosineInterpolate"
import clamp from "./functions/clamp"
import multiplyPixelValue from "./functions/multiplyPixelValue"

// styles
import fontSmoothing from "./Styles/fontsmoothing"
import hideVisually from "./Styles/hideVisually"

// animations
import {default as Animations} from "./Styles/animations"

export {
  Animations,
  Box,
  Button,
  Caret,
  CheckBox,
  CheckGroup,
  clamp,
  Close,
  CompanyInput,
  coserp,
  cssResets,
  CurrencyInput,
  Donut,
  ExpandListItem,
  extend,
  Flag,
  fontSmoothing,
  Fraction,
  hideVisually,
  InlineListItem,
  Input,
  inverseLerp,
  Label,
  lerp,
  LinkListItem,
  List,
  Modal,
  multiplyPixelValue,
  Odometer,
  Pack,
  PackItem,
  PhoneInput,
  ProgressBar,
  RadioButton,
  RadioPill,
  RadioPillItem,
  Select,
  SelectOption,
  SelectSelected,
  SelectSimple,
  Slider,
  SliderKeyboardInput,
  SplitListItem,
  ThemeProvider,
  Wrapper
}
