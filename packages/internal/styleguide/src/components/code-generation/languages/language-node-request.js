import Prism from "prismjs"
import { blast } from "../utils"

export default {
  generate: ({ summary, method, path, headers, body, queryParams }) =>
    // language=JavaScript
    `
  /**
* ${summary}
*/
const request = require("request");
    const options = { 
      method: "${method}",
      url: "${path}",
      ${
        headers
          ? `headers: {
        ${blast(headers)}
       },`
          : ""
      }
     formData: {
        ${blast(body)}
      },
      qs: {${blast(queryParams)}}
    }
    
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
    
      console.log(body);
    });
  `,
  className: "language-js",
  language: "javascript",
  grammar: Prism.languages.javascript
}
