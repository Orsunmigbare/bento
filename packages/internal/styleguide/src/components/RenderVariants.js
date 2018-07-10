import React from "react"
import { ThemeProvider } from "@staccx/theme"
import { Heading, Divider, Text } from "@staccx/base"
import ComponentDocumentation from "./ComponentDocumentation"

export default props => {
  const {
    component,
    themeName,
    themes,
    componentState,
    setComponentState,
    variants
  } = props

  console.log(variants)
  return (
    <ComponentDocumentation width={"320px"}>
      <ThemeProvider themeName={themeName} themes={themes}>
        <div>
          {Reflect.ownKeys(variants).map(key => {
            const variant = variants[key]
            return (
              <React.Fragment key={variant.name}>
                <Heading level={5}>{variant.name}</Heading>
                {variant.isOverriddenDefault && <Text>Overridden default</Text>}
                <Divider />
                {component.render({
                  ...componentState,
                  setState: setComponentState,
                  variant: variant.value
                })}
              </React.Fragment>
            )
          })}
        </div>
      </ThemeProvider>
    </ComponentDocumentation>
  )
}
