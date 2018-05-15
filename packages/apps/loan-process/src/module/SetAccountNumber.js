import React from "react"
import PropTypes from "prop-types"
import { withFormik } from "formik"
import Yup from "yup"
import { AccountInput, Button, Wrapper } from "@staccx/base"
import { removeWhitespace } from "@staccx/formatting"
import {
  Heading,
  Hr,
  Illustration,
  PaddedContainer,
  TileBox
} from "./replace/Styles"
import ValidationError from "./replace/ValidationError"

const Form = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    onChange,
    renderIllustration
  } = props

  const _handleChange = e => {
    handleChange(e)
    if (onChange) {
      onChange(e)
    }
  }

  const _handleSubmit = e => {
    handleSubmit(e)
  }

  return (
    <form onSubmit={_handleSubmit}>
      <Illustration>{renderIllustration && renderIllustration()}</Illustration>
      <Heading>{props.headingText}</Heading>
      <Wrapper size="small" breakout>
        <TileBox>
          <PaddedContainer>{props.loanTypeText}</PaddedContainer>
          <Hr />
          <AccountInput
            guide={false}
            value={values.accountNumber}
            onChange={_handleChange}
            label={props.accountNumberText}
            placeholder="XXXX XX XXXX"
            id="accountNumber"
            locale={"nb"}
          />
          {errors.accountNumber &&
            touched.accountNumber && (
              <ValidationError>{errors.accountNumber}</ValidationError>
            )}
        </TileBox>
        {!isSubmitting && (
          <Button type="submit" onClick={() => null}>
            {props.continueButtonText}
          </Button>
        )}
      </Wrapper>
    </form>
  )
}

Form.propTypes = {
  accountNumber: PropTypes.string
}

const FormikForm = withFormik({
  mapPropsToValues: props => {
    return {
      accountNumber: props.accountNumber,
      onValidated: props.onValidated
    }
  },
  validationSchema: props =>
    Yup.object().shape({
      accountNumber: Yup.string()
        .transform(result => removeWhitespace(result.toString()))
        .min(11)
        .required(props.accountNumberErrorText)
    }),

  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      setSubmitting(false)
      if (props.onValidated) {
        props.onValidated({
          accountNumber: removeWhitespace(values.accountNumber)
        })
      }
    }, 10)
  }
})(Form)

class SetAccountNumber extends React.PureComponent {
  render() {
    return (
      <FormikForm
        onChange={this.props.onChange}
        headingText={this.props.headingText}
        loanTypeText={this.props.loanTypeText}
        accountNumberText={this.props.accountNumberText}
        continueButtonText={this.props.continueButtonText}
        accountNumberErrorText={this.props.accountNumberErrorText}
        onValidated={this.props.onValidated}
        renderIllustration={this.props.renderIllustration}
      />
    )
  }
}

SetAccountNumber.propTypes = {
  accountNumberErrorText: PropTypes.string,
  accountNumberText: PropTypes.string,
  continueButtonText: PropTypes.string,
  headingText: PropTypes.string,
  loanTypeText: PropTypes.string,
  onChange: PropTypes.func,
  onValidated: PropTypes.func.isRequired,
  renderIllustration: PropTypes.func
}

SetAccountNumber.defaultProps = {
  accountNumberErrorText: "Account number invalid",
  accountNumberText: "Account number",
  continueButtonText: "Continue",
  headingText: "Enter account number",
  loanTypeText: "Credit | Loan"
}

export default SetAccountNumber
