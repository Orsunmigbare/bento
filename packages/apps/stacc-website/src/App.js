import React, { Component } from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { Router, Switch, Route } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Clients from "./pages/Clients"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"
import Overview from "./pages/Overview"
import Services from "./pages/Services"
import ServicesInfrastructure from "./pages/ServicesInfrastructure"
import Service from "./pages/Service"
import People from "./pages/People"
import Footer from "./components/Footer/Footer"

class App extends Component {
  render() {
    const history = createHistory()
    return (
      <ThemeProxyProvider theme={theme}>
        <Router history={history}>
          <PageWrapper>
            <Header />
            <Wrapper>
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/clients" component={Clients} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/careers" component={Jobs} />
                  <Route path="/people" component={People} />
                  <Route path="/overview" component={Overview} />
                  <Route path="/services" exact component={Services} />
                  <Route
                    path="/services/:filter(infrastructure)"
                    component={ServicesInfrastructure}
                    exact
                  />
                  <Route path="/services/:product" component={Service} />
                </Switch>
              </main>
            </Wrapper>
            <Footer />
          </PageWrapper>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export default App
