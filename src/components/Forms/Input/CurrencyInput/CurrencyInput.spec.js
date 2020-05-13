import React from "react"
import renderer from "react-test-renderer"
import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import baseTheme from "../../../../theming/themes/baseTheme"
import CurrencyInput from "./CurrencyInput"
import "@testing-library/jest-dom"

const setup = () => {
  const utils = render(
    <ThemeProvider theme={baseTheme}>
      <CurrencyInput id="1" label="input" suffix="kr" prefix="kr" />
    </ThemeProvider>
  )
  const input = utils.getByLabelText("input")
  return {
    input,
    ...utils
  }
}

describe("Alert", () => {
  describe("Snapshots", () => {
    it("No props", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={baseTheme}>
            <CurrencyInput id="test" suffix="kr" prefix="kr" />
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("simulate input", () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: 1000 } })
      expect(input.value).toBe("1000")
    })
  })
})

describe("Rendering", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <CurrencyInput id="test" data-testid="testID" suffix="kr" prefix="kr" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("testID")).toBeInTheDocument()
  })
})
