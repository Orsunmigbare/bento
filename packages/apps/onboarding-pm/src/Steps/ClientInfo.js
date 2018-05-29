import React, { Component } from "react"
import styled from "styled-components"
import {
  Legend,
  Wrapper,
  CheckBox,
  Input,
  PhoneInput,
  CheckGroup,
  Heading,
  Paragraph,
  Button
} from "@staccx/base"
import { spacing } from "@staccx/theme"
import Form from "../Components/Form"

const handleSamtykkeChange = value => {
  console.log("You checked " + value)
}

const handleUtenlandsChange = value => {
  console.log("You checked " + value)
}

const handleOriginChange = value => {
  console.log("You checked " + value)
}

class ClientInfo extends Component {
  render() {
    return (
      <Form>
        <Fieldset>
          <Heading level="2">Personalia</Heading>
          <PhoneInput label="Mobilnummer" id="dlkn2" />
          <Input label="E-post" placeholder="mail@mail.com" id="mail" />
        </Fieldset>
        <Fieldset>
          <Heading level="2">Om din sparing</Heading>
          <Paragraph>
            Vi er pliktig til å innhente informasjon om ditt kundeforhold i
            henhold til hvitvaskingsloven og ber derfor om at du svarer på
            spørsmålene nedenfor.
          </Paragraph>
        </Fieldset>
        <Fieldset>
          <Legend>Hva er opprinnelsen til midlene som spares?</Legend>
          <CheckGroup onChange={handleOriginChange} group="origin">
            <CheckBox group="opprinnelse" id="salary" value="salary" key="test">
              Lønn/Pensjon
            </CheckBox>
            <CheckBox group="opprinnelse" id="gift" value="gift" key="test2">
              Gave/Arv
            </CheckBox>
            <CheckBox
              group="opprinnelse"
              id="savings"
              value="savings"
              key="test3"
            >
              Oppsparte midler
            </CheckBox>
            <CheckBox
              group="opprinnelse"
              id="property"
              value="property"
              key="test4"
            >
              Salg av eiendom
            </CheckBox>
            <CheckBox group="opprinnelse" id="other" value="other" key="test4">
              Annet
            </CheckBox>
          </CheckGroup>
        </Fieldset>
        <Fieldset>
          <Legend>Huk av kun dersom dette gjelder deg</Legend>
          <CheckGroup onChange={handleUtenlandsChange} group="utenlands">
            <CheckBox id="231432" value="foreignCitizen">
              Jeg har utenlandsk statsborgerskap og/eller skatteplikt utenfor
              Norge.
            </CheckBox>
            <CheckBox id="5436457" value="notOnlyPrivatePurpose">
              Kontoen er ikke til privat bruk.
            </CheckBox>
          </CheckGroup>
        </Fieldset>

        <Fieldset>
          <Heading level="2">Samtykke</Heading>
          <CheckGroup onChange={handleSamtykkeChange} group="samtykke">
            <CheckBox
              group="samtykke"
              id="gffdsgdf"
              value="electronicDocumentation"
            >
              Jeg samtykker til mottak av elektronisk kommunikasjon
            </CheckBox>
            <CheckBox
              group="samtykke"
              id="fdsfdsdf7f"
              value="newsAndAdvertisment"
            >
              Jeg samtykker til mottak av av tilbud og nyheter om andre
              produkter.
            </CheckBox>
          </CheckGroup>
        </Fieldset>

        <Button variant="primary" onClick={() => this.props.steps.bankId()}>
          Til signering
        </Button>
      </Form>
    )
  }
}

const Fieldset = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
`

export default ClientInfo
