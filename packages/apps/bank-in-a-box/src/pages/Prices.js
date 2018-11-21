import React from "react"
import {
  Layout,
  LayoutItem,
  Heading,
  Box,
  List,
  SplitListItem
} from "@staccx/base"
import Back from "../components/Back"

const Prices = ({ history }) => (
  <Layout variant="prices">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Back history={history} path="/" />
      <Heading level="2">Priser</Heading>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <Layout>
        <Heading variant="subHeading" level="3">
          Høyrente
        </Heading>
        <Box variant="prices">
          <List>
            <SplitListItem>
              <div>
                Effektiv rente <br /> beløp mellom 50 000,- og 2 mill
              </div>
              <div>1,90%</div>
            </SplitListItem>
            <SplitListItem>
              <div>
                Effektiv rente <br />
                beløp under 50 000
              </div>
              <div>1,00%</div>
            </SplitListItem>
            <SplitListItem>
              <div>
                Nominell rente <br />
                beløp mellom 50 000,- og 2 mill
              </div>
              <div>1,88365%</div>
            </SplitListItem>
            <SplitListItem>
              <div>
                Nominell rente <br />
                beløp under 50 000
              </div>
              <div>0,99%</div>
            </SplitListItem>
            <SplitListItem>
              <div>Uttak</div>
              <div>0 kr</div>
            </SplitListItem>
          </List>
        </Box>
      </Layout>
    </LayoutItem>
  </Layout>
)

export default Prices
