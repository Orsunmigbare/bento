import PropTypes from "prop-types"
import React from "react"
import { Fetch, Loading } from "@staccx/base"
import { Provider } from "./context/schema"
import findTags from "../utils/findTags"
import sortByTags from "../utils/sortByTags"
import convertSwaggerToOpenApi from "../utils/convertSwaggerToOpenApi"
import axios from "axios/index"

const mapData = item => {
  return convertSwaggerToOpenApi(item.data, {})
}
class SchemaProvider extends React.Component {
  render() {
    return (
      <Fetch url={this.props.url} get={axios.get} mapData={mapData}>
        {({ data }) => {
          if (!data) {
            return <Loading />
          }
          const { openapi } = data
          if (!openapi) {
            // TODO: Give good error message, or possibly "Try again"
            return <div>Error</div>
          }

          const tags = findTags(openapi)
          const sorted = sortByTags(openapi, tags)

          const { components, info, servers } = openapi

          const { requestBodies, schemas, securitySchemes } = components
          return (
            <Provider
              value={{
                requestBodies,
                securitySchemes,
                schemas,
                openapi,
                tags,
                sorted,
                servers,
                components,
                info
              }}
            >
              {this.props.children}
            </Provider>
          )
        }}
      </Fetch>
    )
  }
}

export default SchemaProvider

SchemaProvider.propTypes = {
  children: PropTypes.any.isRequired,
  requestBodies: PropTypes.any,
  schemas: PropTypes.any,
  securitySchemes: PropTypes.any
}
