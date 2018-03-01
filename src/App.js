import React, { Component } from "react"
import { ThemeProvider, Wrapper } from "@staccx/base"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import DevTools from "mobx-react-devtools"
import { observer } from "mobx-react"
import { injectGlobal } from "styled-components"
import { themeLaser } from "./theme/themeLaser"
import Stepper from "./components/Stepper"
import DataTest from "./components/DataTest"
import TestQuestion from "./components/TestQuestion"

const elementStyles = () => injectGlobal` // Todo: Better solution for this
  html body {
    font-family: 'Libre Franklin', sans-serif !important;
  }
`

@observer
class App extends Component {
  render() {
    elementStyles()
    return (
      <ThemeProvider theme={themeLaser}>
        <div style={{ paddingTop: "48px" }}>
          <Router>
            <Wrapper>
              <Stepper current={3} />
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <TestQuestion />
                    <Link to="/page1">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page1"
                render={() => (
                  <div>
                    <DataTest /> <Link to="/">Tilbake</Link>{" "}
                    <Link to="/page2">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page2"
                render={() => (
                  <div>
                    Page 2 <Link to="/page1">Tilbake</Link>{" "}
                    <Link to="/page3">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page3"
                render={() => (
                  <div>
                    Page 3 <Link to="/page2">Tilbake</Link>{" "}
                    <Link to="/page4">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page4"
                render={() => (
                  <div>
                    Page 4 <Link to="/page3">Tilbake</Link>{" "}
                    <Link to="/page5">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page5"
                render={() => (
                  <div>
                    Page 5 <Link to="/page4">Tilbake</Link>
                    <Link to="/page6">Neste</Link>
                  </div>
                )}
              />
              <Route
                exact
                path="/page6"
                render={() => (
                  <div>
                    Page 6 <Link to="/page5">Tilbake</Link>{" "}
                    <Link to="/">Tilbake til start</Link>
                  </div>
                )}
              />
            </Wrapper>
          </Router>
          <DevTools />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
