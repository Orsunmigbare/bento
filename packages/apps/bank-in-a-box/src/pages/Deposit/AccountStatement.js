import React from "react"
import { Layout, Wrapper, Heading, Button } from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"

const AccountStatement = ({ history }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <Heading level="2">Kontoutskrift</Heading>
        <Button
          onClick={() =>
            history.push({
              pathname: "/account/34551524578",
              state: backwards
            })
          }
        >
          Tilbake
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default AccountStatement
