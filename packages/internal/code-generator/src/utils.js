export const blast = obj => {
  if (!obj) return "{}"
  const keys = Object.keys(obj)
  let result = "{"
  keys
    .map((key, index) => {
      return `"${key}": "${obj[key]}"${index < keys.length - 1 ? "," : ""}`
    })
    .map(element => {
      if (element) {
        console.log("concat", element)
        result += element
      }
    })
  result += "}"
  return result
}

export const fromOpenApi = openApi => {
  const codeGeneratorInputs = {}
  const paths = Reflect.ownKeys(openApi.paths)

  paths.map(path => {
    const operations = Reflect.ownKeys(openApi.paths[path])

    operations.map(operation => {
      const op = openApi.paths[path][operation]

      const result = fromOperation(path, operation, op)

      if (!codeGeneratorInputs[path]) {
        codeGeneratorInputs[path] = {}
      }

      codeGeneratorInputs[path][operation] = result
    })
  })

  return codeGeneratorInputs
}

const fromOperation = (path, operationType, operationObject) => {
  const result = {
    summary: operationObject.summary || "no summary",
    method: operationType,
    path: path,
    headers: { Accept: "application/json" },
    queryParams: {},
    body: {}
  }

  const parameters = operationObject.parameters || []

  if (parameters) {
    parameters.map(parameter => {
      if (parameter.in === "query") {
        result.queryParams[parameter.name] = "testQueryValue"
      }

      if (parameter.in === "body") {
        result.body[parameter.name] = "testParamValue"
      }
    })
  }

  return result
}
