import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import theme from "./theme/Theme"
import SanityProvider from "./components/SanityProvider"
import SanityQuery from "./components/SanityQuery"
import SanityDocument from "./components/SanityDocument"
import SanityList from "./components/SanityList"

const testQuery = `*[_type == 'i18n']`
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"gwvp4jhb"}>
          <Router>
            <div>
              <Route
                path={"/"}
                exact
                render={() => (
                  <Wrapper>
                    <SanityQuery id={"testing"} query={testQuery}>
                      {({ result }) => {
                        if (!result) {
                          return null
                        }
                        return result.map(i => (
                          <div key={i._id}>{i.value.nb}</div>
                        ))
                      }}
                    </SanityQuery>

                    <SanityDocument id={"579afb83-3899-4761-979b-560b5fe58ebe"}>
                      {({ document }) => {
                        if (!document) {
                          return <div>loading...</div>
                        }
                        return <div>{document.value.nb}</div>
                      }}
                    </SanityDocument>

                    <SanityList type={"i18n"} count={10} pick={"value, _id"}>
                      {({ result }) => {
                        if (!result) {
                          return null
                        }
                        return result.map(i => (
                          <div key={"bah" + i._id}>{i.value.nb}</div>
                        ))
                      }}
                    </SanityList>
                    <Link to={"/other"}>Annen side</Link>
                  </Wrapper>
                )}
              />

              <Route
                path={"/other"}
                exact
                render={() => (
                  <Wrapper>
                    Same list different page.
                    <SanityList type={"i18n"} count={10} pick={"value, _id"}>
                      {({ result }) => {
                        if (!result) {
                          return null
                        }
                        return result.map(i => (
                          <div key={"bah" + i._id}>{i.value.nb}</div>
                        ))
                      }}
                    </SanityList>
                    <Link to={"/"}>Tilbake</Link>
                  </Wrapper>
                )}
              />
            </div>
          </Router>
        </SanityProvider>
      </ThemeProvider>
    )
  }
}

export default App
