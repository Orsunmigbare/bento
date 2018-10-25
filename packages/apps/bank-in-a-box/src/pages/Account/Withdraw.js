import React from "react"
import PropTypes from "prop-types"
import { formatPhone, formatCurrency } from "@staccx/formatting"
import {
  Wrapper,
  Button,
  Layout,
  LayoutItem,
  Input,
  AccountInput,
  Alert,
  Heading,
  Box,
  Text
} from "@staccx/base"
import Back from "../../components/Back"

export class Withdraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toNumber: null
    }
    this.addAccountNumber = this.addAccountNumber.bind(this)
  }

  addAccountNumber() {
    console.log("addAccountNumber")
    this.setState({
      toNumber: this.props.accountNumber
    })
  }

  render() {
    const { history, accountNumber, saldo } = this.props
    const { toNumber } = this.state
    return (
      <Wrapper variant="bib">
        <LayoutItem variant="fadeIn" delay="200">
          <Back history={history} path="/account/546126722" />
          <Heading level="1" variant="primary">
            Ta ut penger
          </Heading>
          <Heading level="2" variant="withdrawSubtitle">
            {formatCurrency(saldo, { precision: 2, decimal: "," })} disponibelt
          </Heading>
        </LayoutItem>
        <Layout grid="rows">
          <LayoutItem variant="fadeIn" delay="400">
            <Box variant="withdrawInputs" size="flush">
              <Input
                label="Beløp"
                placeholder="0"
                type="tel"
                id="telwithdraw"
              />
              <AccountInput
                label="Kontonummer"
                placeholder="XXXX XX XXXXX"
                id="accountwithdraw"
                value={toNumber}
              />
            </Box>
          </LayoutItem>
          <LayoutItem variant="fadeIn" delay="600">
            <Alert
              type="info"
              onClick={() => this.addAccountNumber()}
              role="button"
              tabindex="4"
              aria-pressed="false"
            >
              Siste innskudd kom fra{" "}
              <Text variant="withdrawAlertNumber">
                {formatPhone(accountNumber, "XXXX XX XXXXX")}
              </Text>
              . Klikk her for å sende penger tilbake
            </Alert>
          </LayoutItem>
          <LayoutItem variant="fadeIn" delay="800">
            <Button>Overfør</Button>
          </LayoutItem>
        </Layout>
      </Wrapper>
    )
  }
}

Withdraw.propTypes = {
  accountNumber: PropTypes.number,
  toNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  saldo: PropTypes.number
}

Withdraw.defaultProps = {
  accountNumber: 98011574238,
  toNumber: null,
  saldo: 0
}

export default Withdraw
