import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  Box,
  Button,
  Heading,
  ItemGroup,
  List,
  Odometer,
  Select,
  SelectOption,
  SelectSelected,
  Wrapper
} from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import PickLoanSum from "./PresentOffer.PickLoanSum"
import { color, spacing } from "@staccx/theme"

class PresentOffer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCustomAmount: false,
      amount: props.loanAmount,
      selectedDuration: props.repaymentPeriod,
      initialized: false,
      isValid: true
    }
    this.handleSetCustom = this.handleSetCustom.bind(this)
    this.handleChangeLoanDuration = this.handleChangeLoanDuration.bind(this)
    this.handleCustomAmount = this.handleCustomAmount.bind(this)
  }

  handleSetCustom(value) {
    const parsed = parseInt(value, 10)
    const isCustomAmount = parsed === -1
    this.setState(
      {
        isCustomAmount,
        amount: isCustomAmount ? this.state.amount : parsed
      },
      () => this.handleCustomAmount(this.state.amount)
    )
  }

  handleChangeLoanDuration(duration) {
    this.setState({ selectedDuration: duration }, () => {
      this.props.handleChangeLoanDuration(duration)
    })
  }

  handleCustomAmount(value) {
    this.setState({ amount: value }, () => {
      this.props.handleChangeCustomAmount(value)
      if (value >= this.props.minAmount && value <= this.props.maxAmount) {
        this.setState({ isValid: true })
      } else {
        this.setState({ isValid: false })
      }
    })
  }

  respondToOffer(accepted) {
    const { amount: loanAmount, selectedDuration: repaymentPeriod } = this.state
    return this.props.onComplete({
      accepted,
      loanAmount,
      repaymentPeriod
    })
  }

  render() {
    console.log(this.state.amount)
    return (
      <div>
        <Wrapper size="medium" breakout>
          <Heading variant="centered">{this.props.headingText}</Heading>
          <Box variant="actionBox">
            <Box size="large">
              <p>
                {this.props.maxLoanAmountText}{" "}
                <strong> {formatCurrency(this.props.maxAmount || 0)}</strong>
              </p>
            </Box>
            <PickLoanSum
              loanAmount={this.state.amount}
              repaymentPeriod={this.props.repaymentPeriod}
              isCustomAmount={this.state.isCustomAmount}
              initialAmount={this.props.loanAmount}
              handleRadio={this.handleSetCustom}
              handleCustomAmount={this.handleCustomAmount}
              min={this.props.minAmount}
              max={this.props.maxAmount}
              chooseLoanAmountText={"Velg beløp"}
              otherAmountText={"Annet beløp"}
            />
            <Box size="large">
              <OfferTable>
                <tbody>
                  <tr>
                    <OfferTableText>
                      {this.props.loanDurationText}
                    </OfferTableText>
                    <OfferTableData>
                      <OfferTableDurations>
                        <OfferTableDurationsItem>
                          <Select
                            id={"select-loan-duration"}
                            selectedElement={SelectSelected}
                            placeHolderLabel={"Velg…"}
                            onChange={value =>
                              this.handleChangeLoanDuration(
                                value ? value.text : this.props.repaymentPeriod
                              )
                            }
                            variant="loanOffer"
                          >
                            {this.props.potentialDurations.map(item => (
                              <SelectOption
                                key={item}
                                data={{ text: item, value: "mnd" }}
                              >
                                <strong>{item} mnd.</strong>
                              </SelectOption>
                            ))}
                          </Select>
                        </OfferTableDurationsItem>
                      </OfferTableDurations>
                    </OfferTableData>
                  </tr>
                  <tr>
                    <OfferTableText>{this.props.monthlyFeeText}</OfferTableText>
                    <OfferTableData>
                      <Odometer number={this.props.monthlyFees} size={14} />
                    </OfferTableData>
                  </tr>
                  <tr>
                    <OfferTableText>{this.props.paybackText}</OfferTableText>
                    <OfferTableData>
                      <Odometer number={this.props.paybackTotal} size={14} />
                    </OfferTableData>
                  </tr>
                  <OfferTableTotal>
                    <OfferTableText>{this.props.payMonthlyText}</OfferTableText>
                    <OfferTableData>
                      <Odometer number={this.props.monthlyPayment} size={14} />
                    </OfferTableData>
                  </OfferTableTotal>
                </tbody>
              </OfferTable>
            </Box>
            {this.props.company && (
              <Box variant="subtleBox" size="large">
                <Box variant="halves">
                  <div>
                    <h4>{this.props.companyHeadingPrefixText}</h4>
                    <List variant="offerInfoList">
                      <li>{this.props.company.name}</li>
                      <li>
                        {this.props.orgNumberPrefixText}{" "}
                        {this.props.company.orgNo}
                      </li>
                    </List>
                  </div>
                  {this.props.guarantor && (
                    <div>
                      <h4>Kausjonist</h4>
                      <List variant="offerInfoList">
                        <li>{this.props.guarantor.name}</li>
                        <li>
                          {this.props.nationalIdPrefixText}
                          {this.props.guarantor.ssn}
                        </li>
                      </List>
                    </div>
                  )}
                </Box>
              </Box>
            )}
          </Box>
          <ItemGroup>
            <Button
              disabled={!this.props.isValid}
              onClick={() => this.respondToOffer(true)}
            >
              {this.props.acceptOfferButtonText}
            </Button>
            <Button onClick={() => this.respondToOffer(false)}>
              {this.props.rejectOfferButtonText}
            </Button>
          </ItemGroup>
        </Wrapper>
      </div>
    )
  }
}

const OfferTable = styled.table`
  width: 100%;
  table-layout: fixed;
`

const OfferTableText = styled.td`
  padding: ${spacing.tiny} 0;
  border-bottom: 1px solid ${color.line};
  text-align: left;
`

const OfferTableData = styled(OfferTableText)`
  text-align: right;
`

const OfferTableTotal = styled.tr`
  font-weight: bold;
`
const OfferTableDurations = styled.div`
  display: flex;
  justify-content: flex-end;
`

const OfferTableDurationsItem = styled.div`
  &:not(:last-child) {
    margin-right: ${spacing.small};
  }
`

PresentOffer.propTypes = {
  acceptOfferButtonText: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    orgNumber: PropTypes.string
  }),
  companyHeadingPrefixText: PropTypes.string,
  guarantor: PropTypes.any,
  handleChangeCustomAmount: PropTypes.func,
  handleChangeLoanDuration: PropTypes.func,
  headingText: PropTypes.string,
  isValid: PropTypes.bool,
  loanAmount: PropTypes.number.isRequired,
  loanDurationText: PropTypes.string,
  maxAmount: PropTypes.number,
  maxLoanAmountText: PropTypes.string,
  minAmount: PropTypes.number,
  monthlyFeeText: PropTypes.string,
  monthlyFees: PropTypes.number,
  monthlyPayment: PropTypes.number,
  nationalIdPrefixText: PropTypes.string,
  onComplete: PropTypes.func.isRequired,
  onRejected: PropTypes.func.isRequired,
  orgNumberPrefixText: PropTypes.string,
  payMonthlyText: PropTypes.string,
  paybackText: PropTypes.string,
  paybackTotal: PropTypes.number.isRequired,
  potentialDurations: PropTypes.array,
  rejectOfferButtonText: PropTypes.string,
  repaymentPeriod: PropTypes.number.isRequired,
  selectedDuration: PropTypes.any
}

PresentOffer.defaultProps = {
  loanAmount: 100000,
  onComplete: console.log,

  onRejected: console.log,
  paybackTotal: 101000,
  repaymentPeriod: 6,
  acceptOfferButtonText: "Fortsett",
  company: {
    name: "Stacc X",
    orgNo: "912319123"
  },
  companyHeadingPrefixText: "Selskap",
  handleChangeCustomAmount: console.log,
  handleChangeLoanDuration: console.log,
  headingText: "Lånetilbud",
  isValid: false,
  loanDurationText: "Låneperiode",
  maxAmount: 1000000,
  maxLoanAmountText: "Du kan låne inntil",
  minAmount: 50000,
  monthlyFees: 4000,
  monthlyFeeText: "Månedlig kostnad",
  monthlyPayment: 84000,
  nationalIdPrefixText: "Personnummer",
  orgNumberPrefixText: "Organisasjonsnummer",
  paybackText: "Å betale tilbake",
  payMonthlyText: "Å betale hver måned",
  potentialDurations: [6, 3],
  rejectOfferButtonText: "Avslå",
  selectedDuration: 6
}

export default PresentOffer
