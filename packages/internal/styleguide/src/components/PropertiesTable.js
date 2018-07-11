import React from "react"
import styled from "styled-components"
import { Table, Text, Close, Check, Heading } from "@staccx/base"
import { color } from "@staccx/theme"
import { typeToString, valueToString } from "../utils"

export default ({ props }) => {
  const data = Reflect.ownKeys(props).map(key => {
    const prop = props[key]
    const { type, defaultValue, required /* description = "" */ } = prop
    return {
      name: key,
      type: typeToString(type),
      required: required || type.name.endsWith(".isRequired"),
      default: defaultValue
      // description
    }
  })

  return (
    <div>
      <Heading level="3" variant="documentationAttrs">
        Proptypes
      </Heading>
      <Table data={data} variant="propsDescription">
        {({ item }) => (
          <React.Fragment>
            <td>
              <Text>{item.name}</Text>
            </td>
            <td>{item.type}</td>
            <td>
              {item.required ? (
                <Positive>
                  <Check />
                </Positive>
              ) : (
                <Negative>
                  <Close />
                </Negative>
              )}
            </td>
            <DefaultValue>
              {item.default && valueToString(item.default)}
            </DefaultValue>
            {/* <td>{item.description}</td> */}
          </React.Fragment>
        )}
      </Table>
    </div>
  )
}

const DefaultValue = styled.td`
  color: ${color.primary};
`

const Positive = styled.span`
  color: ${color.positive};
`

const Negative = styled.span`
  color: ${color.negative};
`
