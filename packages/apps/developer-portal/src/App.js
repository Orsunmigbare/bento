import React, { Component } from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeComponent } from "@staccx/theme"
import { Layout, LayoutItem, Box, Wrapper } from "@staccx/base"
import SwaggerDocs from "./pages/SwaggerDocs"
import Introduction from "./pages/Introduction"
import Menu from "./components/Menu/Menu"
import Header from "./components/Header/Header"

import fakeMenu from "./_fakeData/fakeMenu"
import ApiReference from "./pages/ApiReference"
import OpenApiProvider from "./components/OpenApiProvider"
import PropTypes from "prop-types"
class App extends Component {
  render() {
    return (
      <OpenApiProvider url={this.props.openApiUrl}>
        <Router>
          <Layout grid="dashboard" variant="responsiveDashboard">
            <LayoutItem area="aside" variant="sidebar">
              <Box variant="header">
                <ThemeComponent tagName={"logo"} fallback={null} />
              </Box>
              <Box variant="documentationMenu">
                <Menu data={fakeMenu} />
              </Box>
            </LayoutItem>
            <LayoutItem area="main">
              <Header />
              <Wrapper size="documentation">
                <Switch>
                  <Route path="/" component={Introduction} exact />
                  <Route path="/swagger" component={SwaggerDocs} exact />
                  <Route path="/api-reference" component={ApiReference} exact />
                  <Route
                    path="/api-reference/:path"
                    render={({ match }) => {
                      return null
                    }}
                  />
                  <Route path={"/api"} exact component={ApiReference} />
                </Switch>
              </Wrapper>
            </LayoutItem>
          </Layout>
        </Router>
      </OpenApiProvider>
    )
  }
}

App.propTypes = {
  openApiUrl: PropTypes.string.isRequired
}

export default App
