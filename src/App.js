import React, { Component } from "react"
import { Provider } from "mobx-react"
import styled, { ThemeProvider, injectGlobal } from "styled-components"
import { HotKeys } from "react-hotkeys"
import { Wrapper, hideVisually } from "@staccx/base"
import AprilaTheme from "./Theme/Aprila/Theme"
import NorfjellTheme from "./Theme/Norfjell/Theme"
import { Grid } from "./components/Grid"
import Account from "./components/Account"
import Transactions from "./components/Transactions"
import Menu from "./components/Menu/Menu"
import Deposit from "./pages/Deposit"

import { account, customer } from "./state"

const keyMap = {
  switchTheme: "t"
}

class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      activeTheme: NorfjellTheme,
      currentPage: null
    }
    this.toggleTheme = this.toggleTheme.bind(this)
    this.onThemeChanged = this.onThemeChanged.bind(this)
  }

  componentDidMount() {
    this._container.focus()
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isFocused && this.props.isFocused) {
      this._container.focus()
    }
  }

  toggleTheme() {
    console.log("Switching away from " + this.state.activeTheme.name)
    if (this.state.activeTheme.name === "Aprila") {
      this.setState({
        activeTheme: NorfjellTheme
      }, this.onThemeChanged)
    } else {
      this.setState({
        activeTheme: AprilaTheme
      }, this.onThemeChanged)
    }
  }

  onThemeChanged() {
  }

  setPage(pageName) {
    this.setState({
      currentPage: pageName
    })
  }

  render() {
    const handlers = {
      switchTheme: this.toggleTheme
    }

    const pages = {
      deposit: () => this.setPage("deposit")
    }

    injectGlobal`${this.state.activeTheme.global}`
    return (
      <div>
        <HotKeysHandler keyMap={keyMap} handlers={handlers} focused>
          <input ref={c => (this._container = c)} />
        </HotKeysHandler>
        <ThemeProvider theme={this.state.activeTheme}>
          <Provider customer={customer} account={account}>
            <div>
              <Wrapper size="small">
                <Grid>
                  <Account />
                  <Transactions />
                  <Menu pages={pages} />
                </Grid>
              </Wrapper>
              {this.state.currentPage === "deposit" && <Deposit />}
            </div>
          </Provider>
        </ThemeProvider>
      </div>
    )
  }
}

const HotKeysHandler = styled(HotKeys)`
  &:focus {
    outline: 0;
  }

  > input {
    ${hideVisually};
  }
`

export default App
